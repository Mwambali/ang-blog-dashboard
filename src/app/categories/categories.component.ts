import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm type

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  formData: any;

  constructor() { }

  ngOnInit(): void { }

  onSubmit(formData: NgForm) { // Explicitly specify the type as NgForm
    console.log(formData.value); // Use formData.value to get the form values
  }
}
