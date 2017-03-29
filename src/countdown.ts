import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'countdown',
  template: '<h1>Time left: {{seconds}}</h1>',
  // an alternative way for setting inputs and outputs
  // then we can remove @Input() and @Output() decorators
  // inputs: ['seconds'],
  // outputs: ['complete', 'progress']

  // encapsulating css styles for the Component
  // - styles property styles: [`....`]
  // - styleUrls: external style sheet file
  // - inline style in template
})
export class CountdownComponent {
  // Set input field for the Component
  @Input() seconds: number;
  intervalId: number;
  // Set output delegate(event) which can be subscribed outside
  @Output() complete: EventEmitter<any> = new EventEmitter();
  // output delegate which can report the progress to outside
  @Output() progress: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearInterval(this.intervalId);
      // An event is emitted upon finishing the coundown
      this.complete.emit(null);
    }
    this.progress.emit(this.seconds);
  }
}