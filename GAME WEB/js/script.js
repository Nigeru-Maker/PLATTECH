const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => document.body.classList.toggle('dark'));

// Tabs
function openTab(index) {
  const buttons = document.querySelectorAll('.tabs button');
  const contents = document.querySelectorAll('.tab-content');
  buttons.forEach(btn => btn.classList.remove('active'));
  contents.forEach(c => c.classList.remove('active'));
  buttons[index].classList.add('active');
  contents[index].classList.add('active');
}

// Carousel
let carouselIndex = 0;
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.game-card');

function moveCarousel(direction) {
  carouselIndex += direction * 2; 
  if (carouselIndex < 0) carouselIndex = 0;
  if (carouselIndex > cards.length - 2) carouselIndex = cards.length - 2;
  const cardWidth = 250 + 20; 
  track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;
}

const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

document.addEventListener('mousemove', e => {
  customCursor.style.left = e.pageX + 'px';
  customCursor.style.top = e.pageY + 'px';
});

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block'; 
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes('where wind') || title.includes('minecraft') || title.includes('elden')) {
      customCursor.textContent = '🗡️';
    } else if (title.includes('warzone') || title.includes('valorant')) {
      customCursor.textContent = '🔫';
    } else if (title.includes('mobile legends')) {
      customCursor.textContent = '🙂';
    }
  });

  card.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none'; 
  });
});
