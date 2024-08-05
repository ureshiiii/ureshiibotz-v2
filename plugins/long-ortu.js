let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
haiii,eumm akuu mauu ngmongg sma mama,ayahh?? knpaa sii ayah slaluu ributt trss sma mama? udhh dehh jgn ributt  mahh,akuu pngen keluargaa kita tuu cemaraa,dan bahagiaa bkn nya ributt muluu kya gnii😞,akuu capee klian berduaa slaluu ributt,pngenn kyaa keluargaa orngg lain🥹,akuu gaa sukaa klian berduaa ributt mluu,jadii udhh jgnn ributt yaa,aku pngen kitaa tuu bahagiaa,udhh klian berduaa jgn ributtt kyaa gnii,ywda cmn sgtu ajaa ngmongg sma klian berduaa😃🙏🏻.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-ortu']
handler.tags = ['long']
handler.command = /^(longtext-ortu)$/i

export default handler