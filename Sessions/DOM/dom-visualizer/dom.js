// In the DOM, the null value means "doesn't exist" or "no such node".

/**
 * 1. Child nodes (or children) - elements that are direct children. 
 * In other words, they are nested exactly in the given one. 
 * For instance, <head> and <body> are children of <html> element.
 * 
 * 2.Descendants - all elements that are nested in the given one, including children, their children and so on.
 * 
 */


for(let i=0; i< document.body.childNodes.length; i++){

    console.log(document.body.childNodes[i]);
}

// document.body.childNodes - to check whether child nodes are exist or not



/**
 * Siblings and the parent
 * 
 * Siblings are nodes that are children of the same parent.
 * For instance, here <head> and <body> are siblings:
<html>
  <head>...</head><body>...</body>
</html>


<body> is said to be the “next” or “right” sibling of <head>,
<head> is said to be the “previous” or “left” sibling of <body>.


The next sibling is in nextSibling property, and the previous one – in previousSibling.

The parent is available as parentNode.



ex: 
document.body.parentNode === document.documentElement // true

document.head.nextSibling // HTMLBodyElement

document.body.previousSibling // HTMLHeadElement
 * 
 */






// 3. Element-only navigation

/**
 * Navigation properties listed above refer to all nodes. 
 * For instance, in childNodes we can see both text nodes, element nodes, and even comment nodes if they exist.
 * 
 * The links are similar to those given above, just with Element word inside:
 * 1. children - only those children that are element nodes.
 * 2. firstElementChild, lastElementChild - first and last element children.
 * 3. previousElementSibling, nextElementSibling - neighbor elements.
 * 4. parentElement - parent element.
 * 
 * 
 * 
 */