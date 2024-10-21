  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  
     fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));
