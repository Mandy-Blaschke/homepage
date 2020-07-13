import { Component, OnInit } from '@angular/core';
import {Navi} from '../header/banner-header-element/banner-header-element.component';

@Component({
  selector: 'app-header-element',
  templateUrl: './header-element.component.html',
  styleUrls: ['./header-element.component.scss']
})
export class HeaderElementComponent implements OnInit {
  navi: Navi[] = [
    {
      text: 'Kennenlernen',
      url: '/kennenlernen',
    },
    {
      text: 'Qualifikation',
      url: '/qualifikation',
    },
    {
      text: 'Antworten',
      url: '/antworten',
    },
    {
      text: 'Kontakt',
      url: '/kontakt',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
