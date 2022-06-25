const http = require('http')

const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((req, res) => {

  console.log(req.url);
  const { headers, method, url } = req;
  let body = [];
  req.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    res.on('error', (err) => {
      console.error(err);
    });
  })

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const responseBody = { message : "Response from Backend" };
  const responseBodyAlt = {message : "Alternate response from Backend"};
  // const responseBody = {headers, method, url, body};

  if (req.url == "/api") {
    res.write(JSON.stringify(responseBody));
  } else if (req.url == "/alt") {

    res.write(JSON.stringify(responseBodyAlt));
  }
  
  res.end();
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })