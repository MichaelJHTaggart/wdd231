const url = 'https://raw.githubusercontent.com/MichaelJHTaggart/wdd231/refs/heads/main/chamber/data/members.json';  
const cards = document.querySelector('#business-spotlight');

async function getBusinessData(){
    const response = await fetch(url)
    const data = await response.json()
    displayBusiness(data.sort(() => Math.random() - 0.5).slice(0, 3));
    return response
}

const displayBusiness = (data) => {
  data.forEach((business) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let portrait = document.createElement("img");
    
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");
    // let socialMedia = document.createElement("div")
    fullName.textContent = `${business.name}`
    address.textContent = `${business.address}`
    phone.textContent = `${business.phone}`
    website.textContent = `${business.website}`
    
    portrait.setAttribute("src", `${business.imageFile}`)
    portrait.setAttribute("alt", `Portrait of business ${business.name}`)
    portrait.setAttribute("loading", `lazy`)
    portrait.setAttribute("width", `70`)
    portrait.setAttribute("height", ``)
    portrait.setAttribute("class", `business-image`)

    card.setAttribute("class", "card home-card")

    card.appendChild(portrait);
    card.appendChild(fullName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    cards.appendChild(card);
  });
}

getBusinessData()