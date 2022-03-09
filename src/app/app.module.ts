import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddressCardComponent } from './components/address-card/address-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddressComponent,
    UsersPageComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    AddressCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
