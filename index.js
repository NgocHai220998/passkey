const express = require('express');
const path = require('path');
const app = express();

// Serve the apple-app-site-association file from the .well-known directory
app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/.well-known/apple-app-site-association', (req, res) => {
  // Replace the placeholders with your own app details
  const appleAppSiteAssociation = {
    applinks: {
      apps: [],
      details: [
        {
          appID: 'XU6FXH6L2F.apple.passkeys-sample',
          paths: ['/path/to/content'],
        },
      ],
    },
  };

  // Set the appropriate headers
  res.set('Content-Type', 'application/json');
  res.status(200).json(appleAppSiteAssociation);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})