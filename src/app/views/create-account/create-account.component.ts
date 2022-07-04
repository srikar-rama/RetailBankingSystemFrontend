import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  public accountForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.accountForm = new FormGroup({
      businessId: new FormControl(),
    });
  }
onSubmit(){
  
}
}
