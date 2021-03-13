// Your code goes here

const navBar = document.querySelector('a')
const navBar1 = navBar.nextElementSibling
const navBar2 = navBar1.nextElementSibling
const navBar3 = navBar2.nextElementSibling

const header = document.querySelector('h1')
const allHeader2 = document.querySelectorAll('h2')
const firstH2 = allHeader2[0]
const secondH2 = allHeader2[1]
const thirdH2 = allHeader2[2]
const fourthH2 = allHeader2[3]

const busImg = document.querySelector('img')
const destinationImg = document.querySelector('.content-destination img')

console.log(navBar)
console.log(navBar1)
console.log(navBar2)
console.log(navBar3)
console.log(header)
console.log(allHeader2)
console.log(firstH2)
console.log(secondH2)
console.log(thirdH2)
console.log(fourthH2)
console.log(busImg)
console.log(destinationImg)

navBar.addEventListener('auxclick', (event) => {
    event.target.style.color = 'red'
})

navBar1.addEventListener('click', (event) => {
    event.target.style.color = 'navy'
})

navBar2.addEventListener('mouseover', (event) => {
    event.target.style.color = 'pink'
})

navBar3.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'purple'
})

header.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'green'
})



