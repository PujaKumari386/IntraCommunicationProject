import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  dateOfBirth!: Date;
  addressLine1!: string;
  addressLine2!: string;
  city!: string;
  state!: string;
  permanentCity!: string;
  permanentState!: string;
  profilePicture!: string | ArrayBuffer;

  ngOnInit() {
    this.loadProfileData();
  }

  loadProfileData() {
    // Load data from local storage if available
    const savedFirstName = localStorage.getItem('firstName');
    const savedLastName = localStorage.getItem('lastName');
    const savedEmail = localStorage.getItem('email');
    const savedDateOfBirth = localStorage.getItem('dateOfBirth');
    const savedAddressLine1 = localStorage.getItem('addressLine1');
    const savedAddressLine2 = localStorage.getItem('addressLine2');
    const savedCity = localStorage.getItem('city');
    const savedState = localStorage.getItem('state');
    const savedPermanentCity = localStorage.getItem('permanentCity');
    const savedPermanentState = localStorage.getItem('permanentState');
    const savedProfilePicture = localStorage.getItem('profilePicture');

    if (savedFirstName) {
      this.firstName = savedFirstName;
    }
    if (savedLastName) {
      this.lastName = savedLastName;
    }
    if (savedEmail) {
      this.email = savedEmail;
    }
    if (savedDateOfBirth) {
      this.dateOfBirth = new Date(savedDateOfBirth);
    }
    if (savedAddressLine1) {
      this.addressLine1 = savedAddressLine1;
    }
    if (savedAddressLine2) {
      this.addressLine2 = savedAddressLine2;
    }
    if (savedCity) {
      this.city = savedCity;
    }
    if (savedState) {
      this.state = savedState;
    }
    if (savedPermanentCity) {
      this.permanentCity = savedPermanentCity;
    }
    if (savedPermanentState) {
      this.permanentState = savedPermanentState;
    }
    if (savedProfilePicture) {
      this.profilePicture = savedProfilePicture;
    }
  }

  updateProfile() {
    localStorage.setItem('firstName', this.firstName);
    localStorage.setItem('lastName', this.lastName);
    localStorage.setItem('email', this.email);
    if (this.dateOfBirth) {
      localStorage.setItem('dateOfBirth', this.dateOfBirth.toISOString());
    }
    localStorage.setItem('addressLine1', this.addressLine1);
    localStorage.setItem('addressLine2', this.addressLine2);
    localStorage.setItem('city', this.city);
    localStorage.setItem('state', this.state);
    localStorage.setItem('permanentCity', this.permanentCity);
    localStorage.setItem('permanentState', this.permanentState);
    if (this.profilePicture) {
      localStorage.setItem('profilePicture', this.profilePicture.toString());
    }
    alert('Profile updated successfully!');
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Set the profilePicture variable to the base64 encoded image
        this.profilePicture;
      };
      reader.readAsDataURL(file);
    }
  }
}