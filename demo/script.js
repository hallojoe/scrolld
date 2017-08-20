var scrollToken = -1,
scrollToken1 = -1,
scrollToken2 = -1;

var t1 = document.querySelector('#t1');
var t2 = document.querySelector('#t2');

var scrolld0 = new Scrolld(), 
    scrolld1 = new Scrolld(t1), 
    scrolld2 = new Scrolld(t2);

// labels
var l0 = document.querySelector('#l0'),
  l1 = document.querySelector('#l1'),
  l2 = document.querySelector('#l2');

var scrolling = false;

window.addEventListener("scroll", function (e) {

  scrolling = true;

  l0.innerHTML = scrolld0.percent();

  if (scrollToken !== -1)
    clearTimeout(scrollToken);

  scrollToken = setTimeout(function () {
    scrolling = false;
  }, 500);

});

t1.addEventListener("scroll", function (e) {
  
  scrolling = true;

  l1.innerHTML = scrolld1.percent();

  if (scrollToken1 !== -1)
    clearTimeout(scrollToken1);

  scrollToken1 = setTimeout(function () {
    scrolling = false;
  }, 500);

});

t2.addEventListener("scroll", function (e) {
  
    scrolling = true;
  
    l2.innerHTML = scrolld2.percent();
  
    if (scrollToken !== -1)
      clearTimeout(scrollToken2);
  
    scrollToken2 = setTimeout(function () {
      scrolling = false;
    }, 500);
  
  });
      
