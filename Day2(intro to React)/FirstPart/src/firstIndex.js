import React from 'react'
import ReactDom from 'react-dom'
import { sum } from "./test"
import "./index.css"


console.log(sum(5, 5))

console.log('Hello World')

// // const root = document.getElementById("root")

// const p = React.createElement('h1',
//     { className: "redText" , id:'uniqID' },    // we can add many className and Many ID also
//     "Hello React and this is now from React Part!"
//     )

// ReactDom.render(
//     p,  
//     document.getElementById('root')  

// )

// ReactDom.render(
//     "Hello React this is from ReactDom.render!"  ,  //what
//     document.getElementById('root')  //where

// )






const h1 = React.createElement('h1', {}, "Hello React!")
const div = React.createElement('div', {}, 'Hello Div')
const img = React.createElement('img',
    {
        width: '400px',               //can give width and height also.
        heigth: '400px',
        src: 'https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg'
    }

)
const button = React.createElement('button', {}, "Submit")

const toshow = true

//we create a  p tag and inside p tag we are rendering h1 , div and img,,,,,what ever we want go render we will create any tag. Thank You.
const p = React.createElement('p',
    { className: "container", id: 'uniqID' },    // we can add many className and Many ID also
    // "Hello React and this is now from React Part!",
    // [div,h1, img]   // we can push into array  or we can call indivitually
    h1,
    div,
   toshow ? img : null ,       // if toshow is true then print img else not
   button
)




ReactDom.render(
    p,
    document.getElementById('root')

)




// const img1= document.createElement("img")
// img1.src='logo'

// const h1= document.createElement("h1")
// h1.textContent="Github"
// h1.setAttribute("class","bluetext")

// root.append(img1,h1)

