import * as fs from 'file-system';

exports.getLogos = function (req, res) {
    fs.readFile('./data/logos.json', (err, data) => {
        if (err) {
            console.log(`Error while getting the data from opportunities`);
        }
        res.send(JSON.parse(data));
    });
};
