import * as fs from 'file-system';

exports.getAdvantages = function (req, res) {
    fs.readFile('./data/advantages.json', (err, data) => {
        if (err) {
            console.log(`Error while getting the data from opportunities`);
        }
        res.send(JSON.parse(data));
    });
};
