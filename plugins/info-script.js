import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `
—“🍁” *Script Ini Privat*

☁️ *Sc UreshiiBotz By : Frhn & Vynaa*
☁️ *Source Code Type:*
 *-* Base : Plugins
 *-* Language : NodeJs & JS
 *-* Bailey : @adiwashing/baileys
 *-* Bailey Supp : @whiskeysockets/baileys

> Jika anda menginginkan Script ini silahkan hubungi nomor dibawah ini:

—“🍁” *Owner Contact:*
wa.me/6283873688108
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `Farhan Wangsaf`,
      body: global.author,
      thumbnailUrl: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=Script',
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(sc|script)$/i;

export default handler;