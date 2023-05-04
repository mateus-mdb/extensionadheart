document.getElementById("loginButton").addEventListener("click", async () => {
    const backendUrl = "https://mateusproj-extenxao-44np-mateus-mdb.vercel.app/proxy";
    const targetUrl =
      "http://roboturbo.com.br/acesso.php?email=mdiasbarbosa14@gmail.com&pass=Mat5515265022adheart&site=httpsadheart&versao=20230213R4";
  
    try {
      const response = await axios.post(backendUrl, { url: targetUrl });
      const data = response.data;
  
      if (data.length > 0) {
        const cookieData = data[0];
        const url = `https://${cookieData.domain}`;
  
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const activeTab = tabs[0];
  
          const newCookie = {
            url: url,
            name: cookieData.name,
            value: cookieData.value,
            domain: cookieData.domain,
            path: cookieData.path,
            secure: cookieData.secure,
            httpOnly: cookieData.httpOnly,
            sameSite: cookieData.sameSite,
            expirationDate: cookieData.expirationDate,
          };
  
          chrome.cookies.set(newCookie, (cookie) => {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            } else {
              console.log("Cookie set:", cookie);
              alert("Logado com sucesso!");
            }
          });
        });
      } else {
        alert("Erro ao fazer login, por favor tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer requisição:", error);
      alert("Erro ao fazer login, por favor tente novamente.");
    }
  });
  