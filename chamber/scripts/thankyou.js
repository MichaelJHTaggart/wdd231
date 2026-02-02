const getString = window.location.search;

const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#form-submission-info').innerHTML = `
<p>Thank you <strong>${myInfo.get('firstName')} ${myInfo.get('lastName')}</strong>,</p>
<p>Your Business/Organization, <strong>${myInfo.get('businessName')}</strong> requested the <strong>${myInfo.get('membership-level')}</strong> membership on <strong>${new Date(myInfo.get('timestamp')).toLocaleString('en-US', {  year: 'numeric', month: 'short', day: 'numeric'})}</strong></p>
<p><p>Phone: <strong>${myInfo.get('phone')}</strong> </p>
<p>Email: <strong>${myInfo.get('email')}</strong></p>
<p>We'll be in contact shortly!</p>
`
