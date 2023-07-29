import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit{

  searchTearm ='';
  searchResults : string[]=[];
  constructor(activatedRoute:ActivatedRoute, private router: Router, private authService: AuthService, private token: TokenService) {
    activatedRoute.params.subscribe((params) => {
      if(params['searchTearm']) this.searchTearm = params['searchTearm'];
    });
   }
  ngOnInit(): void {
  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }
  onSearch(name:string){
    this.authService.getUserBySearchTerm(name).subscribe({
      next:(res:any)=>{
        this.searchResults =res;
        console.log(this.searchResults)
      },error: (error:any) => {
        console.error(error)
      }
    })
  }

  onLogout(){
    localStorage.clear();
  }
}