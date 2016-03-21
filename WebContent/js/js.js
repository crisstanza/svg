(function() {

	var SVG = null;
	var LINE = null;

	function init() {
		SVG = document.getElementsByTagName('svg')[0];
		LINE = document.getElementById('line');
		addClickEventListener(document.getElementsByTagName('button')[0]);
	}

	function addClickEventListener(button) {
		button.addEventListener('click', function(event) { return buttonOnClick(event, this); });
	}

	function buttonOnClick(event, button) {
		var line = LINE.cloneNode(true);
		line.removeAttribute('id');
		line.setAttribute('y1', 100);
		line.setAttribute('y2', 100);
		SVG.appendChild(line);
	}

	window.addEventListener('load', function() { init(); });

})();
