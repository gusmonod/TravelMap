/* This is a prototype */
var createSnackbar = (function() {
  // Any snackbar that is already shown
  var previous = null;
  
/*
<div class="paper-snackbar">
  <button class="action">Dismiss</button>
  This is a longer message that won't fit on one line. It is, inevitably, quite a boring thing. Hopefully it is still useful.
</div>
*/

return function(message, actionText, action) {
	if (previous) {
		previous.dismiss();
	}
	var snackbar = document.createElement('div');
	snackbar.className = 'paper-snackbar';
	snackbar.dismiss = function() {
		this.style.opacity = 0;
	};
	var text = document.createTextNode(message);
	snackbar.appendChild(text);
	if (!action) {
		action = snackbar.dismiss.bind(snackbar);
	}
	var actionButton = document.createElement('a');
	actionButton.className = 'action btn';
	actionButton.innerHTML = "&times;";
	actionButton.addEventListener('click', action);
	snackbar.appendChild(actionButton);


	snackbar.addEventListener('transitionend', function(event, elapsed) {
		if (event.propertyName === 'opacity' && this.style.opacity == 0) {
			this.parentElement.removeChild(this);
			if (previous === this) {
				previous = null;
			}
		}
	}.bind(snackbar));



	previous = snackbar;
	document.body.appendChild(snackbar);
    // In order for the animations to trigger, I have to force the original style to be computed, and then change it.
    getComputedStyle(snackbar).bottom;
    snackbar.style.bottom = '0px';
    snackbar.style.opacity = 1;
};
})();