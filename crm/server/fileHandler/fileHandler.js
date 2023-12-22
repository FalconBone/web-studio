const fs = require('fs/promises');
const path = require('path');

function fileHandler(formData) {

    
    return new Promise((resolve, reject) => {
        const fileName = 'file.txt'
        console.log('Нигга', formData);
        fs.open(fileName, 'w')
            .then(async (err) => {
                await fs.writeFile(fileName, '')
            })
            .then(async (err) => {
                for (let key in formData) {
                    await fs.appendFile(fileName, `${key}: ${formData[key]}\n`)
                        .then((err) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                }
            })
            .then(async () => {
                await fs.rename(path.resolve(__dirname, '..', fileName), path.resolve(__dirname, '..', 'static', fileName))
                console.log('Пермитед');
                resolve(200)
            })
    })

}

async function fileStat() {

    const fileName = 'static/file.txt'
    
    const stat = await fs.stat(fileName)
    console.log('Стат');
    return stat
}

module.exports = { fileStat, fileHandler }