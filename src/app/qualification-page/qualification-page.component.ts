import { Component, OnInit } from '@angular/core';
import {PreviewModel, certificatePreview, portfolio, CareerStation, station} from './models';

@Component({
  selector: 'app-qualification-page',
  templateUrl: './qualification-page.component.html',
  styleUrls: ['./qualification-page.component.scss']
})
export class QualificationPageComponent implements OnInit {

  certificates: PreviewModel[] = certificatePreview;
  portfolio: PreviewModel[] = portfolio;
  station: CareerStation[] = station;

  constructor() { }

  ngOnInit(): void {
  }

}
