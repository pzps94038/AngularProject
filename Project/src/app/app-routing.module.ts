import { BreadComponent } from './product/bread/bread.component';
import { DessertComponent } from './product/dessert/dessert.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CoffeeComponent } from './product/coffee/coffee.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'product', component: ProductComponent,
    children: [
      {
        path: 'coffee',
        component: CoffeeComponent,
      },
      {
        path: 'bread',
        component: BreadComponent
      },
      {
        path: 'dessert',
        component: DessertComponent
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
