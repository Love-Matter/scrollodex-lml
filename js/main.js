document.addEventListener('DOMContentLoaded', function() {
let studios = [];
let filteredStudios = [];
let currentIndex = 0;
let selectedShops = [];
let shopTypes = [];
let shopEmojis = {};
let SHOP_EMOJI_MAP = {};
let selectedNeighborhoods = [];
let neighborhoodTypes = [];
let neighborhoodEmojis = {};
let studioOrder = [];

  // Load studio data from JSON
  fetch('data/studios.json?t=' + Date.now())
    .then(response => response.json())
    .then(data => {
      studios = data;
      
      // Generate random order that uses all studios before repeating
      studioOrder = shuffleArray([...studios]);
      
      filteredStudios = [...studioOrder];
      
      SHOP_EMOJI_MAP = {
        'wood': '🪵',
        'metal': '⚙️',
        'glass': '⚗️',
        'ceramic': '🏺',
        'textile': '🧵',
        'machine': '🎛',
        'leather': '👜',
        'laser': '✂️',
        'paint': '🎨',
        '3d print': '👾',
        'print': '🖼',
        'sculpt': '🗿',
        'digital': '💻'
      };

      shopTypes = Object.keys(SHOP_EMOJI_MAP).sort();
      shopEmojis = SHOP_EMOJI_MAP;
      
      // Extract unique neighborhoods
      neighborhoodTypes = [...new Set(studios.map(studio => studio.neighborhood))].sort();
      
      // Assign neighborhood emojis
      const fruitVegEmojis = ['🍎', '🍌', '🍉', '🍊', '🥦', '🥕', '🍆', '🍅', '🥑', '🌽', '🥒', '🥔', '🧄', '🧅', '🌶️', '🥝', '🍇', '🍓', '🍈', '🍒'];
      const shuffledEmojis = [...fruitVegEmojis].sort(() => Math.random() - 0.5);
      neighborhoodEmojis = {};
      neighborhoodTypes.forEach((neighborhood, index) => {
        neighborhoodEmojis[neighborhood] = shuffledEmojis[index % shuffledEmojis.length];
      });
      
      renderShopFilters();
      renderNeighborhoodFilters();
      renderCards();
    });

  function shuffleArray(array) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function generateCardHTML(studio) {
    // Correctly add data-long-name attribute (NOT inside class)
    const isLongName = studio.name.length > 20;
    const dataAttr = isLongName ? 'data-long-name' : '';
    
        return `
          <div class="studio-name" ${dataAttr}>${studio.name}</div>
          <div class="location">📍 <a href="https://www.google.com/maps/place/Crown+Heights,+Brooklyn,+NY" target="_blank" rel="noopener noreferrer">${studio.neighborhood}</a> 🏙 ${studio.city}</div>
          <div class="shops">
            ${(() => {
              // PRD §SEARCH PRIORITIZATION
              const filteredShops = selectedShops.length > 0
                ? [
                    // Filtered shops first (alphabetical)
                    ...studio.shops
                      .filter(shop => 
                        selectedShops.some(selected => 
                          shop.trim().toLowerCase() === selected.trim().toLowerCase()
                        )
                      )
                      .sort((a, b) => a.localeCompare(b)),
                    // Non-filtered shops next (alphabetical)
                    ...studio.shops
                      .filter(shop => 
                        !selectedShops.some(selected => 
                          shop.trim().toLowerCase() === selected.trim().toLowerCase()
                        )
                      )
                      .sort((a, b) => a.localeCompare(b))
                  ]
                : [...studio.shops].sort((a, b) => a.localeCompare(b));

              // CARD CONSTRAINTS
              const visibleCount = filteredShops.length <= 8 ? filteredShops.length : 7;
              const overflowCount = filteredShops.length - visibleCount;

              return [
                ...filteredShops.slice(0, visibleCount).map(shop => {
                    const emoji = SHOP_EMOJI_MAP[shop] || '❓';
                    return `
                    <div class="shop-item">
                      <div class="shop-emoji">${emoji}</div>
                      <div class="shop-label">${shop}</div>
                    </div>
                    `;
                }),
                ...(overflowCount > 0 ? [
                  `<div class="shop-item overflow">
                     <div class="shop-emoji">+</div>
                     <div class="shop-label">(${overflowCount})</div>
                     <div class="extra-shops-popup">
                       ${filteredShops.slice(visibleCount).map(shop => {
                           const emoji = SHOP_EMOJI_MAP[shop] || '❓';
                           return `
                           <div class="extra-shop">
                             <div class="shop-emoji">${emoji}</div>
                             <div class="shop-label">${shop}</div>
                           </div>
                           `;
                       }).join('')}
                     </div>
                   </div>`
                ] : [])
              ].join('');
            })()}
          </div>
          <div class="description">${studio.description}
          </div>
        <div class="contact">
            <div class="contact-left"></div>
            <div class="contact-middle">
                <a href="${studio.website}" target="_blank"><span>🖥</span></a>
                <a href="mailto:${studio.email}"><span>📧</span></a>
                <a href="tel:${studio.phone}"><span>📱</span></a>
            </div>
            <div class="contact-right">
                <span>🗓 Sa: 10a-10p</span>
            </div>
        </div>
        `;
      }

  function renderShopFilters() {
    const shopGrid = document.getElementById('shops-options');
    if (!shopGrid) {
      console.error('CRITICAL: Filter panel element missing! Expected ID: shops-options');
      return;
    }
    
    shopGrid.innerHTML = '';
    
    shopTypes.forEach(shop => {
      const option = document.createElement('div');
      option.className = 'shop-option';
      if (selectedShops.includes(shop)) {
        option.classList.add('active');
      }
      
      option.innerHTML = `
        <div class="shop-emoji">${shopEmojis[shop]}</div>
        <div class="shop-label">${shop}</div>
      `;
      
      option.addEventListener('click', () => {
        option.classList.toggle('active');
        const index = selectedShops.indexOf(shop);
        if (index === -1) {
          selectedShops.push(shop);
        } else {
          selectedShops.splice(index, 1);
        }
        applyFilters();
      });
      shopGrid.appendChild(option);
    });
  }

  function renderNeighborhoodFilters() {
    const neighborhoodGrid = document.getElementById('neighborhoods-options');
    if (!neighborhoodGrid) {
      console.error('CRITICAL: Neighborhood panel element missing! Expected ID: neighborhoods-options');
      return;
    }
    
    neighborhoodGrid.innerHTML = '';
    
    neighborhoodTypes.forEach(neighborhood => {
      const option = document.createElement('div');
      option.className = 'neighborhood-option';
      if (selectedNeighborhoods.includes(neighborhood)) {
        option.classList.add('active');
      }
      
      option.innerHTML = `
        <div class="neighborhood-emoji">${neighborhoodEmojis[neighborhood]}</div>
        <div class="neighborhood-label">${neighborhood}</div>
      `;
      
      option.addEventListener('click', () => {
        option.classList.toggle('active');
        const index = selectedNeighborhoods.indexOf(neighborhood);
        if (index === -1) {
          selectedNeighborhoods.push(neighborhood);
        } else {
          selectedNeighborhoods.splice(index, 1);
        }
        applyFilters();
      });
      neighborhoodGrid.appendChild(option);
    });
  }

  function applyFilters() {
    let filtered = [...studios];
    
    // Apply shop filters
        if (selectedShops.length > 0) {
          filtered = filtered.filter(studio => 
            selectedShops.every(selectedShop => 
              studio.shops.some(shop => 
                shop.trim().toLowerCase() === selectedShop.trim().toLowerCase()
              )
            )
          );
        }
        
        // Apply neighborhood filters
    if (selectedNeighborhoods.length > 0) {
      filtered = filtered.filter(studio => 
        selectedNeighborhoods.includes(studio.neighborhood)
      );
    }
    
    // Generate new random order for filtered results
    filteredStudios = shuffleArray([...filtered]);
    currentIndex = 0;
    renderCards();
  }

  function attachOverflowClickListener(cardElement) {
    const overflowItems = cardElement.querySelectorAll('.shop-item.overflow');
    overflowItems.forEach(item => {
      const popup = item.querySelector('.extra-shops-popup');
      if (popup) {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
        });
      }
    });
  }

  function renderCards() {
    if (filteredStudios.length === 0) {
      document.getElementById('left-card').innerHTML = '<div class="no-match">No studios match filters</div>';
      document.getElementById('right-card').innerHTML = '';
      return;
    }
    
    // Left card (always show)
    const left = filteredStudios[currentIndex];
    document.getElementById('left-card').innerHTML = generateCardHTML(left);
    
    // Right card (only show if there's a second studio)
    if (filteredStudios.length > 1) {
      const rightIndex = (currentIndex + 1) % filteredStudios.length;
      const right = filteredStudios[rightIndex];
      document.getElementById('right-card').innerHTML = generateCardHTML(right);
    } else {
      document.getElementById('right-card').innerHTML = '';
    }

    // Attach click listeners to overflow items in both cards
    attachOverflowClickListener(document.getElementById('left-card'));
    if (filteredStudios.length > 1) {
      attachOverflowClickListener(document.getElementById('right-card'));
    }
  }

  // Filter panel toggling
  document.getElementById('shops-filter').addEventListener('click', (e) => {
    // Close neighborhood panel first
    document.getElementById('neighborhood-panel').style.display = 'none';
    const panel = document.getElementById('shops-panel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    panel.style.top = `${e.clientY + 10}px`;
    panel.style.left = `${e.clientX - 150}px`;
  });

  document.getElementById('neighborhood-filter').addEventListener('click', (e) => {
    // Close shops panel first
    document.getElementById('shops-panel').style.display = 'none';
    const panel = document.getElementById('neighborhood-panel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    panel.style.top = `${e.clientY + 10}px`;
    panel.style.left = `${e.clientX - 150}px`;
  });

  document.getElementById('clear-filters').addEventListener('click', () => {
    selectedShops = [];
    document.querySelectorAll('.shop-option').forEach(option => {
      option.classList.remove('active');
    });
    applyFilters();
  });

  document.getElementById('clear-neighborhoods').addEventListener('click', () => {
    selectedNeighborhoods = [];
    document.querySelectorAll('.neighborhood-option').forEach(option => {
      option.classList.remove('active');
    });
    applyFilters();
  });

  document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 2) % filteredStudios.length;
    renderCards();
  });

  // Close panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-pill') && !e.target.closest('.filter-panel')) {
      document.getElementById('shops-panel').style.display = 'none';
      document.getElementById('neighborhood-panel').style.display = 'none';
    }
  });
});