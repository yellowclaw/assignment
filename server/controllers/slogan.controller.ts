import * as fs from 'file-system';

exports.getSlogan = function (req, res) {
    fs.readFile('./data/slogan.json', (err, data) => {
        if (err) {
            console.log(`Error while getting the data from opportunities`);
        }
        res.send(JSON.parse(data));
    });
};
