const fs = require('fs');

const DIR_URL = 'C:/Users/15358/Documents/git-study/git-study-master/git-study/';

fs.readdir(DIR_URL, 'utf-8', (err, files) => {
    if (err) {
        throw err;
    }
    for (furl of files) {
        let fileUrl = DIR_URL + furl;
        fs.readFile(fileUrl, 'utf-8', (err, data) => {
            if (data != undefined) {
                console.log(data);
            }
        })
    }
})