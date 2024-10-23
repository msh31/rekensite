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
    var footer = document.getElementById('footer');
  
    body.classList.toggle('bg-slate-200');
    body.classList.toggle('bg-gray-800');
    body.classList.toggle('dark-mode'); 
  
    if (body.classList.contains('bg-gray-800')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      footer.classList.remove('bg-white', 'text-gray-600');
      footer.classList.add('bg-gray-800', 'text-gray-300');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      footer.classList.remove('bg-gray-800', 'text-gray-300');
      footer.classList.add('bg-white', 'text-gray-600');
    }
  }