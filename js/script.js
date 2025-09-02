document.addEventListener('DOMContentLoaded', () => {

  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000);
  }

  
  const searchInput = document.getElementById('searchDest');
  const destinationItems = document.querySelectorAll('.destination-item');
  if (searchInput && destinationItems.length > 0) {
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
      destinationItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
      });
    });
  }


  const gallery = document.querySelector('.gallery');
  if (gallery) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.style.display = 'none';

    const modalImg = document.createElement('img');
    modalImg.classList.add('modal-img');
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    gallery.addEventListener('click', e => {
      if (e.target.tagName === 'IMG') {
        modalImg.src = e.target.src;
        modal.style.display = 'flex';
      }
    });

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }


  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email.includes('@') || !message) {
        alert('Please fill in all fields correctly.');
        e.preventDefault();
      } else {
        alert('Message sent successfully!');
      }
    });
  }
});
