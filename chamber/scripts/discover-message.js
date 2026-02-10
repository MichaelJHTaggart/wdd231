// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;
const storageKey = "discoverLastVisit";

function getVisitMessage() {
    const lastVisitMs = localStorage.getItem(storageKey);
    const now = Date.now();

    if (!lastVisitMs) {
    return "Welcome! Let us know if you have any questions.";
    }

    const diffMs = now - parseInt(lastVisitMs, 10);
    const diffDays = Math.floor(diffMs / msToDays);

    if (diffDays < 1) {
    return "Back so soon! Awesome!";
    }

    if (diffDays === 1) {
    return "You last visited 1 day ago.";
    }

    return `You last visited ${diffDays} days ago.`;
}

function showVisitMessage() {
    const visitMessageElement = document.querySelector("#visit-message");
    visitMessageElement.textContent = getVisitMessage();
    localStorage.setItem(storageKey, String(Date.now()));
}

showVisitMessage();