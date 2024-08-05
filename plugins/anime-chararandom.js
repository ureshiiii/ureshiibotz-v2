import fetch from 'node-fetch';

let handler = async(m, { conn }) => {
 m.react(rwait)
  try {
    let res = await fetch(`https://api.jikan.moe/v4/random/characters`);
    if (!res.ok) throw new Error(`Yah Gagal`);
    let json = await res.json();

    let characterInfo = `☁ ️*Karakter Anime Random*\n`;
    characterInfo += `\n*-* Nama: ${json.data.name}`;
    characterInfo += `\n*-* Nama Kanji: ${json.data.name_kanji}`;
    characterInfo += `\n*-* Nama Panggilan: ${json.data.nicknames.join(', ')}`;
    characterInfo += `\n*-* Favorites: ${json.data.favorites}`;
    characterInfo += `\n*-* Tentang: \n${json.data.about}`;
    characterInfo += `\n\n*-* URL: ${json.data.url}`;

    // Kirim gambar karakter
    const imageUrl = json.data.images.jpg.image_url;
    conn.sendFile(m.chat, imageUrl, 'character.jpg', characterInfo, m);
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat mengambil karakter anime...');
  }
}

handler.help = ['randomchar'];
handler.tags = ['anime'];
handler.command = /^(randomchar)$/i;

handler.register = true

export default handler;