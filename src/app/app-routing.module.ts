import { HomeComponent } from './modules/home/component/home.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './modules/page-not-found/component/page-not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent    },
    { path: '**', component: PageNotFoundComponent    }

]

@NgModule({
    imports: [
      RouterModule.forRoot(/* Eage resolution, need add some lazzy children */
          routes,
          { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
          RouterModule  
    ] 
})
export class AppRoutingModule{}