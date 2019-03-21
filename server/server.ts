import * as express from 'express';
import * as bodyParser from 'body-parser';
const port = 3000;
const app = express();
app.use('/images', express.static('images'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let opportunities = [
  {
    title: 'LOREM IPSUM',
    img: `http://localhost:${port}/images/image.png`,
    description: 'Aenean consequat at tortor ac feugiat. Praesent at tristique ipsum. Cras henrit volutpat vulputate.',
  },
  {
    title: 'DOLOR SIT AMET',
    img: `http://localhost:${port}/images/music.png`,
    description: 'Aenean consequat at tortor ac feugiat. Praesent at tristique ipsum. Cras henrit volutpat vulputate.',
  },
  {
    title: 'NULLAM IN ULTRICIES',
    img: `http://localhost:${port}/images/record.png`,
    description: 'Aenean consequat at tortor ac feugiat. Praesent at tristique ipsum. Cras henrit volutpat vulputate.',
  },
  {
    title: 'VESTIBULUM AT SAPIE',
    img: `http://localhost:${port}/images/video.png`,
    description: 'Aenean consequat at tortor ac feugiat. Praesent at tristique ipsum. Cras henrit volutpat vulputate.',
  },
];

let header = {
  logoText: 'your logo',
  navItems: [
    {
      description: 'home'
    },
    {
      description: 'our services'
    },
    {
      description: 'References / Works'
    },
    {
      description: 'Career'
    },
    {
      description: 'contact us'
    },
  ]
};

let slogan = {
  description: 'We are your best choice',
  background: `http://localhost:${port}/images/slogan-background.png`,
  logo: `http://localhost:${port}/images/slogan-logo.png`
};

let advantages = {
  title: 'We are no. 1... WHY?',
  listImg: `http://localhost:${port}/images/check.png`,
  firstPanel: [
    {
      description: 'Best hardware around the world'
    },
    {
      description: '10 TB Storage for all our clients'
    },
    {
      description: 'Easy powerfull control panel with special tools'
    }
  ],
  secondPanel: [
    {
      description: 'Free updates every month'
    },
    {
      description: 'Managed uptime, OS support & security'
    },
    {
      description: '24/7 customer via phone and email to help you implement'
    }
  ]
};

let customers = {
  number: 200.000
};

let logos = {
  firstLogo: `http://localhost:${port}/images/logos1.png`,
  secondLogo: `http://localhost:${port}/images/logos2.png`
};

let footer = {
  payPalImg: `http://localhost:${port}/images/paypal.png`,
  listImg: `http://localhost:${port}/images/arrow.png`,
  items: [
    {
      title: 'COMPANY',
      list: [
        {
          one: 'About us',
          two: 'Career',
          three: 'Our works / References',
          four: 'Contact us'
        }
      ]
    },
    {
      title: 'OUR SERVICES',
      list: [
        {
          one: 'Lorem ipsum',
          two: 'Dolor sit amet',
          three: 'Nullam in ultricies',
          four: 'Vestibulum at sapie'
        }
      ]
    },
    {
      title: 'COMPANY',
      list: [
        {
          one: '588 125 4666',
          two: 'support@yourdomain.com',
          three: '5 Place Road Park',
          four: 'New York 24856'
        }
      ]
    },
  ]
};


app.get('/api/header', (req, res) => {
  res.send(header);
});

app.get('/api/slogan', (req, res) => {
  res.send(slogan);
});

app.get('/api/opportunities', (req, res) => {
  res.send(opportunities);
});

app.get('/api/advantages', (req, res) => {
  res.send(advantages);
});

app.get('/api/customers', (req, res) => {
  res.send(customers);
});

app.get('/api/logos', (req, res) => {
  res.send(logos);
});

app.get('/api/footer', (req, res) => {
  res.send(footer);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
