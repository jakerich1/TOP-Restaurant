import "./style.scss";
import home from './components/home.js'
import menu from './components/menu.js'
import contact from './components/contact.js'

const contentArea = document.createElement('section')
contentArea.appendChild(home())

const changeComponent = function (event, module) {
    contentArea.innerHTML = ''
    const btns = document.querySelectorAll('.navBtn')
    btns.forEach(element => {
        element.classList.remove('active')
    });
    const clickedBtnId = event.target.id
    const clickedBtn = document.querySelector(`#${clickedBtnId}`)
    clickedBtn.classList.add('active')

    if (clickedBtnId == "home-btn") {
        contentArea.appendChild(home())
    }else if(clickedBtnId == "menu-btn") {
        contentArea.appendChild(menu())
    }else if(clickedBtnId == "contact-btn") {
        contentArea.appendChild(contact())
    }  
}

function component() {

    //Header container
    const header = document.createElement('div')
    header.setAttribute("id", "header")
    header.innerHTML = "<div></div><div><h1>Bronysgowen Cafe</h1></div>"

    //Nav buttons
    const nav = document.createElement('nav')
    header.appendChild(nav)

    //Home button
    const homeBtn = document.createElement('button')
    homeBtn.setAttribute("id", "home-btn")
    homeBtn.innerText = "HOME"
    homeBtn.classList.add('navBtn')
    homeBtn.addEventListener("click", function (event) {
        changeComponent(event, "home")
    }, false)

    //Menu button
    const menuBtn = document.createElement('button')
    menuBtn.setAttribute("id", "menu-btn")
    menuBtn.innerText = "MENU"
    menuBtn.classList.add('navBtn')
    menuBtn.addEventListener("click", function (event) {
        changeComponent(event, "menu")
    }, false)

    //Contact button
    const contactBtn = document.createElement('button')
    contactBtn.setAttribute("id", "contact-btn")
    contactBtn.innerText = "CONTACT"
    contactBtn.classList.add('navBtn')
    contactBtn.addEventListener("click", function (event) {
        changeComponent(event, "contact")
    }, false)

    nav.appendChild(homeBtn)
    nav.appendChild(menuBtn)
    nav.appendChild(contactBtn)


    //Dynamic content area
    

    return header;

}

document.querySelector('#content').appendChild(component());
document.body.appendChild(contentArea);