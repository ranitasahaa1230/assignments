import React from "react";

const Assignemnt3 = () => {
  // Step 1: Define a JavaScript object representing a React element
const reactElement = {
    type: 'a',
    props: {
      href: 'https://example.com',
      target: '_blank',
      children: 'Click me'
    }
  };
  
  // Step 2: Create a function to generate HTML code from the React element
  function generateHtmlFromReactElement(element) {
    const { type, props } = element;
    const children = Array.isArray(props.children) ? props.children.join('') : props.children;
    const attributes = Object.keys(props)
      .filter(prop => prop !== 'children')
      .map(prop => `${prop}="${props[prop]}"`)
      .join(' ');
  
    return `<${type} ${attributes}>${children}</${type}>`;
  }
  
  // Step 3: Create a function to render the HTML into a specified element
  function customRender(element, containerId) {
    const html = generateHtmlFromReactElement(element);
    document.getElementById(containerId).innerHTML = html;
  }
  
  // Render the anchor tag into a container with id "root"
  return <div>{customRender(reactElement, "root")}</div>;
};

export default Assignemnt3;
