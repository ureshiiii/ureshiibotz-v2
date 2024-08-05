/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zzyko_04
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/

import axios from 'axios'
import fetch from 'node-fetch'
import crypto from 'crypto'
import cheerio from "cheerio"
import { cerpen } from '../lib/scrape.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
 m.react(rwait)
  switch (command) {
  case 'cerpen_anak':{
let cerpe = await cerpen(`anak`)
m.reply(`📜 Title: ${cerpe.title}\n🦢 Author: ${cerpe.author}\n📮 Kategori: ${cerpe.kategori}\n🐬 Pass Mod: ${cerpe.lolos}\n\n☁️ Story:\n\n${cerpe.cerita}`)
break
}
case 'cerpen_bahasadaerah':{
let cerpet = await cerpen(`bahasa daerah`)
m.reply(`📜 Title: ${cerpet.title}\n🦢 Author: ${cerpet.author}\n📮 Kategori: ${cerpet.kategori}\n🐬 Pass Mod: ${cerpet.lolos}\n\n☁️ Story:\n\n${cerpet.cerita}`)
break
}
case 'cerpen_bahasainggris':{
let cerpez = await cerpen(`bahasa Inggris`)
m.reply(`📜 Title: ${cerpez.title}\n🦢 Author: ${cerpez.author}\n📮 Kategori: ${cerpez.kategori}\n🐬 Pass Mod: ${cerpez.lolos}\n\n☁️ Story:\n\n${cerpez.cerita}`)
break
}
case 'cerpen_bahasajawa':{
let cerpep = await cerpen(`bahasa jawa`)
m.reply(`📜 Title: ${cerpep.title}\n🦢 Author: ${cerpep.author}\n📮 Kategori: ${cerpep.kategori}\n🐬 Pass Mod: ${cerpep.lolos}\n\n☁️ Story:\n\n${cerpep.cerita}`)
break
}
case 'cerpen_bahasasunda':{
let cerped = await cerpen(`bahasa sunda`)
m.reply(`📜 Title: ${cerped.title}\n🦢 Author: ${cerped.author}\n📮 Kategori: ${cerped.kategori}\n🐬 Pass Mod: ${cerped.lolos}\n\n☁️ Story:\n\n${cerped.cerita}`)
break
}
case 'cerpen_budaya':{
let cerper = await cerpen(`budaya`)
m.reply(`📜 Title: ${cerper.title}\n🦢 Author: ${cerper.author}\n📮 Kategori: ${cerper.kategori}\n🐬 Pass Mod: ${cerper.lolos}\n\n☁️ Story:\n\n${cerper.cerita}`)
break
}
case 'cerpen_cinta':{
let cerpem = await cerpen(`cinta`)
m.reply(`📜 Title: ${cerpem.title}\n🦢 Author: ${cerpem.author}\n📮 Kategori: ${cerpem.kategori}\n🐬 Pass Mod: ${cerpem.lolos}\n\n☁️ Story:\n\n${cerpem.cerita}`)
break
}
case 'cerpen_cintaislami':{
let cerpel = await cerpen(`cinta islami`)
m.reply(`📜 Title: ${cerpel.title}\n🦢 Author: ${cerpel.author}\n📮 Kategori: ${cerpel.kategori}\n🐬 Pass Mod: ${cerpel.lolos}\n\n☁️ Story:\n\n${cerpel.cerita}`)
break
}
case 'cerpen_cintapertama':{
let cerpes = await cerpen(`cinta pertama`)
m.reply(`📜 Title: ${cerpes.title}\n🦢 Author: ${cerpes.author}\n📮 Kategori: ${cerpes.kategori}\n🐬 Pass Mod: ${cerpes.lolos}\n\n☁️ Story:\n\n${cerpes.cerita}`)
break
}
case 'cerpen_cintaromantis':{
let cerpde = await cerpen(`cinta romantis`)
m.reply(`📜 Title: ${cerpde.title}\n🦢 Author: ${cerpde.author}\n📮 Kategori: ${cerpde.kategori}\n🐬 Pass Mod: ${cerpde.lolos}\n\n☁️ Story:\n\n${cerpde.cerita}`)
break
}
case 'cerpen_cintasedih':{
let fejdj = await cerpen(`cinta sedih`)
m.reply(`📜 Title: ${fejdj.title}\n🦢 Author: ${fejdj.author}\n📮 Kategori: ${fejdj.kategori}\n🐬 Pass Mod: ${fejdj.lolos}\n\n☁️ Story:\n\n${fejdj.cerita}`)
break
}
case 'cerpen_cintasegitiga':{
let frofk = await cerpen(`Cinta segitiga`)
m.reply(`📜 Title: ${frofk.title}\n🦢 Author: ${frofk.author}\n📮 Kategori: ${frofk.kategori}\n🐬 Pass Mod: ${frofk.lolos}\n\n☁️ Story:\n\n${frofk.cerita}`)
break
}
case 'cerpen_cintasejati':{
let frljkek = await cerpen(`cinta sejati`)
m.reply(`📜 Title: ${frljkek.title}\n🦢 Author: ${frljkek.author}\n📮 Kategori: ${frljkek.kategori}\n🐬 Pass Mod: ${frljkek.lolos}\n\n☁️ Story:\n\n${frljkek.cerita}`)
break
}
case 'cerpen_galau':{
let cdjfj = await cerpen(`galau`)
m.reply(`📜 Title: ${cdjfj.title}\n🦢 Author: ${cdjfj.author}\n📮 Kategori: ${cdjfj.kategori}\n🐬 Pass Mod: ${cdjfj.lolos}\n\n☁️ Story:\n\n${cdjfj.cerita}`)
break
}
case 'cerpen_gokil':{
let vrkfjf = await cerpen(`gokil`)
m.reply(`📜 Title: ${vrkfjf.title}\n🦢 Author: ${vrkfjf.author}\n📮 Kategori: ${vrkfjf.kategori}\n🐬 Pass Mod: ${vrkfjf.lolos}\n\n☁️ Story:\n\n${vrkfjf.cerita}`)
break
}
case 'cerpen_inspiratif':{
let ngkgk = await cerpen(`inspiratif`)
m.reply(`📜 Title: ${ngkgk.title}\n🦢 Author: ${ngkgk.author}\n📮 Kategori: ${ngkgk.kategori}\n🐬 Pass Mod: ${ngkgk.lolos}\n\n☁️ Story:\n\n${ngkgk.cerita}`)
break
}
case 'cerpen_jepang':{
let vrlgk = await cerpen(`jepang`)
m.reply(`📜 Title: ${vrlgk.title}\n🦢 Author: ${vrlgk.author}\n📮 Kategori: ${vrlgk.kategori}\n🐬 Pass Mod: ${vrlgk.lolos}\n\n☁️ Story:\n\n${vrlgk.cerita}`)
break
}
case 'cerpen_kehidupan':{
let ntlgkt = await cerpen(`kehidupan`)
m.reply(`📜 Title: ${ntlgkt.title}\n🦢 Author: ${ntlgkt.author}\n📮 Kategori: ${ntlgkt.kategori}\n🐬 Pass Mod: ${ntlgkt.lolos}\n\n☁️ Story:\n\n${ntlgkt.cerita}`)
break
}
case 'cerpen_keluarga':{
let bmflg = await cerpen(`keluarga`)
m.reply(`📜 Title: ${bmflg.title}\n🦢 Author: ${bmflg.author}\n📮 Kategori: ${bmflg.kategori}\n🐬 Pass Mod: ${bmflg.lolos}\n\n☁️ Story:\n\n${bmflg.cerita}`)
break
}
case 'cerpen_kisahnyata':{
let yptoo = await cerpen(`kisah nyata`)
m.reply(`📜 Title: ${yptoo.title}\n🦢 Author: ${yptoo.author}\n📮 Kategori: ${yptoo.kategori}\n🐬 Pass Mod: ${yptoo.lolos}\n\n☁️ Story:\n\n${yptoo.cerita}`)
break
}
case 'cerpen_korea':{
let jptpgr = await cerpen(`korea`)
m.reply(`📜 Title: ${jptpgr.title}\n🦢 Author: ${jptpgr.author}\n📮 Kategori: ${jptpgr.kategori}\n🐬 Pass Mod: ${jptpgr.lolos}\n\n☁️ Story:\n\n${jptpgr.cerita}`)
break
}
case 'cerpen_kristen':{
let yesusanjing = await cerpen(`kristen`)
m.reply(`📜 Title: ${yesusanjing.title}\n🦢 Author: ${yesusanjing.author}\n📮 Kategori: ${yesusanjing.kategori}\n🐬 Pass Mod: ${yesusanjing.lolos}\n\n☁️ Story:\n\n${yesusanjing.cerita}`)
break
}
case 'cerpen_liburan':{
let frkfkrk = await cerpen(`liburan`)
m.reply(`📜 Title: ${frkfkrk.title}\n🦢 Author: ${frkfkrk.author}\n📮 Kategori: ${frkfkrk.kategori}\n🐬 Pass Mod: ${frkfkrk.lolos}\n\n☁️ Story:\n\n${frkfkrk.cerita}`)
break
}
case 'cerpen_malaysia':{
let mzbdjd = await cerpen(`malaysia`)
m.reply(`📜 Title: ${mzbdjd.title}\n🦢 Author: ${mzbdjd.author}\n📮 Kategori: ${mzbdjd.kategori}\n🐬 Pass Mod: ${mzbdjd.lolos}\n\n☁️ Story:\n\n${mzbdjd.cerita}`)
break
}
case 'cerpen_mengharukan':{
let bgfngk = await cerpen(`mengharukan`)
m.reply(`📜 Title: ${bgfngk.title}\n🦢 Author: ${bgfngk.author}\n📮 Kategori: ${bgfngk.kategori}\n🐬 Pass Mod: ${bgfngk.lolos}\n\n☁️ Story:\n\n${bgfngk.cerita}`)
break
}
case 'cerpen_misteri':{
let lapdoek = await cerpen(`misteri`)
m.reply(`📜 Title: ${lapdoek.title}\n🦢 Author: ${lapdoek.author}\n📮 Kategori: ${lapdoek.kategori}\n🐬 Pass Mod: ${lapdoek.lolos}\n\n☁️ Story:\n\n${lapdoek.cerita}`)
break
}
case 'cerpen_motivasi':{
let bltkyj = await cerpen(`motivasi`)
m.reply(`📜 Title: ${bltkyj.title}\n🦢 Author: ${bltkyj.author}\n📮 Kategori: ${bltkyj.kategori}\n🐬 Pass Mod: ${bltkyj.lolos}\n\n☁️ Story:\n\n${bltkyj.cerita}`)
break
}
case 'cerpen_nasihat':{
let qpeidek = await cerpen(`nasihat`)
m.reply(`📜 Title: ${qpeidek.title}\n🦢 Author: ${qpeidek.author}\n📮 Kategori: ${qpeidek.kategori}\n🐬 Pass Mod: ${qpeidek.lolos}\n\n☁️ Story:\n\n${qpeidek.cerita}`)
break
}
case 'cerpen_nasionalisme':{
let cdmrgo = await cerpen(`nasionalisme`)
m.reply(`📜 Title: ${cdmrgo.title}\n🦢 Author: ${cdmrgo.author}\n📮 Kategori: ${cdmrgo.kategori}\n🐬 Pass Mod: ${cdmrgo.lolos}\n\n☁️ Story:\n\n${cdmrgo.cerita}`)
break
}
case 'cerpen_olahraga':{
let qpdiek = await cerpen(`olahraga`)
m.reply(`📜 Title: ${qpdiek.title}\n🦢 Author: ${qpdiek.author}\n📮 Kategori: ${qpdiek.kategori}\n🐬 Pass Mod: ${qpdiek.lolos}\n\n☁️ Story:\n\n${qpdiek.cerita}`)
break
}
case 'cerpen_patahhati':{
let vrlfor = await cerpen(`patah hati`)
m.reply(`📜 Title: ${vrlfor.title}\n🦢 Author: ${vrlfor.author}\n📮 Kategori: ${vrlfor.kategori}\n🐬 Pass Mod: ${vrlfor.lolos}\n\n☁️ Story:\n\n${vrlfor.cerita}`)
break
}
case 'cerpen_penantian':{
let aldpek = await cerpen(`penantian`)
m.reply(`📜 Title: ${aldpek.title}\n🦢 Author: ${aldpek.author}\n📮 Kategori: ${aldpek.kategori}\n🐬 Pass Mod: ${aldpek.lolos}\n\n☁️ Story:\n\n${aldpek.cerita}`)
break
}
case 'cerpen_pendidikan':{
let xnrjrk = await cerpen(`pendidikan`)
m.reply(`📜 Title: ${xnrjrk.title}\n🦢 Author: ${xnrjrk.author}\n📮 Kategori: ${xnrjrk.kategori}\n🐬 Pass Mod: ${xnrjrk.lolos}\n\n☁️ Story:\n\n${xnrjrk.cerita}`)
break
}
case 'cerpen_pengalaman':{
let hrkgor = await cerpen(`pengalaman pribadi`)
m.reply(`📜 Title: ${hrkgor.title}\n🦢 Author: ${hrkgor.author}\n📮 Kategori: ${hrkgor.kategori}\n🐬 Pass Mod: ${hrkgor.lolos}\n\n☁️ Story:\n\n${hrkgor.cerita}`)
break
}
case 'cerpen_pengorbanan':{


let itklog = await cerpen(`pengorbanan`)
m.reply(`📜 Title: ${itklog.title}\n🦢 Author: ${itklog.author}\n📮 Kategori: ${itklog.kategori}\n🐬 Pass Mod: ${itklog.lolos}\n\n☁️ Story:\n\n${itklog.cerita}`)
break
}
case 'cerpen_penyesalan':{
let pgrjgo = await cerpen(`penyesalan`)
m.reply(`📜 Title: ${pgrjgo.title}\n🦢 Author: ${pgrjgo.author}\n📮 Kategori: ${pgrjgo.kategori}\n🐬 Pass Mod: ${pgrjgo.lolos}\n\n☁️ Story:\n\n${pgrjgo.cerita}`)
break
}
case 'cerpen_perjuangan':{
let vtlgotk = await cerpen(`perjuangan`)
m.reply(`📜 Title: ${vtlgotk.title}\n🦢 Author: ${vtlgotk.author}\n📮 Kategori: ${vtlgotk.kategori}\n🐬 Pass Mod: ${vtlgotk.lolos}\n\n☁️ Story:\n\n${vtlgotk.cerita}`)
break
}
case 'cerpen_perpisahan':{
let wpfuej = await cerpen(`perpisahan`)
m.reply(`📜 Title: ${wpfuej.title}\n🦢 Author: ${wpfuej.author}\n📮 Kategori: ${wpfuej.kategori}\n🐬 Pass Mod: ${wpfuej.lolos}\n\n☁️ Story:\n\n${wpfuej.cerita}`)
break
}
case 'cerpen_persahabatan':{
let jptoyk = await cerpen(`persahabatan`)
m.reply(`📜 Title: ${jptoyk.title}\n🦢 Author: ${jptoyk.author}\n📮 Kategori: ${jptoyk.kategori}\n🐬 Pass Mod: ${jptoyk.lolos}\n\n☁️ Story:\n\n${jptoyk.cerita}`)
break
}
case 'cerpen_petualangan':{
let qwers = await cerpen(`petualangan`)
m.reply(`📜 Title: ${qwers.title}\n🦢 Author: ${qwers.author}\n📮 Kategori: ${qwers.kategori}\n🐬 Pass Mod: ${qwers.lolos}\n\n☁️ Story:\n\n${qwers.cerita}`)
break
}
case 'cerpen_ramadhan':{
let vrmfkk = await cerpen(`ramadhan`)
m.reply(`📜 Title: ${vrmfkk.title}\n🦢 Author: ${vrmfkk.author}\n📮 Kategori: ${vrmfkk.kategori}\n🐬 Pass Mod: ${vrmfkk.lolos}\n\n☁️ Story:\n\n${vrmfkk.cerita}`)
break
}
case 'cerpen_remaja':{
let vhptotk = await cerpen(`remaja`)
m.reply(`📜 Title: ${vhptotk.title}\n🦢 Author: ${vhptotk.author}\n📮 Kategori: ${vhptotk.kategori}\n🐬 Pass Mod: ${vhptotk.lolos}\n\n☁️ Story:\n\n${vhptotk.cerita}`)
break
}
case 'cerpen_rindu':{
let hptotlltk = await cerpen(`rindu`)
m.reply(`📜 Title: ${hptotlltk.title}\n🦢 Author: ${hptotlltk.author}\n📮 Kategori: ${hptotlltk.kategori}\n🐬 Pass Mod: ${hptotlltk.lolos}\n\n☁️ Story:\n\n${hptotlltk.cerita}`)
break
}
case 'cerpen_rohani':{
let zaldjdws = await cerpen(`rohani`)
m.reply(`📜 Title: ${zaldjdws.title}\n🦢 Author: ${zaldjdws.author}\n📮 Kategori: ${zaldjdws.kategori}\n🐬 Pass Mod: ${zaldjdws.lolos}\n\n☁️ Story:\n\n${zaldjdws.cerita}`)
break
}
case 'cerpen_romantis':{
let lxprhrh = await cerpen(`romantis`)
m.reply(`📜 Title: ${lxprhrh.title}\n🦢 Author: ${lxprhrh.author}\n📮 Kategori: ${lxprhrh.kategori}\n🐬 Pass Mod: ${lxprhrh.lolos}\n\n☁️ Story:\n\n${lxprhrh.cerita}`)
break
}
case 'cerpen_sastra':{
let qpifker = await cerpen(`sastra`)
m.reply(`📜 Title: ${qpifker.title}\n🦢 Author: ${qpifker.author}\n📮 Kategori: ${qpifker.kategori}\n🐬 Pass Mod: ${qpifker.lolos}\n\n☁️ Story:\n\n${qpifker.cerita}`)
break
}
    case 'cerpen_sedih': {
      let bmflgkjt = await cerpen('sedih');
      m.reply(`📜 Title: ${bmflgkjt.title}\n🦢 Author: ${bmflgkjt.author}\n📮 Kategori: ${bmflgkjt.kategori}\n🐬 Pass Mod: ${bmflgkjt.lolos}\n\n☁️ Story:\n\n${bmflgkjt.cerita}`);
      break;
    }
    
    case 'cerpen_sejarah': {
      let xwpwifj = await cerpen('sejarah');
      m.reply(`📜 Title: ${xwpwifj.title}\n🦢 Author: ${xwpwifj.author}\n📮 Kategori: ${xwpwifj.kategori}\n🐬 Pass Mod: ${xwpwifj.lolos}\n\n☁️ Story:\n\n${xwpwifj.cerita}`);
      break;
    }
  }
};
handler.tags = ['cerpenn']
handler.help = handler.command = ['cerpen_sejarah',
'cerpen_sedih',
'cerpen_sastra',
'cerpen_romantis',
'cerpen_rohani',
'cerpen_rindu',
'cerpen_remaja',
'cerpen_ramadhan',
'cerpen_petualangan',
'cerpen_persahabatan',
'cerpen_perpisahan',
'cerpen_perjuangan',
'cerpen_penyesalan',
'cerpen_pengorbanan',
'cerpen_pengalaman',
'cerpen_pendidikan',
'cerpen_penantian',
'cerpen_patahhati',
'cerpen_olahraga',
'cerpen_nasionalisme',
'cerpen_nasihat',
'cerpen_motivasi',
'cerpen_misteri',
'cerpen_mengharukan',
'cerpen_malaysia',
'cerpen_liburan',
'cerpen_kristen',
'cerpen_korea',
'cerpen_kisahnyata',
'cerpen_keluarga',
'cerpen_kehidupan',
'cerpen_jepang',
'cerpen_inspiratif',
'cerpen_gokil',
'cerpen_galau',
'cerpen_cintasejati',
'cerpen_cintasegitiga',
'cerpen_cintasedih',
'cerpen_cintaromantis',
'cerpen_cintapertama',
'cerpen_cintaislami',
'cerpen_cinta',
'cerpen_budaya',
'cerpen_bahasasunda',
'cerpen_bahasajawa',
'cerpen_bahasainggris',
'cerpen_bahasadaerah',
'cerpen_anak']
export default handler;
