const adoptButton = document.querySelector('#adopt')
const applyAdoptButton = document.querySelector('#apply-adopt')
const applyToAdoptButton = document.querySelector('#apply-to-adopt')
const adoptModal = document.querySelector('.adopt-modal')
const cancelButton = document.querySelector('#cancel')
const donateButton = document.querySelector('#donate')
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

document.getElementById('wanna-adopt').addEventListener('click', function() {
    window.location.href = './adoptables-page.html'
})

document.getElementById('help').addEventListener('click', function() {
    window.location.href = './success-page.html'
})