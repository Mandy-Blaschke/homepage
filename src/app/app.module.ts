import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardHeaderElementComponent } from './header-element/card-header-element/card-header-element.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { QualificationPageComponent } from './qualification-page/qualification-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FooterComponent } from './footer/footer.component';
import { InfoModalComponent } from './about-me-page/info-modal/info-modal.component';
import { QuestionElementComponent } from './faq-page/question-element/question-element.component';
import { HeaderElementComponent } from './header-element/header-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CardHeaderElementComponent,
    AboutMePageComponent,
    FaqPageComponent,
    QualificationPageComponent,
    ContactPageComponent,
    FooterComponent,
    InfoModalComponent,
    QuestionElementComponent,
    HeaderElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
