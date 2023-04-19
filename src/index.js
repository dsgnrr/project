import { printSmth } from "./2";
import { sayHello } from "./1";
import './style.css';
printSmth('Magic');
sayHello();

function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = "<p>Created in js</p>";
 
   element.classList.add('hello');
 
    return element;
  }
 
  document.body.appendChild(component());