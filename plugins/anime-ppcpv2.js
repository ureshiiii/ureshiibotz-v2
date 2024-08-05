/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zykomd
 * yt: @zykobotz
 * tt: @zykosiapa
 * wa: wa.me/6283133329293

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/

import { promises, readFileSync } from 'fs'
import fetch from "node-fetch"
let handler = async (m, { conn, args, text, usedPrefix, command, isROwner, isCreator }) => {
 m.react(rwait)
 let data = JSON.parse(readFileSync('./media/ppcp/ppcp.json'))
 let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', 'Cowo', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', 'Cewe', m)
}

handler.help = ['ppcpv2']
handler.tags = ['anime']
handler.command = /^(pp(cpv2|couplev2))$/i
handler.limit = true

export default handler