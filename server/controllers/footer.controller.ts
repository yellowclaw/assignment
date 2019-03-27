import * as fs from 'file-system';

exports.getFooter = function (req, res) {
    fs.readFile('./data/footer.json', (err, data) => {
        if (err) {
            console.log(`Error while getting the data from opportunities`);
        }
        res.send(JSON.parse(data));
    });
};
