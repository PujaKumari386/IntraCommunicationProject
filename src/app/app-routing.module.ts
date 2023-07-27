import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { PostComponent } from './post/post.component';
import { AddpostComponent } from './addpost/addpost.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'general', component: GeneralComponent},
  {path:'home', component: HomeComponent},
  {path:'profile', component: ProfileComponent},
  {path:'group', component: GroupComponent},
  {path:'addgroup', component: AddgroupComponent},
  {path:'post/:id', component: PostComponent},
  {path:'post/:id/addpost', component: AddpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
