import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMePageComponent} from './about-me-page/about-me-page.component';
import {QualificationPageComponent} from './qualification-page/qualification-page.component';
import {FaqPageComponent} from './faq-page/faq-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'kennenlernen' },
  { path: 'kennenlernen', component: AboutMePageComponent },
  { path: 'qualifikation', component: QualificationPageComponent },
  { path: 'antworten', component: FaqPageComponent },
  { path: 'kontakt', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
