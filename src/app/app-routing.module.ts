import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./modules/login/components/login.component";


const routes: Routes = [
    { path: 'user-login', component: LoginComponent }
]

@NgModule({
    imports: [
      RouterModule.forRoot(
          routes,
          { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
          RouterModule  
    ] 
})
export class AppRoutingModule{}