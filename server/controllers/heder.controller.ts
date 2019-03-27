import * as fs from 'file-system';

exports.getHeader = function (req, res) {
    fs.readFile('./data/header.json', (err, data) => {
        if (err) {
            console.log(`Error while getting the data from opportunities`);
        }
        res.send(JSON.parse(data));
    });
};
