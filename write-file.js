const fs = require('fs');

for (let i = 0; i < 5; i++) {
    fs.writeFile('./files/v1.' + i + '.txt', 'v' + i, 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
    })
}