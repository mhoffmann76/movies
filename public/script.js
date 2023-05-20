document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.querySelector('.clear');
    if (messageElement) {
      setTimeout(() => {
        messageElement.style.display = 'none';
      }, 3000); 
    }
  });