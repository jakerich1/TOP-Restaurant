export default function menu() {
    
    const container = document.createElement('div')
    container.classList.add('menu')

    const menuList = document.createElement('div')
    menuList.classList.add("menu-list")
    const menuHead = document.createElement('h2')
    menuHead.innerText = "Menu"
    menuList.appendChild(menuHead)

    //Menu Items
    const menuItem = document.createElement('div')
    menuItem.classList.add("menu-item")
    const itemHead = document.createElement('h3')
    itemHead.innerText = "Lorem"
    menuItem.appendChild(itemHead)
    const itemDesc = document.createElement('div')
    itemDesc.classList.add("item-desc")
    itemDesc.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem integer vitae justo eget magna."
    menuItem.appendChild(itemDesc)
    const itemPrice = document.createElement('div')
    itemPrice.classList.add("item-price")
    itemPrice.innerText = "£3.49"
    menuItem.appendChild(itemPrice)
    
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))
    menuList.appendChild(menuItem.cloneNode(true))


    //side images
    const image1 = document.createElement('div')
    image1.classList.add('image-1', 'image-cont')

    const image2 = document.createElement('div')
    image2.classList.add('image-2', 'image-cont')

    const image3 = document.createElement('div')
    image3.classList.add('image-3', 'image-cont')

    container.appendChild(menuList)
    container.appendChild(image1)
    container.appendChild(image2)
    container.appendChild(image3)

    return container

}