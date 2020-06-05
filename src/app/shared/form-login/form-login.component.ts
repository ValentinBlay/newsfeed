import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: [
  ]
})

export class FormLoginComponent implements OnInit {
  
  // Declarations
  public formData: FormGroup;

  // Inject FormBuilder
  constructor(
      private FormBuilder: FormBuilder
  ) {}
  //Form Submit
  @Output() formSubmit = new EventEmitter();
  // Method to reset form
  private resetForm = ()  => {
      this.formData = this.FormBuilder.group({
          email: [ null, Validators.required ],
          password: [ null, Validators.required ]
      });
  };
  
  // Start 
  ngOnInit() {
      this.resetForm();
  }
};