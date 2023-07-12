import {ADD} from './All'
import './index.css'

console.log(ADD(3,7))

const root = document.getElementById('root')

const h1 = document.createElement('h1')

h1.innerHTML = 'Hello World'

h1.setAttribute('class', 'color-text')

root.appendChild(h1)

