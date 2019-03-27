import * as fs from 'file-system';

exports.getCustomers = function (req, res) {
    fs.readFile('./data/customers.json', (err, data) => {
        if (err) {
            console.log(`Error while getting the data from opportunities`);
        }
        res.send(JSON.parse(data));
    });
};
