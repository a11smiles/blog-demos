import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Home' }},
  { path: 'first-page', component: FirstPageComponent, data: { title: 'First Page' }},
  { path: 'second-page', component: SecondPageComponent, data: { title: 'Second Page' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
