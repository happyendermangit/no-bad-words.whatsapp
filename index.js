const qrcode = require('qrcode-terminal');
const { words }  = require('./words.js')


const { Client,LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message_create',(msg) => {
    console.log(words)
    msg.getChat().then(e=>{
        if (e.name == "kglg"){
            for (word of msg.body.split(' ')){
                if (words.includes(word.toLowerCase())){
                    msg.delete(true)
                    client.sendMessage(msg.from,"🤡 Nice try!\n There ain't any bad words in this group 💀")
                    break;
                }
            }
        }
    })


})

client.on('message_edit',(msg) => {

    console.log(words)
    
    msg.getChat().then(e=>{
        if (e.name == "kglg"){
            for (word of msg.body.split(' ')){
                if (words.includes(word.toLowerCase())){
                    msg.delete(true)
                    client.sendMessage(msg.from,"🤡 Nice try!\n There ain't any bad words in this group 💀")
                    break;
                }
            }
        }
    })


})

client.initialize();
