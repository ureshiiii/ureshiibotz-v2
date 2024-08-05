let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
allooo kamu kenapa sayang? how ur day? kamu kurang mood har ini? yauda gapapa gausa di paksa, kalo kamu lagi gamood lakuin hal yg bisa bikin kamu ketawa yg bisa bikin kamu senyum insyaAllah mood kamu balik, aku tau kamu cape tapi ayo bertahan sedikit lagi, kamu tau ga? kalo kamu nyerah sekarang kamu ga bakal tau kebahagian apa yang nunggu kamu di ujung sana ayoo percaya sama aku, tuhan ga selamanya ngasih kamu cobaan terus, tuhan pastii bakal kasih kamu imbalan atas segala cobaan yang kamu alami, aku yakin di balik itu semua kamu pasti akan segera merasakan kebahagiaan, kebahagiaan yang selama ini kamu tunggu, makasi banyak buat kamu yang bertahan sampai saat ini, kamu hebat aku bangga sama kamu, kamu keren anak baik, anak hebat, makasi ya, makasi uda jadi orang kuat, ayooo kedepannya lebih kuat lagi yaa liat kedepan ada banyak kebahagiaan yang menanti, makasi ga henti henti aku bakal bilang makasi, makasi uda jadi kuat, AKU SAYANG KAMU MUACH MUACH💗💞💐
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-bujuk1']
handler.tags = ['long']
handler.command = /^(longtext-bujuk1)$/i

export default handler