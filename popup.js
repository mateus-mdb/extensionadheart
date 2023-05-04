document.getElementById('loginButton').addEventListener('click', () => {
    if (typeof axios === 'undefined') {
      console.error('Axios não está definido');
    } else {
      console.log('Axios está disponível');
    }
  });
  