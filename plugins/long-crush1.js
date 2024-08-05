let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `▸ Cr : @notsntyya
haii, i have crush on u, hehe maaf ya kalo ini bisa bikin kamu risih atau bikin kamu pengen ngejauh dari aku, maaf kalo nge ganggu waktu kamu, aku ga berharap banyak buat kamu bisa suka balik sama aku, aku cuma mau ungkapin rasa yang udah lama aku simpan, perasaan ini tb tb dateng ke aku, dan bagi aku kamu sempurna & spesial di mata aku. 
aku ga maksa kamuu buat suka balik ke aku, atau terima perasaan aku ini, aku bisa ngungkapin perasaan aku aja udah seneng bgt, kalau kamu ga suka balik sama aku, gapapa koo, mencintai engga harus memiliki kan? aku bakal selalu nunggu kamu disini , thanks for being in my life.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-crush1']
handler.tags = ['long']
handler.command = /^(longtext-crush1)$/i

export default handler