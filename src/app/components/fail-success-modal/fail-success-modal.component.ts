import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fail-success-modal',
  templateUrl: './fail-success-modal.component.html',
  styleUrls: ['./fail-success-modal.component.css']
})
export class FailSuccessModalComponent implements OnInit {

  @Input()
  isFail: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
