# Scrolld
Javascript plugin that will tell how far a thing has been vertically scrolld.

#Install

    npm install scrolld --save

# Usage
Instantiate a Srolld object and pass a target in the constructor. If  target is empty, then document will is target. 

    var scrolld = new Scrolld();
    console.log(scrolld.percent())

Passing a target:

    var scrolldOnElement = new Scrolld(document.querySelector('#selector'));
    console.log(scrolldOnElement.percent())

Tested with #document, TEXTAREA and DIV    

# Try Scrolld
<a href="https://hallojoe.github.io/scrolld/demo/">Demo</a> - Todo: make TEXTAREA and DIV demo...

