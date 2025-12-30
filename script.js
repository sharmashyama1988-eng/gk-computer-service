const WHATSAPP_NUMBER = '919716552036';

function sendWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const budget = document.getElementById('budget').value;
  const usecase = document.getElementById('usecase').value;
  const specs = document.getElementById('specs').value;
  const contact = document.getElementById('contact').value;

  const msg = `New PC Order - GK Computer Service\nName: ${name}\nContact: ${contact}\nBudget: ₹${budget}\nUse Case: ${usecase}\nSpecifications:\n${specs}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

document.getElementById('year').textContent = new Date().getFullYear();

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}