
import{sum} from "./test"
import {logo} from './Assests/logo.png'

import"./index.css"

console.log(sum(5,5))

console.log('Hello World')

const root =document.getElementById("root")

const img1= document.createElement("img")
img1.src='logo'

const h1= document.createElement("h1")
h1.textContent="Github"
h1.setAttribute("class","bluetext")

root.append(img1,h1)