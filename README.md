# Scrolld
Javascript plugin that will tell how far a thing has been vertically scrolld.

# Install

    npm install scrolld --save

# Usage
Instantiate a Scrolld object and pass a target in the constructor. If  target is empty, then document set as target. 

    var scrolld = new Scrolld();
    console.log(scrolld.percent())

Passing a target:

    var scrolldOnElement = new Scrolld(document.querySelector('#selector'));
    console.log(scrolldOnElement.percent())

Actually using it for something:

    var scrolld = new Scrolld(), 
        token = -1, 
        scrolling = false;

    window.addEventListener("scroll", function (e) {
        scrolling = true;

        console.log(scrolld.percent());

        if (token !== -1)
            clearTimeout(token);
        token = setTimeout(function () {
            scrolling = false;
        }, 500);
    });

Tested on #document, TEXTAREA and DIV    

# Try Scrolld
<a href="https://hallojoe.github.io/scrolld/demo/">Demo</a> - Todo: make TEXTAREA and DIV demo...

