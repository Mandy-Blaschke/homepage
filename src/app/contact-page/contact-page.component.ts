import { Component, OnInit } from '@angular/core';
import {Contact, contactData} from '../qualification-page/models';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactData: Contact[] = contactData;

  constructor() { }

  ngOnInit(): void {
  }

}
