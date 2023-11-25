document.addEventListener('DOMContentLoaded', function () {
    // Create a sample DOM tree
    const domTree = {
      tagName: 'div',
      children: [
        {
          tagName: 'h1',
          textContent: 'DOM Tree Visualizer',
          attributes: { class: 'header' }
        },
        {
          tagName: 'p',
          textContent: 'This is a sample DOM tree.',
          attributes: { id: 'paragraph' },
          children: [
            {
              tagName: 'span',
              textContent: 'Hello,',
              attributes: { class: 'highlight1' }
            },
            {
              tagName: 'span',
              textContent: 'world!',
              attributes: { class: 'highlight' }
            }
          ]
        }
      ]
    };
  
    // Render the DOM tree
    renderDOM(document.getElementById('dom-visualizer'), domTree);
  });
  
  function renderDOM(container, node) {
    const element = document.createElement(node.tagName);  // div 
  
    // Set attributes
    if (node.attributes) {
      Object.keys(node.attributes).forEach(key => {
        element.setAttribute(key, node.attributes[key]);
      });
    }
  
    // Set text content
    if (node.textContent) {
      element.textContent = node.textContent;
    }
  
    // Append children recursively
    if (node.children) {
      node.children.forEach(childNode => {
        renderDOM(element, childNode);
      });
    }
  
    // Append the current node to the container
    container.appendChild(element);
  }
