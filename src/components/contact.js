export default function contact() {

    const container = document.createElement('div')
    container.classList.add('contact')

    const mapWrapper = document.createElement('div')
    const mapIframe = '<iframe id="myFrame" height="450" style="border:0" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv7xD8l3XbkgRveyqkU2JTE4&key=AIzaSyCezgB1-BebBfsyr5Zg24KPMsapZ1CaVPQ"></iframe>'
    mapWrapper.innerHTML = mapIframe


    const heading = document.createElement('h2')
    heading.innerText = 'Address'

    const address = document.createElement('div')
    address.innerHTML = '<p>Llanboidy</p><p>Whitland</p><p>SA34 0EJ</p><p>Wales, UK</p>'


    container.appendChild(heading)
    container.appendChild(address)
    container.appendChild(mapWrapper)

    return container

}