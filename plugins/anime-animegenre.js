import fetch from 'node-fetch'

let handler = async(m, { conn }) => {
 m.react(rwait)
  try {
    let res = await fetch('https://api.jikan.moe/v4/genres/anime?filter=genres')
    if (!res.ok) throw await res.text()
    let json = await res.json()

    let genresInfo = json.data.map(genre => {
      return `☁ ️Genre: ${genre.name}\n📮 URL: ${genre.url}\n🐬 Count: ${genre.count}\n`
    }).join('\n')
    
    let message = `☁ ️Daftar Genre Anime:\n\n${genresInfo}`
    
    conn.reply(m.chat, message, m)
  } catch {
    m.reply('Yah Gagal')
  }
}

handler.help = ['animegenre']
handler.tags = ['anime']
handler.command = /^(animegenre)$/i

handler.register = true

export default handler