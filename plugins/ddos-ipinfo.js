const axios = require('axios');

const apiKey = '8fd0a436e74f44a7a3f94edcdd71c696';
let handler = async (m, { text }) => {
  try {
    if (!text || !isValidIP(text)) {
      return m.reply('Masukan IP Address dengan benar!');
    }
    
    const apiUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${text}`;
    const response = await axios.get(apiUrl);
    if (response.data) {
      const ipInfo = response.data;
      const resultMessage = formatResult(ipInfo);
      conn.sendMessage(m.chat, { contextInfo: {
        externalAdReply: {
          showAdAttribution: true, 
          title: `Details IP Address`,
          body: `IP Details: ${text}`,
          mediaType: 'image/png',  
          renderLargerThumbnail : false,
          thumbnailUrl: ``,
          sourceUrl: ``
        }
      }, text: resultMessage}, {quoted: m});
    } else {
      m.reply('Gagal mengambil informasi');
    }
  } catch (error) {
    m.reply(`Error: ${error.message}`);
  }
};

function isValidIP(text) {
  const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  return ipPattern.test(text);
}

function countryToEmojiFlag(countryCode) {
  return countryCode
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

function formatResult(ipInfo) {
  const {
    ip,
    country_name,
    country_code2,
    city,
    isp,
    organization,
    country_flag,
    latitude,
    longitude,
  } = ipInfo;

  const countryFlag = countryToEmojiFlag(country_code2);

  return `
Hallow sayangg, nih informasi ip nya!

> IP: ${ip}
> Flags: ${countryFlag}
> Country: ${country_name}
> City: ${city}
> ISP: ${isp}
> Organization: ${organization}
> Lat|Long: ${latitude}|${longitude}

*https://www.google.com/maps/place/${latitude},${longitude}*
`;
}

handler.help = ['ipinfo'];
handler.tags = ['ddos'];
handler.command = /^(ipinfo)$/i;

module.exports = handler;
