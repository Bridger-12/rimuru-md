const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['628889616144', '628889616144']
global.premium = ['628889616144']
global.ownername = 'ᴹᴿ᭄ Ekนຊikค ×፝֟͜×'
global.botname = 'Nezuko - MD'
global.packname = '© by ᴹᴿ᭄ Ekนຊikค ×፝֟͜×'
global.gc = '-'
global.linkyt = 'Gada cok'
global.linkgc = 'Gada cok'
global.limitawal = '25'
global.author = 'Nezuko - MD'
global.sessionName = 'polo'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = 'terserah'
global.mess = {
    success: 'Berhasil...',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses !!',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.gambar = 'https://telegra.ph/file/c4d558fa3e3a83a18212a.jpg' //disini gambar bot nya lu bisa ganti pink gambar ini dengan link gambar punya lu
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://telegra.ph/file/c4d558fa3e3a83a18212a.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
