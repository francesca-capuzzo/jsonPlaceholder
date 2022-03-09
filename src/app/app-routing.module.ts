import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersPageComponent } from './components/users-page/users-page.component';

const routes: Routes = [
  {path: '', redirectTo: './users', pathMatch: 'full'},     //default page
  {path: 'users', component: UsersPageComponent},           //pagina degli users
  {path: '**', component: PageNotFoundComponent},           //page not found che serve se nell'url si mette qualcosa di sbagliato --> può essere una pagina nuova o di nuovo alla homepage
  //{path: '**', redirectTo: './users'}                       //anzichè portare alla page not found ti porta alla home page     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
