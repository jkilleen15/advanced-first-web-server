// Your server code here...
import express from 'express';

// app is instance of server
// we call .listen --> server starts, runs, waits for request
const app = express();

import bodyParser from 'body-parser';
// body parser can parse many different forms, we want JSON, easiest
// use .use adds middleware to express
app.use(bodyParser.json());


// callback function defined by express - request/response
// request respresents the http request sent to server ;
// response represents the http response sent back to client

// use app.something plus path plus function --> tell server what to do in any given circumstance
// we want to send back data in form JSON

app.get('/', (request, response) => {
  // return response.send('you tried to get the route path');
  return response.json({message: 'Hello World'});
});

/*
app.get('/', (request, response) => {
  return response.json({hello: 'world'});
});

app.post('/', (request, response) => {
  return response.json({whatisthis: 'you posted'});
});

*/

/*
app.post('/contacts', (request, response) => {
  return response.json({whatisthis: 'you posted'});
});
*/

app.post('/contacts', (request, response) => {
  return response.json({whatisthis: request.body});
});

app.get('/contacts', (request, response) => {
  return response.json([
    {
      _id: 1,
      name: 'Dale Cooper',
      occupation: 'FBI Agent',
      avatar: 'https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg'
    },
    {
      _id: 2,
      name: 'Spike Spiegel',
      occupation: 'Bounty Hunter',
      avatar: 'http://vignette4.wikia.nocookie.net/deadliestfiction/images/d/de/Spike_Spiegel_by_aleztron.jpg/revision/latest?cb=20130920231337'
    },
    {
      _id: 3,
      name: 'Wirt',
      occupation: 'adventurer',
      avatar: 'http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg'
    },
    {
      _id: 4,
      name: 'Michael Myers',
      occupation: 'Loving little brother',
      avatar: 'http://vignette2.wikia.nocookie.net/villains/images/e/e3/MMH.jpg/revision/latest?cb=20150810215746'
    },
    {
      _id: 5,
      name: 'Dana Scully',
      occupation: 'FBI Agent',
      avatar: 'https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg'
    }
  ]);
});

app.get('/contacts/:id', (request, response) => {
  // request object has everything from request
  // .id is variable name, defined above, called below
  return response.json({theId: request.params.id});
});

// shows we train for anything, it will return
app.get('/themostsecretpasswordeverthoughtof', (request, response) => {
  return response.json({secret: 'super secret information'});
});

app.listen(3002, (err) => {
  if (err) {
    return console.log('Error', err);
  }
});
