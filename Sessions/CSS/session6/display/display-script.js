function toggleBlockElement() {
    const element = document.querySelector('.block-element');
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

function toggleInlineElement() {
    const element = document.querySelector('.inline-element');
    element.style.display = element.style.display === 'none' ? 'inline' : 'none';
}

function toggleInlineBlockElement() {
    const element = document.querySelector('.inline-block-element');
    element.style.display = element.style.display === 'none' ? 'inline-block' : 'none';
}

function toggleHiddenElement() {
    const element = document.querySelector('.hidden-element');
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}