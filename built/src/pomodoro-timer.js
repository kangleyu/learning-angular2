System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, PomodoroTimerComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            PomodoroTimerComponent = (function () {
                function PomodoroTimerComponent() {
                }
                return PomodoroTimerComponent;
            }());
            PomodoroTimerComponent = __decorate([
                core_1.Component({
                    selector: 'pomodoro-timer',
                    template: '<countdown></countdown>'
                })
            ], PomodoroTimerComponent);
            exports_1("PomodoroTimerComponent", PomodoroTimerComponent);
            // @Component({
            //   selector: 'pomodoro-timer',
            //   template: `
            //   <div class="text-center">
            //     <img src="assets/img/pomodoro.png" alt="Pomodoro" style="width:116px;height:86px">
            //     <h1> {{ minutes }}:{{ seconds | number: '2.0' }} </h1>
            //     <p> 
            //       <button (click)="togglePause()" class="btn btn-danger">
            //         {{ buttonLabel }}
            //       </button>
            //     </p>
            //   </div>
            //   `
            // })
            // export class PomodoroTimerComponent {
            //   minutes: number;
            //   seconds: number;
            //   isPaused: boolean;
            //   buttonLabel: string;
            //   constructor() {
            //     this.resetPomodoro();
            //     setInterval(() => this.tick(), 1000);
            //   }
            //   // tick for timer counting
            //   tick(): void {
            //     if(!this.isPaused) {
            //       this.buttonLabel = 'Pause';
            //       if(--this.seconds < 0) {
            //         this.seconds = 59;
            //         if(--this.minutes < 0) {
            //           this.resetPomodoro();
            //         }
            //       }
            //     }
            //   }
            //   // reset for the timer
            //   resetPomodoro(): void {
            //     this.minutes = 24;
            //     this.seconds = 59;
            //     this.buttonLabel = 'Start';
            //     this.togglePause();
            //   }
            //   // toggle the state of timer
            //   togglePause(): void {
            //     this.isPaused = !this.isPaused;
            //     // if countdown has started
            //     if(this.minutes < 24 || this.seconds < 59) {
            //       this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
            //     }
            //   }
            // }
        }
    };
});
