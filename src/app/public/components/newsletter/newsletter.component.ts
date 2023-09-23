import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html'
})
export class NewsletterComponent implements OnInit {

  newsletterForm: FormGroup;
  recaptchaSiteKey: string = '6LdvMzcoAAAAAKCCiDznKQlqz5oovlC2ArYIXyN4';

  constructor(
    private formBuilder: FormBuilder, 
    private newsletterService: NewsletterService) {
    this.newsletterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      const formData = {
        email: this.newsletterForm.value.email,
        recaptchaResponse: grecaptcha.getResponse(),
      };

      this.newsletterService.sendFormData(formData).subscribe(
        (response) => {
          console.log('Formulaire envoyé avec succès ! Réponse du backend :', response);
          this.newsletterForm.reset();
          grecaptcha.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'envoi du formulaire :', error);
        }
      );
    }
  }

  ngOnInit(): void {
  }

}