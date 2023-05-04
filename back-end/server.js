const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/proxy', async (req, res) => {
  const proxy = {
    host: 'server.sixproxy.com',
    port: 24654,
    auth: {
      username: '7a92acc116',
      password: '81ce3d0a49'
    }
  };

  const url = req.body.url;

  try {
    const response = await axios.get(url, {
      proxy: proxy,
      headers: {
        'Host': 'roboturbo.com.br',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': 'pt-BR,pt;q=0.9',
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao realizar requisição.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
