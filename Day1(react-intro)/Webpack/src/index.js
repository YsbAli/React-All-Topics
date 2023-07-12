import { Sum, Demo, Multiply } from './calc'
import './index.css'


console.log('Hello World');
console.log(Sum(3, 6));
console.log(Demo());


console.log(Multiply(3, 5))



//style-loader   css-loader        ---> this will work as like a plugin

const root = document.getElementById('root')

const H1 = document.createElement('h1')


H1.innerText = "Hello World"

// H1.classList.add("redText")

H1.setAttribute("class", 'redText')


root.appendChild(H1)