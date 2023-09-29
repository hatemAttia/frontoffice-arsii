import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JoinUsService } from '../../services/join-us.service';

@Component({
  selector: 'app-joinUs',
  templateUrl: './joinUs.component.html'
})
export class JoinUsComponent implements OnInit {
  formSubmitted = false;
  joinUsForm!: FormGroup;
  currentYear!: number;
  errorMessage: string = '';
  recaptchaSiteKey: string = '6LdvMzcoAAAAAKCCiDznKQlqz5oovlC2ArYIXyN4'; 
  isRecaptchaResolved: boolean = false;
  successMessage: string = '';
  isLoading = false;
  hasError = false;
  isSuccess = false;
  regionsTunisie: string[] = ['Ariana', 'Béja', 'Ben Arous', 'Bizerte', 'Gabès', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kébili', 'Le Kef', 'Mahdia', 'Manouba', 'Médenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'];
  officeArsii: string[] = ['OFFICE_SFAX','OFFICE_SOUSSE','OFFICE_TUNIS'];
  errorMessages = {
    lastName: [
      { type: 'required', message: 'Le nom est obligatoire.' }
    ],
    firstName: [
      { type: 'required', message: 'Le prénom est obligatoire.' }
    ],
    phoneNumber: [
      { type: 'required', message: 'Le numéro de téléphone est obligatoire.' }
    ],
  };

  constructor(private fb: FormBuilder,private joinUsService: JoinUsService) {
    this.currentYear = new Date().getFullYear();
    
  }


  ngOnInit(): void {
    this.joinUsForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['female', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      region: ['', [Validators.required]],
      office: ['OFFICE_SOUSSE'],
      job: ['', Validators.required],
      universityOrCompany: [''],
    }, {
      validator: this.passwordMatchValidator 
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
    this.formSubmitted = true;
    if (this.joinUsForm.valid && this.isRecaptchaResolved) {
      const formData = this.joinUsForm.value;
      console.log(this.joinUsForm.value);
      this.joinUsService.sendFormData(formData).subscribe(
        (response) => {
          console.log('Réponse du serveur :', response);
  
          this.joinUsForm.reset(); 
          this.isSuccess = true; 
          this.successMessage = 'Votre message a bien été envoyé. Merci !'; 
          this.isRecaptchaResolved = false;
        },
        (error) => {
          console.error('Erreur lors de la soumission du formulaire :', error);
          this.hasError = true; 
          this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer plus tard.'; 
        }
      );
      this.joinUsForm.reset();
    } 
    else {
      
    }
  }
  onRecaptchaResolved(event: any) {
    this.isRecaptchaResolved = true;
  }

}
