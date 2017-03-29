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
                // timeout: number; /** no longer required */
                PomodoroTimerComponent.prototype.onCountdownCompleted = function () {
                    alert('Time up!');
                };
                return PomodoroTimerComponent;
            }());
            PomodoroTimerComponent = __decorate([
                core_1.Component({
                    selector: 'pomodoro-timer',
                    template: "\n  <div class=\"container text-center\">\n    <img src=\"assets/img/pomodoro.png\" style=\"width:116px;height:86px\" />\n    <countdown [seconds]=\"25\"\n      (complete)=\"onCountdownCompleted()\"\n      #counter>\n    </countdown>\n    <p>\n      <button class=\"btn btn-default\" (click)=\"counter.seconds = 25\">\n        Reset countdown to 25 seconds\n      </button>\n    </p>\n    <p *ngIf=\"counter.seconds < 10\">\n      Beware! Only <strong>{{counter.seconds}} seconds</strong> left.\n    </p>\n  </div>\n  "
                })
            ], PomodoroTimerComponent);
            exports_1("PomodoroTimerComponent", PomodoroTimerComponent);
        }
    };
});
