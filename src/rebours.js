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
		t = new Date(target).getTime(),
		o = new Date().getTime(),
		v = document.getElementById(view),
		total = (t - o) / 1000;

	days  = parseInt(total / 86400);
	total = total % 86400;

	hours = parseInt(total / 3600);
	total = total % 3600;

	minutes = parseInt(total / 60);
	seconds = parseInt(total % 60);
	
	v.innerHTML = days + "J " +
		hours + "H " +
		minutes + "M " +
		seconds + "S"
	;
};
