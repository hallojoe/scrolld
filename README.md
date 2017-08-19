# Scrolld
Javascript plugin that will tell how far a thing has been vertically scrolld.

# Usage
Instantiate a Srolld object and pass a target in the constructor. If  target is empty, then document will be used. 

    var scrolld = new Scrolld();
    console.log(scrolld.percent())

Passing a target:

    var scrolldOnElement = new Scrolld(document.querySelector('#selector'));
    console.log(scrolldOnElement.percent())
    

# Todo
Make a demo...