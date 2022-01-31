import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css']
})
export class QuestionModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkDeliveries() {
    //check if there are any deliveries if yes go to deliveries list
    //navigate accordingly
  }
}
