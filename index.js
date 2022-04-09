const { VK } = require('vk-io')

const token = 'c601cd330bfb544fb8c12a3df18ee279cfef6a63ac12a2c716b4024198f3e365e1bb4fad01e9e9578f08c'

const vk = new VK({
    token,
    apiLimit: 20
})



vk.updates.on('message_new', async (msg) => { 

    const command = msg.text.toLowerCase()

    if(command === 'привет') {
        msg.reply('Привет вездекодерам!')
    }


})



vk.updates.start().then(console.log('Бот запущен'))