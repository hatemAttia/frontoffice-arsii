import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  isLoading = false;
  hasError = false;
  isSuccess = false;
  contactForm: FormGroup;
  errorMessage: string = '';
  recaptchaSiteKey: string = '6LdvMzcoAAAAAKCCiDznKQlqz5oovlC2ArYIXyN4'; 
  isRecaptchaResolved: boolean = false;
  successMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService) {
    this.contactForm = this.formBuilder.group({
      from: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.contactForm.valid && this.isRecaptchaResolved) {
      const formData = this.contactForm.value;
      console.log(formData);
      this.contactService.sendFormData(formData).subscribe(
        (response) => {
          console.log('Réponse du serveur :', response);
  
          this.contactForm.reset();  
          this.successMessage = 'Votre message a bien été envoyé. Merci !'; 
          this.isRecaptchaResolved = false;
        },
        (error) => {
          console.error('Erreur lors de la soumission du formulaire :', error);
          this.errorMessage = "Une erreur s'est produite. Veuillez réessayer plus tard."; 
        }
      );
    }
  }
  onRecaptchaResolved(event: any) {
    this.isRecaptchaResolved = true;
  }


}
