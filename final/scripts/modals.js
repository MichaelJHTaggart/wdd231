const raceDetails = {
    norn: {
        name: "Norn",
        coverImage: "./images/race/cover/1-norn-cover.webp",
        iconImage: "./images/race/selector/1-norn-icon.webp",
        lore: "The Norn are a towering race of hunters and warriors from the frozen Shiverpeak Mountains. They revere the Spirits of the Wild and believe that legendary deeds grant immortality. Norn value strength, honor, and the thrill of the hunt. Their great hunt for the dragon Jormag defines their current age."
    },
    sylvari: {
        name: "Sylvari",
        coverImage: "./images/race/cover/2-sylvari-cover.webp",
        iconImage: "./images/race/selector/2-sylvari-icon.webp",
        lore: "The Sylvari are a race of plant-like humanoids born from the Pale Tree. They awaken with innate knowledge but must discover their own path in the world. Each Sylvari has a Wyld Hunt—a sense of destiny guiding their purpose. They are curious, noble, and deeply connected to nature."
    },
    human: {
        name: "Human",
        coverImage: "./images/race/cover/3-human-cover.webp",
        iconImage: "./images/race/selector/3-human-icon.webp",
        lore: "Humans are resilient survivors who have lost much of their ancestral lands but never their spirit. They worship the Six Human Gods and have built kingdoms like Divinity's Reach. Though their empire has shrunk, humans remain determined, adaptable, and fiercely protective of their remaining territory."
    },
    asura: {
        name: "Asura",
        coverImage: "./images/race/cover/4-asura-cover.webp",
        iconImage: "./images/race/selector/4-asura-icon.webp",
        lore: "The Asura are a diminutive, intelligent race known for their technological mastery and magical inventions. Hailing from the depths of Tyria, they have built vast underground cities and created powerful golems. Despite their small stature, they possess brilliant minds and consider other races to be 'less evolved.'"
    },
    charr: {
        name: "Charr",
        coverImage: "./images/race/cover/5-charr-cover.webp",
        iconImage: "./images/race/selector/5-charr-icon.webp",
        lore: "The Charr are a fierce, militaristic race of feline humanoids. They conquered the human kingdom of Ascalon and have built a society around the Iron Legion's war machine. Charr value efficiency, strength, and loyalty to their warband. They have put aside their ancestral worship to embrace technology and unity."
    }
};

const professionDetails = {
    necromancer: {
        name: "Necromancer",
        coverImage: "./images/profession/cover/1-necromancer-cover.webp",
        iconImage: "./images/profession/selector/1-necromancer-icon.webp",
        description: "Necromancers channel death magic, draining life force and commanding minions. They excel at conditions, survivability through life force, and area control. Whether corrupting boons or raising the dead, necromancers are formidable in solo and group content."
    },
    ranger: {
        name: "Ranger",
        coverImage: "./images/profession/cover/2-ranger-cover.webp",
        iconImage: "./images/profession/selector/2-ranger-icon.webp",
        description: "Rangers bond with pets and use the power of nature. They fight at range with bows or up close with axes and daggers. Versatile and self-sufficient, rangers excel in solo play and bring strong condition damage and utility to groups."
    },
    warrior: {
        name: "Warrior",
        coverImage: "./images/profession/cover/3-warrior-cover.webp",
        iconImage: "./images/profession/selector/3-warrior-icon.webp",
        description: "Warriors are masters of melee combat, wielding greatswords, axes, hammers, and more. They build adrenaline for burst attacks and inspire allies with banners and shouts. Straightforward, powerful, and always in the thick of battle."
    },
    guardian: {
        name: "Guardian",
        coverImage: "./images/profession/cover/4-guardian-cover.webp",
        iconImage: "./images/profession/selector/4-guardian-icon.webp",
        description: "Guardians are holy warriors who combine heavy armor with protective magic. They wield virtues that benefit allies and burn foes, create defensive wards, and can support a party with powerful boons. A versatile profession ideal for those who like to protect and lead."
    },
    mesmer: {
        name: "Mesmer",
        coverImage: "./images/profession/cover/5-mesmer-cover.webp",
        iconImage: "./images/profession/selector/5-mesmer-icon.webp",
        description: "Masters of illusion and manipulation, Mesmers create phantasmal copies, wield glamour magic, and confuse foes. They specialize in support, control, and bursting down enemies with well-timed illusions. Their pink and purple magic is as beautiful as it is deadly."
    },
    revenant: {
        name: "Revenant",
        coverImage: "./images/profession/cover/6-revenant-cover.webp",
        iconImage: "./images/profession/selector/6-revenant-icon.webp",
        description: "Revenants channel legendary figures from Tyria's history, swapping between stances to access different abilities. They blend heavy armor with supernatural powers, offering solid damage, support, and team utility. A unique profession that communes with the Mists."
    },
    thief: {
        name: "Thief",
        coverImage: "./images/profession/cover/7-theif-cover.webp",
        iconImage: "./images/profession/selector/7-theif-icon.webp",
        description: "Thieves strike from the shadows with daggers, pistols, and shortbows. They use initiative instead of cooldowns for precise, rapid attacks. Stealth, mobility, and single-target damage make thieves excellent for hit-and-run tactics."
    },
    engineer: {
        name: "Engineer",
        coverImage: "./images/profession/cover/8-engineer-cover.webp",
        iconImage: "./images/profession/selector/8-engineer-icon.webp",
        description: "Engineers use gadgets, turrets, elixirs, and kits to control the battlefield. They can adapt to support, damage, or control roles. From flamethrowers to med kits, engineers bring creativity and versatility to any party."
    },
    elementalist: {
        name: "Elementalist",
        coverImage: "./images/profession/cover/9-elementalist-cover.webp",
        iconImage: "./images/profession/selector/9-elementalist-icon.webp",
        description: "Elementalists attune to the four elements—fire, water, air, and earth—switching between them to adapt to any situation. They deliver high damage, healing, and control. Demanding but rewarding, elementalists are the essence of versatile spellcasting."
    }
};

const modal = document.querySelector("#gw2-modal");

function showModal(content, section) {
    if (!modal) return;
    if (section) {
        section.appendChild(modal);
    }
    modal.innerHTML = "";
    modal.innerHTML = content;
    modal.showModal();
    const closeBtn = document.getElementById("closeModal");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => modal.close());
    }
}

const playNowModalContent = `
    <button id="closeModal">\u2715</button>
    <h2>How would you like to play?</h2>
    <p>Choose your preferred way to experience Guild Wars 2:</p>
    <div class="modal-links">
        <a href="https://www.guildwars2.com/" target="_blank" rel="noopener noreferrer" class="modal-link-btn">Download the game</a>
        <a href="https://play.geforcenow.com/" target="_blank" rel="noopener noreferrer" class="modal-link-btn">Play in browser for free (GeForce NOW)</a>
    </div>
`;

function showPlayNowModal(section) {
    showModal(playNowModalContent, section);
}

const playNowHeroBtn = document.querySelector(".hero-section .play-now-btn");
if (playNowHeroBtn) {
    playNowHeroBtn.addEventListener("click", () => {
        showPlayNowModal(playNowHeroBtn.closest("section"));
    });
}

let selectedRace = "norn";
const raceCover = document.getElementById("race-cover");
const raceList = document.getElementById("race-list");
const raceLearnLoreBtn = document.getElementById("race-learn-lore");

const raceDescriptionEl = document.getElementById("race-description");

function setRaceCover(raceKey, preserveScrollY) {
    const race = raceDetails[raceKey];
    if (raceCover && race) {
        if (preserveScrollY != null) {
            raceCover.onload = () => {
                window.scrollTo(0, preserveScrollY);
                raceCover.onload = null;
            };
        }
        raceCover.src = race.coverImage;
        raceCover.alt = race.name;
        raceCover.onerror = () => { raceCover.src = imagePlaceholder; };
    }
    if (raceDescriptionEl && race) {
        raceDescriptionEl.textContent = race.lore;
    }
}

if (raceList) {
    raceList.querySelectorAll("[data-race]").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const scrollY = window.scrollY;
            const key = item.getAttribute("data-race");
            if (key && raceDetails[key]) {
                selectedRace = key;
                setRaceCover(key, scrollY);
                raceList.querySelectorAll("[data-race]").forEach((i) => i.classList.remove("selected"));
                item.classList.add("selected");
                requestAnimationFrame(() => {
                    window.scrollTo(0, scrollY);
                });
            }
        });
    });
}

if (raceLearnLoreBtn) {
    raceLearnLoreBtn.addEventListener("click", () => {
        const race = raceDetails[selectedRace];
        if (race) {
            showModal(`
                <button id="closeModal">\u2715</button>
                <h2>${race.name}</h2>
                <p>${race.lore}</p>
            `, raceLearnLoreBtn.closest("section"));
        }
    });
}

if (raceList) {
    const firstRace = raceList.querySelector("[data-race]");
    if (firstRace) {
        selectedRace = firstRace.getAttribute("data-race") || "norn";
        setRaceCover(selectedRace);
        firstRace.classList.add("selected");
    }
}


let selectedProfession = "necromancer";
const professionCover = document.getElementById("profession-cover");
const professionList = document.getElementById("profession-list");
const professionLearnMoreBtn = document.getElementById("profession-learn-more");

const professionDescriptionEl = document.getElementById("profession-description");

function setProfessionCover(profKey, preserveScrollY) {
    const prof = professionDetails[profKey];
    if (professionCover && prof) {
        if (preserveScrollY != null) {
            professionCover.onload = () => {
                window.scrollTo(0, preserveScrollY);
                professionCover.onload = null;
            };
        }
        professionCover.src = prof.coverImage;
        professionCover.alt = prof.name;
        professionCover.onerror = () => { professionCover.src = imagePlaceholder; };
    }
    if (professionDescriptionEl && prof) {
        professionDescriptionEl.textContent = prof.description;
    }
}

if (professionList) {
    professionList.querySelectorAll("[data-profession]").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const scrollY = window.scrollY;
            const key = item.getAttribute("data-profession");
            if (key && professionDetails[key]) {
                selectedProfession = key;
                setProfessionCover(key, scrollY);
                professionList.querySelectorAll("[data-profession]").forEach((i) => i.classList.remove("selected"));
                item.classList.add("selected");
                requestAnimationFrame(() => {
                    window.scrollTo(0, scrollY);
                });
            }
        });
    });
}

if (professionLearnMoreBtn) {
    professionLearnMoreBtn.addEventListener("click", () => {
        const prof = professionDetails[selectedProfession];
        if (prof) {
            showModal(`
                <button id="closeModal">\u2715</button>
                <h2>${prof.name}</h2>
                <p>${prof.description}</p>
            `, professionLearnMoreBtn.closest("section"));
        }
    });
}

if (professionList) {
    const firstProf = professionList.querySelector("[data-profession]");
    if (firstProf) {
        selectedProfession = firstProf.getAttribute("data-profession") || "necromancer";
        setProfessionCover(selectedProfession);
        firstProf.classList.add("selected");
    }
}

const findOutMoreStory = `I stumbled upon Guild Wars 2 while up late with a newborn baby who was struggling to sleep.
I downloaded the game and just to keep myself awake, and to be busy doing something.
I just jumped on the 10-hour free trial raptor, and just rode around the map.
I quickly found that there were areas of the map I could not go without immediately dying.
I consistently noticed that events kept popping up for me to participate in, no matter where I went on the map, and some of them were very tempting to stop riding and see what was going on.
Sometimes I would go by HUGE groups of monsters, and large groups of players fighting them, but a lot of times it was just me and my raptor trying to survive.
By the end of the free 10 hour trial, I had so many places that I wanted to go back to, so many places I wanted to learn more about.
So many adventures I couldn't wait to have.
Well I spent quite a bit of time traveling around to those places I had seen, and something in particular hooked me.
I loved walking back through a land, and being notified of something that needed my assistance.
I would walk up and start helping out with the task.
Well after spending a significant amount of time doing this I was kind of burned out of the tasks in a particular area.
I decided to follow a group of players who were following an NPC with green box above his head.
I thought it was funny to follow the group of players and cast healing spells on them as they walked, but I couldn't figure out what they were doing.
Then suddenly out of nowhere, the NPC attacked!
I was completely taken off guard. It was super strong, and actually killed me at some point in the fight.
Luckily was able to get back to the fight quickly, and help finish him off.
After the battle, the NPC disappeared. I chatted to the group of players to see if they would let me know what happened.
And that is when I learned about guilds (groups of players who play together), and where I was introduced to the absolute MASSIVE world that is Guild Wars 2.
Up to that point. I had only played only 1 little part of the game. There was so. much. more!
There were other maps, other game modes, and even other skills my character could do.
And the most valuable part to me was the amazing group of people that I had found who wanted to play it all with me.
They wanted to share the victories and failures together with me.
I was led by the hand by many patient veterans into training grounds to help me learn how to play better.
And I was introduced into all of the different game modes that Guild Wars 2 had to offer.`;

const storyTextEl = document.getElementById("story-text");
if (storyTextEl) {
    storyTextEl.textContent = findOutMoreStory.replace(/\n\n/g, "\n").replace(/\n/g, " ");
}

const findOutMoreBtn = document.getElementById("find-out-more");
if (findOutMoreBtn) {
    const findOutMoreSection = findOutMoreBtn.closest("section");
    findOutMoreBtn.addEventListener("click", () => {
        showModal(`
            <button id="closeModal">\u2715</button>
            <h2>Find Out More</h2>
            <p><em>Some reasons from my first Character: Syavirnah</em></p>
            <p class="modal-story">${findOutMoreStory.replace(/\n/g, " ")}</p>
            <button type="button" id="play-now-from-story" class="cta-btn modal-cta">Play Now</button>
        `, findOutMoreSection);
        const playNowFromStory = document.getElementById("play-now-from-story");
        if (playNowFromStory) {
            playNowFromStory.addEventListener("click", () => {
                modal.close();
                showPlayNowModal(findOutMoreSection);
            });
        }
    });
}

const playNowBottomBtn = document.getElementById("play-now-bottom");
if (playNowBottomBtn) {
    playNowBottomBtn.addEventListener("click", () => {
        showPlayNowModal(playNowBottomBtn.closest("section"));
    });
}

