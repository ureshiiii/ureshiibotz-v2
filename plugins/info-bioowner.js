import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let memek = `
*-* Nama: Farhan amansyah
*-* Gender: Lakik
*-* Agama: Priv
*-* Tanggal Lahir: 6 Mei 2008
*-* Umur: 16 Th
*-* Kelas: X (10) / 1 Smk
*-* Hobby: Pemrograman & Main game
*-* Sifat: Dingin 🥶
*-* Tinggal: Kemang, Bogor, Jabar
*-* Instagram: @Ureshii.id_
`

conn.sendMessage(m.chat, {
      text: memek,
      contextInfo: {
      externalAdReply: {
      title: `Hannnieeee`,
      body: global.author,
      thumbnailUrl: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=BioOwner',
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i
  
  export default handler
 