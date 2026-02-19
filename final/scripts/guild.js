const API_KEY = 'B20CEA29-0A4D-544E-95BF-FF21483827E15D9A0135-38C8-4FBF-B2C8-AAAC4A64B914';
const ACCOUNT_URL = `https://api.guildwars2.com/v2/account?access_token=${API_KEY}`;
const GUILD_BASE_URL = 'https://api.guildwars2.com/v2/guild';
const EMBLEM_BASE_URL = 'https://emblem.werdes.net/emblem';
const guildDisplay = document.querySelector('#guild-display');

export async function getGuildData() {
    const accountResponse = await fetch(ACCOUNT_URL);
    const accountData = await accountResponse.json();

    const guildId = accountData.guilds[0];
    const guildResponse = await fetch(`${GUILD_BASE_URL}/${guildId}?access_token=${API_KEY}`);
    const guildData = await guildResponse.json();

    const emblemUrl = `${EMBLEM_BASE_URL}/${guildData.id}`;
    displayGuild(guildDisplay, guildData.name, guildData.tag, guildData.motd, emblemUrl);
}

function displayGuild(container, name, tag, motd, emblemUrl) {
    container.textContent = '';

    const h2 = document.createElement('h2');
    h2.textContent = name;

    const img = document.createElement('img');
    img.setAttribute('src', emblemUrl);
    img.setAttribute('alt', `Guild emblem for ${name}`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '128');
    img.setAttribute('height', '128');

    const guildTag = document.createElement('p');
    guildTag.textContent = `[${tag}]`;
    guildTag.setAttribute('class', 'guild-tag');

    container.appendChild(h2);
    container.appendChild(img);
    container.appendChild(guildTag);

    const guildMotd = document.createElement('p');
    guildMotd.textContent = motd;
    guildMotd.setAttribute('class', 'guild-motd');
    container.appendChild(guildMotd);
}