// Check system preference on page load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    document.body.classList.add('bg-gray-800'); 
    document.getElementById('darkModeIcon').classList.remove('fa-moon');
    document.getElementById('darkModeIcon').classList.add('fa-sun');
  }
  
  function toggleDarkMode() {
    var body = document.getElementById('body');
    var icon = document.getElementById('darkModeIcon');
  
    body.classList.toggle('bg-slate-200');
    body.classList.toggle('bg-gray-800');
    body.classList.toggle('dark-mode'); 
  
    if (body.classList.contains('bg-gray-800')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }