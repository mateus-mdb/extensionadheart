document.getElementById('loginButton').addEventListener('click', async () => {
    const proxy = {
      host: 'server.sixproxy.com',
      port: 24654,
      auth: {
        username: '7a92acc116',
        password: '81ce3d0a49'
      }
    };
  
    const url = 'http://roboturbo.com.br/acesso.php?email=mdiasbarbosa14@gmail.com&pass=Mat5515265022adheart&site=httpsadheart&versao=20230213R4';
  
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
  
      const data = response.data;
  
      if (data.length > 0) {
        const cookieData = data[0];
        const url = `https://${cookieData.domain}`;
  
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const activeTab = tabs[0];
  
          chrome.cookies.set({
            url: activeTab.url,
            name: cookieData.name,
            value: cookieData.value,
            path: cookieData.path,
            httpOnly: cookieData.httpOnly,
            secure: cookieData.secure,
            sameSite: cookieData.sameSite,
            expirationDate: cookieData.expirationDate,
          });
  
          alert('Login realizado com sucesso!');
        });
      } else {
        alert('Erro ao realizar login.');
      }
    } catch (error) {
      alert('Erro ao realizar requisição.');
    }
  });
  