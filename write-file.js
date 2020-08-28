const fs = require('fs');

for (let i = 0; i < 10; i++) {
    fs.writeFile('./files/demo/' + i + '.txt', '写入文件内容', 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    })
}