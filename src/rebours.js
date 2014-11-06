"use strict";

function Rebours(view, target, origin) {
    this.view   = view;
    this.target = target;
    this.origin = origin;

    var self = this;

    setInterval(function(){
        self.getCountdown(self.target, self.origin, self.view);
    }, 1000);
}

Rebours.prototype.getCountdown = function(target, origin, view) {
    var days,
        hours,
        minutes,
        seconds,
        t     = new Date(target).getTime(),
        o     = origin != null ? new Date(origin).getTime() : new Date(),
        v     = document.getElementById(view),
        total = (t - o) / 1000;

    days  = parseInt(total / 86400, null);
    total = total % 86400;

    hours = parseInt(total / 3600, null);
    total = total % 3600;

    minutes = parseInt(total / 60, null);
    seconds = parseInt(total % 60, null);

    if (hours >= 0) {
        v.innerHTML = days    + "J " +
                      hours   + "H " +
                      minutes + "M " +
                      seconds + "S";

        if (origin != null) {
          this.newDateFromOrigin(origin);
        }
    }

    else {
        v.innerHTML = "Countdown is over";
    }
};

Rebours.prototype.newDateFromOrigin = function(origin) {
  var newDate = new Date(origin);
  this.origin = newDate.setSeconds(newDate.getSeconds() + 1);
}
