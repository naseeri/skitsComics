import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
  @ViewChild('f') emailForm: NgForm;
  
  submitForm() {
    console.log('emailForm', this.emailForm);
    console.log('emailForm.value', this.emailForm.value);
    // console.log('emailForm', this.emailForm);
  }

}
