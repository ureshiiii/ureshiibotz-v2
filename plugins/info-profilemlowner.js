import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let memek = `
☁️ *MLBB Owner Info*

*-* Username: Han De Arsene
*-* ID: 754425*** (Pc Owner)
*-* Hightier: Mytichal Glory

*-* Fav Role:
  • Fighter
  • Mage
*-* Fav Lane:
  • Exp line
  • Mid line
  • Jungler

*-* Pencapaian:
  • Juara 1 Tour Offline Jaktim
  • Juara 2 Ft Offline Sekolah
`

conn.sendMessage(m.chat, {
      text: memek,
      contextInfo: {
      externalAdReply: {
      title: `Mabar Bang?`,
      body: global.author,
      thumbnailUrl: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=MobileLegend',
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.help = ['ml-owner']
handler.tags = ['info']
handler.command = /^(ml-owner)$/i
  
  export default handler
 