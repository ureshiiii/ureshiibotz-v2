let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
haloo, kamuu gimanaa kabarnya? sehat alwafiat kan?
hehehee... mauu kasii tau ajaa akuuu belumm bisa move on darimu jadii gt lah ya

maaf aga lancang karenaa aku sebenrnya masi pengen kaya semula kita awal kenal lalu jadian dan sebutan nya

*BALIKAN*
mau mulai dari awal lagii??
pliss yaa maaf kaloo akuu aga memaksamuu disinii akuu ga memaksamuu untuk balik ke akuu lagii kok :3

yaa akuu cuma kangen ajaa sii kayaa hubungan kita dlu tuh indah banget gabisa di tandingi dan kaya bener bener pemenangnha tuh kamu gt lho..


maaf yaa aku cuma pengen balikan lagii kok kaya semula lagi normall lagii mauu ga? kita mulai dari awal lagi dan perbaiki lagii hehe :3
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-gamon']
handler.tags = ['long']
handler.command = /^(longtext-gamon)$/i

export default handler