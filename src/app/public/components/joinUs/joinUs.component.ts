import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JoinUsService } from '../../services/join-us.service';

@Component({
  selector: 'app-joinUs',
  templateUrl: './joinUs.component.html'
})
export class JoinUsComponent implements OnInit {
  requiredField = "ce champ est obligatoire";
  joinUsForm!: FormGroup;
  currentYear!: number;
  errorMessage='';
  // successMessage: string | null = null;
  recaptchaSiteKey: string = '6LdvMzcoAAAAAKCCiDznKQlqz5oovlC2ArYIXyN4'; 
  isRecaptchaResolved: boolean = false;
  successMessage: string = '';
  regionsTunisie: string[] = ['Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kébili', 'Le Kef', 'Mahdia', 'Manouba', 'Médenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'];
  officeArsii: string[] = ['OFFICE_SFAX','OFFICE_SOUSSE','OFFICE_TUNIS'];

  constructor(private joinUsService: JoinUsService) {
    this.currentYear = new Date().getFullYear();
  }


  ngOnInit(): void {
    this.joinUsForm = new FormGroup({
      lastName: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      gender: new FormControl('female'),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required]),
      userName: new FormControl(null, [Validators.required]),
      region: new FormControl(null, [Validators.required]),
      office: new FormControl('OFFICE_SOUSSE'),
      job: new FormControl(null, [Validators.required]),
      universityOrCompany: new FormControl(null),
    },
    {
      validators: this.passwordMatchValidator 
    }
    );
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirm_password = control.get('confirm_password');

    if (!password || !confirm_password) {
      return null;
    }

    if (password.value === confirm_password.value) {
      return null; 
    } else {
      return { passwordMismatch: true };
    }
  }
  submitForm(): void {
    if (this.joinUsForm.valid && this.isRecaptchaResolved) {
      const formData = this.joinUsForm.value;
      // const userName = this.joinUsForm.get('userName')?.value;
      // const email = this.joinUsForm.get('email')?.value;
      console.log(this.joinUsForm.value);
      this.joinUsService.sendFormData(formData).subscribe(
        (response) => {
          this.successMessage = "L'adhésion a été effectuée avec succès."; 
          this.isRecaptchaResolved = false;
          this.joinUsForm.reset(); 
        },
        (error) => { 
          if (error.status === 409) {
            this.errorMessage = "Cet email ou nom d'utilisateur est déjà utilisé par un autre utilisateur.";
          } else if (error.status === 422) {
            this.errorMessage = "Une erreur de validation s'est produite. Veuillez vérifier vos informations.";
          } else {
            this.errorMessage = "Une erreur s'est produite lors de l'adhésion. Veuillez réessayer.";
          }
          
        }
      );
    }   
  }
  onRecaptchaResolved(event: any) {
    this.isRecaptchaResolved = true;
  }

}
