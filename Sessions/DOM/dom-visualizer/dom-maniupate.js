// 1.document.getElementById(id): Retrieves an element by its id attribute.
const myElement = document.getElementById('myId');

// 2. document.getElementsByClassName(className): Retrieves elements by their class name.
const elementsByClass = document.getElementsByClassName('myClass');

// 3. document.getElementsByTagName(tagName): Retrieves elements by their tag name.
const elementsByTag = document.getElementsByTagName('div');

// 4. document.querySelector(selector): Retrieves the first element that matches the specified CSS selector.
const firstElement = document.querySelector('.myClass');

// 5. document.querySelectorAll(selector): Retrieves all elements that match the specified CSS selector.
const allElements = document.querySelectorAll('.myClass');

// 2. Modifying Content:
// element.textContent: Sets or gets the text content of an element.
myElement.textContent = 'New Text';
// element.innerText: Similar to textContent, but it considers styling and may not be supported in all browsers.

myElement.innerHTML = '<strong>New HTML</strong>';


// inserting- parentElement.appendChild(newChild): Appends a child element to the end of the parent element.

const newChild = document.createElement('div');
parentElement.appendChild(newChild);


/**
 * 
 * Traversing the DOM:
Parent and Sibling Nodes:

element.parentNode: Gets the parent node of an element.
element.parentElement: Gets the parent element of an element.
element.nextSibling: Gets the next sibling node.
element.previousSibling: Gets the previous sibling node.
Child Nodes:

element.childNodes: Gets a NodeList of child nodes.
element.children: Gets an HTMLCollection of child elements.
element.firstChild: Gets the first child node.
element.firstElementChild: Gets the first child element.
 * 
 */



