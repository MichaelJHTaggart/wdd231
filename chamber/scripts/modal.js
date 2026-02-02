const npDetails = {
    level: "NP Membership",
    price: "Free",
    tagline: "For Non-Profit Organizations",
    benefits: [
        "Free membership for qualified non-profit organizations",
        "Business directory listing",
        "Community bulletin board posting privileges"
    ]
};

const bronzeDetails = {
    level: "Bronze Membership",
    price: "$250/year",
    tagline: "Essential Benefits for Growing Businesses",
    benefits: [
        "Enhanced business directory listing with logo",
        "Access to all networking events",
        "Access to member discount programs"
    ]
};

const silverDetails = {
    level: "Silver Membership",
    price: "$500/year",
    tagline: "Enhanced Visibility & Networking",
    benefits: [
        "All Bronze benefits included",
        "Premium directory listing with enhanced profile",
        "20% discount on all events",
        "Access to exclusive member-only events (4x per year)"
    ]
};

const goldDetails = {
    level: "Gold Membership",
    price: "$1,000/year",
    tagline: "Premium Benefits & Maximum Exposure",
    benefits: [
        "All Silver benefits included",
        "VIP invitations to all exclusive events",
        "Annual recognition award presentation",
        "One-on-one business consultation session"
    ]
};

// populates the appropriate membership details into the dialog element.
const membershipDiv = document.querySelector("#membership-details");
const npMembershipDetails = document.querySelector("#np-details");
const bronzeMembershipDetails = document.querySelector("#bronze-details");
const silverMembershipDetails = document.querySelector("#silver-details");
const goldMembershipDetails = document.querySelector("#gold-details");

npMembershipDetails.addEventListener('click', () => {
  displayMembershipDetails(npDetails);
});

bronzeMembershipDetails.addEventListener('click', () => {
  displayMembershipDetails(bronzeDetails);
});

silverMembershipDetails.addEventListener('click', () => {
  displayMembershipDetails(silverDetails);
}); 

goldMembershipDetails.addEventListener('click', () => {
  displayMembershipDetails(goldDetails);
}); 

function displayMembershipDetails(membership) {
  const benefitsList = membership.benefits
    .map(benefit => `<li>${benefit}</li>`)
    .join('');

  membershipDiv.innerHTML = '';
  membershipDiv.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${membership.level}</h2>
    <p class="modal-price"><strong>Price:</strong> ${membership.price}</p>
    <p class="modal-tagline">${membership.tagline}</p>
    <h3>Benefits:</h3>
    <ul>
      ${benefitsList}
    </ul>
  `;
  membershipDiv.showModal();
  
  const closeModal = document.getElementById("closeModal");
  closeModal.addEventListener("click", () => {
    membershipDiv.close();
  });
}