import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.close.emit();
  }
}
