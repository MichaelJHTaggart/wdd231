const url = 'https://raw.githubusercontent.com/MichaelJHTaggart/wdd231/refs/heads/main/chamber/data/members.json';  
const cards = document.querySelector('#business-spotlight');

async function getBusinessData(){
    const response = await fetch(url)
    let data = await response.json()
    let filteredData = data.filter((object)=>{
        if(object.membershipLevel === "Gold" || object.membershipLevel === "Silver"){
          return true
        } else false
      });
    displayBusiness(filteredData.sort(() => Math.random() - 0.5).slice(0, 3));
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

    let membershipLevel = document.createElement("p");

    // let socialMedia = document.createElement("div")
    fullName.textContent = `${business.name}`
    address.textContent = `${business.address}`
    phone.textContent = `${business.phone}`
    website.textContent = `${business.website}`
    membershipLevel.textContent = `${business.membershipLevel}`
    
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
    card.appendChild(membershipLevel);
    cards.appendChild(card);
  });
}

getBusinessData()