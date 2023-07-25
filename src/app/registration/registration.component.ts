import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  constructor(private formBuilder:FormBuilder, private auth: AuthService, private router: Router, private tokenService: TokenService){}
  registrationForm!:FormGroup
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Contact: ['', Validators.required],
      Dob: ['', Validators.required],
      Password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      AddressLine1: ['', Validators.required],
      AddressLine2: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      PermanentCity: ['', Validators.required],
      PermanentState: ['', Validators.required],
    });
  }

  onSave() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value)
      this.auth.registration(this.registrationForm.value)
      .subscribe({
        next:(res=>{
          alert(res.message);
          this.registrationForm.reset();
          this.router.navigate(['/general']);
        }),
        error: (err=>{
          alert(err?.error.message);
        })
      })

      console.log(this.registrationForm.value)
    } else {
      alert("Your form is invalid");
    }
  }

  onCancel() {
     this.router.navigate(['/home']);
  }  

}
