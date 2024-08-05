let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
haloo pacall kuu akuu  mauu kasii tauu kee kamuu heheh...

sbenernya akuu mauu ngucapin makasii banyak ke kamuu sayangg 🦀🦀🦀
karenaa selalu ada buat aku, selalu ngertiin akuu
dan selalu siap karena sikap aku yang selalu bikin kamu badmood heheh🤩🤩

maafinn akuu yaa sikap akuu ke kamuu badmodd teruss makasii selaluu sabar+pengertian karenaa akuu selalu badmodd ke kamuu sukaa manja dan sikap nya campur aduk gajelas ke kamuu hehe

makasii banyakk sayangg jangann pernahh tinggalin akuu yaa akuu selaluu sayangg sama kamuu dann gaperna yang namanya lupain kamu disaat situasi apapun, love you forever well 💕
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-pacar']
handler.tags = ['long']
handler.command = /^(longtext-pacar)$/i

export default handler