// the copyright year (the current year) in the footer's first paragraph
// the date the document was last modified in the second paragraph
const dateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
};

const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};

let lastModified = new Date(document.lastModified);
let formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(lastModified)
let formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(lastModified)
let year = new Intl.DateTimeFormat("en-US", {year: 'numeric'}).format(lastModified)

document.getElementById("lastModified").innerHTML = `Last Modified: ${formattedDate} ${formattedTime}`
document.getElementById("currentyear").innerHTML = `&copy; ${year}`