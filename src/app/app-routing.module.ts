import { UserComponent } from './modules/user/components/user.component';
import { LoginComponent } from './modules/login/components/login.component';
import { HomeComponent } from './modules/home/component/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './modules/page-not-found/component/page-not-found.component';

const routes: Routes = [/* Need declare the routes in order, the latest is the error not found */
    { path: '', component: HomeComponent  },    
    { path: 'user-login', component: LoginComponent},
    { path: 'register-user', component: UserComponent},
    { path: '**', component: PageNotFoundComponent  }
]

@NgModule({
    imports: [
      RouterModule.forRoot(/* Eager resolution, need add some lazy children */
          routes,
          { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
          RouterModule  
    ] 
})
export class AppRoutingModule{}