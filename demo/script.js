var scrollToken = -1,
  scrolld = new Scrolld(),
  scrolling = false;

// Get a reference to the <path>
var path = document.querySelector('#p');
var text = document.querySelector('#pt');

// Get length of path.
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();

function computeOffset() {

  var scrollPercentage = scrolld.percent();

  text.innerHTML = Math.round(scrollPercentage, 1) + '%';

  // Length to offset the dashes
  var drawLength = pathLength * (scrollPercentage / 100);

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;

  // When complete, remove the dash array, otherwise shape isn't quite sharp
  if (scrollPercentage / 100 >= 0.99) {
    path.style.strokeDasharray = "none";
  } else {
    if (scrollPercentage <= 0)
      path.style.visibility = 'hidden';
    else
      path.style.visibility = 'visible';

    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }

}

window.addEventListener("scroll", function (e) {
  scrolling = true;
  computeOffset();
  if (scrollToken !== -1)
    clearTimeout(scrollToken);
  scrollToken = setTimeout(function () {
    scrolling = false;
  }, 500);
});