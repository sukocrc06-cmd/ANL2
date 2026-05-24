const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const CARDS_FILE = path.join(__dirname, 'cards.json');

// Helper to read cards
function readCards() {
  try {
    if (!fs.existsSync(CARDS_FILE)) {
      return {};
    }
    const data = fs.readFileSync(CARDS_FILE, 'utf8');
    return JSON.parse(data || '{}');
  } catch (e) {
    console.error('Error reading cards file:', e);
    return {};
  }
}

// Helper to write cards
function writeCards(cards) {
  try {
    fs.writeFileSync(CARDS_FILE, JSON.stringify(cards, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing cards file:', e);
  }
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.json': 'application/json; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // Parse URL to prevent query parameter issues (like ?qrLogin=true)
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);

  // API endpoints
  if (req.method === 'POST') {
    if (parsedUrl.pathname === '/api/create-card') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const card = JSON.parse(body);
          if (card.username && card.password && card.company && card.sector) {
            const cards = readCards();
            cards[card.username] = {
              username: card.username,
              password: card.password,
              company: card.company,
              sector: card.sector,
              status: 'pending',
              createdAt: Date.now()
            };
            writeCards(cards);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
          } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Missing fields' }));
          }
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }

    if (parsedUrl.pathname === '/api/activate-card') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (data.username) {
            const cards = readCards();
            if (cards[data.username]) {
              cards[data.username].status = 'activated';
              cards[data.username].activatedAt = Date.now();
              writeCards(cards);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true }));
            } else {
              res.writeHead(404, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Card not found' }));
            }
          } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Missing username' }));
          }
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }

    if (parsedUrl.pathname === '/api/login') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const creds = JSON.parse(body);
          if (creds.username && creds.password) {
            const cards = readCards();
            const card = cards[creds.username];
            if (card && card.password === creds.password) {
              card.status = 'activated';
              card.activatedAt = Date.now();
              card.sessionToken = 'token_' + card.username + '_' + Date.now();
              writeCards(cards);

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({
                success: true,
                company: card.company,
                sector: card.sector,
                status: card.status,
                createdAt: card.createdAt,
                userId: card.username,
                sessionToken: card.sessionToken
              }));
            } else {
              res.writeHead(401, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'invalid' }));
            }
          } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Missing credentials' }));
          }
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
        }
      });
      return;
    }
  }

  let filePath = '.' + parsedUrl.pathname;
  if (filePath === './') {
    filePath = './index.html';
  }

  // Traversal protection
  if (filePath.includes('..')) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden (Directory Traversal Detected)');
    return;
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 File Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`500 Internal Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('=================================================');
  console.log('   ANL VERTEX ML PORTAL - NODE.JS STATIC SERVER   ');
  console.log('=================================================');
  console.log(`Server is starting up...`);
  console.log(`Web application URL: http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to terminate server.`);
  console.log('=================================================');
});
