import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared-material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CoffeeComponent } from './product/coffee/coffee.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ContactUsComponent,
    CoffeeComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
