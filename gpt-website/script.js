/* ===================== script.js ===================== */
// Efek hover kartu siswa
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 20px 30px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
  });
});

// Efek daun jatuh
for (let i = 0; i < 20; i++) {
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.style.left = Math.random() * 100 + 'vw';
  leaf.style.animationDuration = 5 + Math.random() * 5 + 's';
  document.body.appendChild(leaf);
}

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.padding = '8px 30px';
    header.style.background = 'rgba(255,255,255,0.85)';
  } else {
    header.style.padding = '14px 30px';
    header.style.background = 'rgba(255,255,255,0.65)';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const sky = document.querySelector(".sky");

  function cycle() {
    // PAGI (lama)
    sky.classList.remove("sunset");

    setTimeout(() => {
      // MALAM (lebih cepat)
      sky.classList.add("sunset");

      setTimeout(cycle, 12000); // malam
    }, 12000); // pagi
  }

  cycle();
});

