import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JoinUsService } from '../../services/join-us.service';

@Component({
  selector: 'app-joinUs',
  templateUrl: './joinUs.component.html'
})
export class JoinUsComponent implements OnInit {

  joinUsForm!: FormGroup;
  currentYear!: number;
  errorMessage: string = '';
  recaptchaSiteKey: string = '6LdvMzcoAAAAAKCCiDznKQlqz5oovlC2ArYIXyN4'; 
  isRecaptchaResolved: boolean = false;
  successMessage: string = '';
  isLoading = false;
  hasError = false;
  isSuccess = false;

  constructor(private fb: FormBuilder,private joinUsService: JoinUsService) {
    this.currentYear = new Date().getFullYear();
  }


  ngOnInit(): void {
    this.joinUsForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    }, {
      validator: this.passwordMatchValidator 
    });
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirm_password = control.get('confirm_password');

    if (!password || !confirm_password) {
      return null;
    }

    if (password.value === confirm_password.value) {
      return null; // Les mots de passe correspondent
    } else {
      return { passwordMismatch: true }; // Les mots de passe ne correspondent pas
    }
  }
  submitForm(): void {
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
    }
  }
  onRecaptchaResolved(event: any) {
    this.isRecaptchaResolved = true;
  }

}
