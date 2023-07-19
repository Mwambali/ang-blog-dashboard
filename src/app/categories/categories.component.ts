import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm type
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  formData: any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {

  }

  onSubmit(formData: NgForm) { // Explicitly specify the type as NgForm
    let categoryData = {
      category: formData.value.category
    }
    this.afs.collection('categories').add(categoryData).then(docRef => {
      console.log(docRef);
    })
      .catch(err => console.log(err))
  }

}
