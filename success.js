const donateButton = document.querySelector('#donate')
const donateModal = document.querySelector('.donate-modal')
const cancelDonationButton = document.querySelector('#cancel-donation')

donateButton.onclick = function() {
    donateModal.showModal()
}

cancelDonationButton.onclick = function() {
    donateModal.close()
}

document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = './index.html'
})