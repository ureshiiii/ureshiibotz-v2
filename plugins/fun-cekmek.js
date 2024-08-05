let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Ketik Namanya Tolol!', m)
	
  conn.reply(m.chat, `
☁️ *Cek Memek* 
  
*-* Memek ${text}
*-* Memek : ${pickRandom(['ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
*-* Lubang : ${pickRandom(['perawan','ga perawan','udah pernah dimasukin','masih rapet','tembem'])}
*-* Jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss'])}
`.trim(), m)
}
handler.help = ['cekmemek <nama>']
handler.tags = ['fun']
handler.command = /^cekmemek/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
