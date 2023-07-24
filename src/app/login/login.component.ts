import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private formBuilder:FormBuilder, private auth: AuthService, private router: Router){}
  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }
  
  onLogin(){
    if (this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.essage);
          this.loginForm.reset();
          this.router.navigate(['/general'])
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
    else{
      alert("Your form is invalid")
    }
  }
}
