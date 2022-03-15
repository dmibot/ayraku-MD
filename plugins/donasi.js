let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085716793161]
│ • Telkomsel [082114499086]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/botstyle
│ • Gooay [082114499086]
│ • dana [082114499086]
│ • ovo [082114499086]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
