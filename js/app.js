const adoptButton = document.querySelector('#adopt')
const applyAdoptButton = document.querySelector('#apply-adopt')
const applyToAdoptButton = document.querySelector('#apply-to-adopt')
const adoptModal = document.querySelector('.adopt-modal')
const cancelButton = document.querySelector('#cancel')
const donateButton = document.querySelector('#donate')
const donateBtn = document.querySelector('.donate')
const donateModal = document.querySelector('.donate-modal')
const cancelDonationButton = document.querySelector('#cancel-donation')

adoptButton.onclick = function() {
    adoptModal.showModal()
}

applyAdoptButton.onclick = function() {
    adoptModal.showModal()
}

applyToAdoptButton.onclick = function() {
    adoptModal.showModal()
}

cancelButton.onclick = function() {
    adoptModal.close()
}

donateButton.onclick = function() {
    donateModal.showModal()
}

cancelDonationButton.onclick = function() {
    donateModal.close()
}

donateBtn.onclick = function() {
    donateModal.showModal()
}

document.getElementById('wanna-adopt').addEventListener('click', function() {
    window.location.href = './adoptables-page.html'
})

document.getElementById('view-adoptables-card').addEventListener('click', function() {
    window.location.href = './adoptables-page.html'
})

document.getElementById('view-adoptables').addEventListener('click', function() {
    window.location.href = './adoptables-page.html'
})

document.getElementById('help').addEventListener('click', function() {
    window.location.href = './success-page.html'
})

const carousel = document.querySelector('.carousel')
const arrowBtns = document.querySelectorAll('.wrapper button')
const firstCardWidth = carousel.querySelector('.card').offsetWidth
const carouselChildrens = [...carousel.children]

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
})

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML('beforeend', card.outerHTML)
})

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth
    })
})

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0){
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth)
    } else if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth){
        carousel.scrollLeft = carousel.offsetWidth
    }
}

carousel.addEventListener('scroll', infiniteScroll)