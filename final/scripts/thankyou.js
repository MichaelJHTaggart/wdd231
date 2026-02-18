const myInfo = new URLSearchParams(window.location.search);
const infoEl = document.querySelector('#form-submission-info');
if (infoEl) {
    infoEl.innerHTML = `
        <p>Thank you, <strong>${myInfo.get('gameTag') || 'traveler'}</strong>!</p>
        <p>Your message has not been received, as I told you on the Resources page, that the form does nothing at this time.</p>
    `;
}
