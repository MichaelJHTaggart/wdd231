const storageKey = "gw2PageVisitCount";

function getVisitCount() {
    const stored = localStorage.getItem(storageKey);
    return stored ? parseInt(stored, 10) : 0;
}

function incrementVisitCount() {
    const count = getVisitCount() + 1;
    localStorage.setItem(storageKey, String(count));
    return count;
}

export function initVisitCounter() {
    const count = incrementVisitCount();
    const visitEl = document.getElementById("visit-count");
    if (visitEl) {
        visitEl.textContent = count === 1
            ? "First visit—welcome!"
            : `You've visited this page ${count} times.`;
    }
}
