import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private formBuilder:FormBuilder, private auth: AuthService, private token: TokenService, private router: Router, private tokenService: TokenService){}
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
          alert(res.message);
          const _token = res.token.token;
          this.token.setToken(_token);
          const id = res.id;
          this.token.setId(id);
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
  onRegistration(){
    this.router.navigate(['/registration'])
  }
}
