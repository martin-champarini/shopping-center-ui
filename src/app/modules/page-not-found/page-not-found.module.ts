import { PageNotFoundRoutingModule } from './pagenotfound-routing.module';
import { PageNotFoundComponent } from './component/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule { }
