What does DOM stand for?
Document Object Model

What is the name of the object we can use to get information about the browser enviroment?
Window

What is the name of the object that we can use to get access to the DOM representation of the page?
document

What type of files might we see in the Network tab for in Chrome devTools?
html, css etc

What version of HTML is document.querySelector from?
5?

Which event do we hook into when we want to know the DOM has loaded, window.onload or document.onload?
document.onload

What other way do we have a hooking into the DOM load event, and how does it differ?
addEventListener - which will listen for the document to be loaded, allowing us to do other things in the meantime.

We use window.createElement to make new DOM elements, true or false?
false, document.createElement

List two ways to get all the elements by class 'cat'
querySelector and getElementByClass

List two ways to retrieve the element with id "goat"
querySelector('goat') and getElementById('goat')

List two ways to get all the li elements
getElementByTagName('li') , querySelector('li')

List two ways to get the first li element
getElementByTagName('li')[0] or querySelector('li')[0]

How can we set the a given element to be hidden?
element.hidden = true
