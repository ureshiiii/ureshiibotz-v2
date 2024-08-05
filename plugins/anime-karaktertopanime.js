import fetch from 'node-fetch';

// Fungsi untuk menerjemahkan teks menggunakan Google Translate API
const translateText = async (text, targetLanguage) => {
  try {
    const maxChars = 2000; // Batasan jumlah karakter untuk setiap permintaan terjemahan
    let translatedText = '';
    for (let i = 0; i < text.length; i += maxChars) {
      const partialText = text.slice(i, i + maxChars);
      const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURI(partialText)}`);
      const json = await res.json();
      const partialTranslatedText = json[0].map(arr => arr[0]).join('');
      translatedText += partialTranslatedText;
    }
    return translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Kembalikan teks asli jika terjadi kesalahan
  }
};

let handler = async(m, { conn }) => {
 m.react(rwait)
  try {
    let res = await fetch(`https://api.jikan.moe/v4/top/characters`);
    if (!res.ok) throw new Error(`Yah Gagal`);
    let json = await res.json();

    let characterInfo = `☁️ Karakter Anime Top\n`;

    for (let character of json.data) {
      characterInfo += `🦢 Char Information\n`;
      characterInfo += `\n*-* Nama: ${character.name}`;
      characterInfo += `\n*-* Nama Kanji: ${character.name_kanji}`;
      characterInfo += `\n*-* Favorites: ${character.favorites}`;
      // Terjemahkan bagian "about" ke bahasa Indonesia
      const translatedAbout = await translateText(character.about, 'id');
      characterInfo += `\n*-* Tentang: \n${translatedAbout}`;
      characterInfo += '\n';
    }

    conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'karakter_top.jpg', characterInfo, m);
  } catch (error) {
    console.error(error);
    m.reply('Yah Gagal');
  }
}

handler.help = ['karaktertopanime'];
handler.tags = ['anime'];
handler.command = /^(karaktertopanime)$/i;

handler.register = true

export default handler;