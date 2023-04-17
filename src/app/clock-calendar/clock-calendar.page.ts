import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-clock-calendar',
  templateUrl: './clock-calendar.page.html',
  styleUrls: ['./clock-calendar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ClockCalendarPage implements OnInit {
  currentTime: Date = new Date();
  selectedDate: Date = new Date();
  selectedDate2: string = '';
  calendarOptions: any = {
    pickMode: 'single',
    defaultDate: new Date(),
  };

  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnInit() {
    // Set initial value to today's date
    this.selectedDate2 = new Date().toISOString();
  }
}
