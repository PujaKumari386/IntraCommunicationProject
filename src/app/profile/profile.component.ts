import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authService: AuthService,  private router: Router) { }
  myProfile = new FormGroup({

  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  contact: new FormControl(''),
  dob: new FormControl(''),
  addressLine1: new FormControl(''),
  addressLine2: new FormControl(''),
  city: new FormControl(''),
  state: new FormControl(''),
  permanentCity: new FormControl(''),
  permanentState: new FormControl(''),

  }); 

  user: any = {};
  
  ngOnInit() {
    this.getUsers();
    
  }

  getUsers() {
    // You can get the user's ID from local storage or from any other source
    const userId = localStorage.getItem("id");

    this.authService.getuserbyid(userId)
      .subscribe({
        next: (res) => {
          this.user = res; // Assign the retrieved user data to the 'user' object
          console.log(this.user);
          this.myProfile.patchValue({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            contact: this.user.contact,
            dob:this.user.dob,
            addressLine1: this.user.addressLine1,
            addressLine2: this.user.addressLine2,
            city: this.user.city,
            state: this.user.state,
            permanentCity: this.user.permanentCity,
            permanentState: this.user.permanentState,
            })
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  UpdateUser(){}/*
    this.authService.Updateprofile(userId)
    let body = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          contact: user.contact,
          dob:user.dob,
          addressLine1: user.addressLine1,
          addressLine2: user.addressLine2,
          city: user.city,
          state: user.state,
          permanentCity: user.permanentCity,
          permanentState: user.permanentState
          }
  }*/
  

}