import { PageNotFoundComponent } from './component/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: '', component: PageNotFoundComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PageNotFoundRoutingModule {}