import * as fs from 'file-system';
import * as generateSafeId from "generate-safe-id";


exports.getOpportunities = function (req, res) {
    fs.readFile('./data/opportunities.json', (err, data) => {
        if (err) {
            console.log(`Error while getting the data from opportunities`);
        }
        res.send(JSON.parse(data));
    });
};

exports.postOpportunities = function (req, res) {
    fs.readFile('./data/opportunities.json', (err, data) => {
        if (err) {
            console.log(`Error while getting the data from opportunities`);
        }
        const testOpprt = {
            'id': generateSafeId(),
            'title': "DOLOR SIT AMET",
            'img': "http://localhost:3000/images/music.png",
            'description': "Aenean consequat at tortor ac feugiat. Praesent at tristique ipsum. Cras henrit volutpat vulputate."
        };

        let newJson = JSON.parse(data);

        newJson.push(testOpprt);
        newJson = JSON.stringify(newJson);
        fs.writeFile('./data/opportunities.json', newJson, err => {
            if (err) {
                console.log('Error while write the data to opportunities')
            }
            res.send(JSON.parse(newJson));
        });
    });
};

exports.deleteOpportunity = function (req, res) {
    fs.readFile('./data/opportunities.json', (err, data) => {
        if (err) {
            console.log(`Error while getting the data from opportunities`);
        }

        let newJson = JSON.parse(data);

        const opprt = newJson.filter(item => item.id == req.params.id)[0];

        if (opprt) {
            const index = newJson.indexOf(opprt);

            newJson.splice(index, 1);

            newJson = JSON.stringify(newJson);
            fs.writeFile('./data/opportunities.json', newJson, err => {
                if (err) {
                    console.log('Error write to delete opportunity')
                }
                res.send(JSON.parse(newJson));
            });
        } else {
            res.status(404).send({error: `Cannot find user ${req.params.id}`})
        }
    });
};
