import * as express from 'express';
import * as bodyParser from 'body-parser';

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** controllers */
const headerController = require('./controllers/heder.controller');
const sloganController = require('./controllers/slogan.controller');
const opportunityController = require('./controllers/opportunity.controller');
const advantagesController = require('./controllers/advantages.controller');
const customersController = require('./controllers/customers.controller');
const logosController = require('./controllers/logos.controller');
const footerController = require('./controllers/footer.controller');
app.use('/images', express.static('images'));

/** HEADER */
app.get('/api/header', headerController.getHeader);

/** SLOGAN */
app.get('/api/slogan', sloganController.getSlogan);

/** OPPORTUNITY */
app.get('/api/opportunities', opportunityController.getOpportunities);
app.post('/api/opportunities', opportunityController.postOpportunities);
app.delete('/api/opportunities/:id', opportunityController.deleteOpportunity);

/** ADVANTAGES */
app.get('/api/advantages', advantagesController.getAdvantages);

/** CUSTOMERS */
app.get('/api/customers', customersController.getCustomers);

/** LOGOS */
app.get('/api/logos', logosController.getLogos);

/** FOOTER */
app.get('/api/footer', footerController.getFooter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
