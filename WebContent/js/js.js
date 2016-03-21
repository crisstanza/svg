(function() {

	var SvgUtils = function() {

		this.SVG = document.getElementsByTagName('svg')[0];
		this.LINE = document.getElementById('line');
		this.CIRCLE = document.getElementById('circle');
		this.EXTRA_LINE = document.getElementById('extra-line');

		this.line = function(y) {
			var line = this.LINE.cloneNode(true);
			line.removeAttribute('id');
			line.setAttribute('y1', y);
			line.setAttribute('y2', y);
			return line;
		};

		this.circle = function(x, y) {
			var circle = this.CIRCLE.cloneNode(true);
			circle.removeAttribute('id');
			circle.setAttribute('cx', x);
			circle.setAttribute('cy', y);
			return circle;
		}

		this.extraLine = function(x, y, l) {
			var extraLine = this.EXTRA_LINE.cloneNode(true);
			extraLine.removeAttribute('id');
			extraLine.setAttribute('x1', x - 35);
			extraLine.setAttribute('x2', x + 35);
			extraLine.setAttribute('y1', y);
			extraLine.setAttribute('y2', y);
			return extraLine;
		}

		this.add = function(element) {
			this.SVG.appendChild(element);
		};

	};

	var svgUtils = null;

	function init() {
		svgUtils = new SvgUtils();
		addClickEventListener(document.getElementsByTagName('button')[0]);
	}

	function addClickEventListener(button) {
		button.addEventListener('click', function(event) { return buttonOnClick(event, this); });
		button.focus();
	}

	function buttonOnClick(event, button) {
		clean();
		start();
		button.innerHTML = 'restart';
	}

	function clean() {
		var elements = document.getElementsByName('drawing');
		while(elements.length > 0) {
			var element = elements[elements.length - 1];
			element.parentNode.removeChild(element);
		}
	}

	function start() {
		drawLines();
		drawCircles();
	}

	function drawLines() {
		for (var i = 1 ; i <= 5 ; i++) {
			var line = svgUtils.line(50 + i*50);
			svgUtils.add(line);
		}
	}

	function drawCircles() {
		for (var i = 1 ; i <= 8 ; i++) {
			var j = rand(1, 13);
			while (j%2 != 1) {
				j = rand(1, 13);
			}
			var circle = svgUtils.circle(i*83, 25 + j*25);
			if (j == 13 || j == 1) {
				drawExtraLine(circle.getAttribute('cx')*1, circle.getAttribute('cy')*1);
			}
			svgUtils.add(circle);
		}
	}

	function drawExtraLine(x, y, r) {
		var extraLine = svgUtils.extraLine(x, y);
		svgUtils.add(extraLine);
	}

	function rand(inf, sup) {
		return Math.floor((Math.random() * sup) + inf);
	}

	window.addEventListener('load', function() { init(); });

})();
