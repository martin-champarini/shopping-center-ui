import { LoginComponent } from './../login/components/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: LoginComponent  },
];


@NgModule({
  imports: [],
  exports: []
})

export class HomeRoutingComponent {}