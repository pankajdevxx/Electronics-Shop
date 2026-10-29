// Mani Electronices E-commerce Store Logic

// Product Dataset
let products = [];

// App State
let cart = [];
let activeCategory = "all";
let searchQuery = "";
let wishlist = [];
let currentImageIndex = 0;
let currentPage = 1;
const itemsPerPage = 4;

// DOM Elements
const productGrid = document.getElementById("productGrid");
const recommendationsCarousel = document.getElementById("recommendationsCarousel");
const categoryMainHeader = document.getElementById("categoryMainHeader");
const categorySubItems = document.querySelectorAll(".category-sub-item");
const currentCategoryTitle = document.getElementById("currentCategoryTitle");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const globalCartCount = document.getElementById("globalCartCount");

// Header Search Elements
const searchToggleBtn = document.getElementById("searchToggleBtn");
const headerSearchBar = document.getElementById("headerSearchBar");
const headerSearchInput = document.getElementById("headerSearchInput");
const headerSearchCloseBtn = document.getElementById("headerSearchCloseBtn");
const searchDrawerOverlay = document.getElementById("searchDrawerOverlay");

// Mobile Menu Elements
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");



// Cart DOM
const cartDrawerOverlay = document.getElementById("cartDrawerOverlay");
const cartItemsList = document.getElementById("cartItemsList");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotal = document.getElementById("cartTotal");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

// Wishlist DOM
const wishlistDrawerOverlay = document.getElementById("wishlistDrawerOverlay");
const wishlistItemsList = document.getElementById("wishlistItemsList");
const wishlistToggleBtn = document.getElementById("wishlistToggleBtn");
const closeWishlistBtn = document.getElementById("closeWishlistBtn");
const globalWishlistCount = document.getElementById("globalWishlistCount");

// Modal DOM
const productDetailModal = document.getElementById("productDetailModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalProductImg = document.getElementById("modalProductImg");
const modalProductTag = document.getElementById("modalProductTag");
const modalProductCategory = document.getElementById("modalProductCategory");
const modalProductBrand = document.getElementById("modalProductBrand");
const modalProductTitle = document.getElementById("modalProductTitle");
const modalProductStars = document.getElementById("modalProductStars");
const modalProductReviews = document.getElementById("modalProductReviews");
const modalProductPrice = document.getElementById("modalProductPrice");
const modalProductDesc = document.getElementById("modalProductDesc");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");
const modalBuyNowBtn = document.getElementById("modalBuyNowBtn");
const modalPrevImgBtn = document.getElementById("modalPrevImgBtn");
const modalNextImgBtn = document.getElementById("modalNextImgBtn");
const modalCarouselDots = document.getElementById("modalCarouselDots");
const modalWishlistBtn = document.getElementById("modalWishlistBtn");
const modalProductFeatures = document.getElementById("modalProductFeatures");
let currentOpenProductId = null;

// Carousel navigation
const carouselPrevBtn = document.getElementById("carouselPrevBtn");
const carouselNextBtn = document.getElementById("carouselNextBtn");

// Newsletter Form
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Fetch dynamic products from the Django REST API
  fetch('/api/products/')
    .then(res => res.json())
    .then(data => {
      products = data;



      // Parse URL search query for brand/product search filtering on shop page
      const params = new URLSearchParams(window.location.search);
      const searchParam = params.get("search");
      if (searchParam) {
        searchQuery = searchParam;
        if (searchInput) searchInput.value = searchQuery;
        if (headerSearchInput) headerSearchInput.value = searchQuery;
      }

      initScrollAnimations();
      if (productGrid) renderProductGrid();
      if (recommendationsCarousel) renderRecommendations();
      if (document.getElementById("count-all")) updateCategoryCounts();
      setupEventListeners();
      if (document.getElementById("newArrivalsHeader")) setupSidebarAccordions();
      setupAuthEventListeners();
      updateGlobalWishlistCounter();
      updateGlobalCartCounter();
    })
    .catch(err => {
      console.error("Failed to load products from API:", err);
    });
});

// Calculate and render sidebar category counts
function updateCategoryCounts() {
  const counts = {
    all: products.length,
    home: products.filter(p => p.category === "home").length,
    music: products.filter(p => p.category === "music").length,
    diy: products.filter(p => p.category === "diy").length,
    custom: products.filter(p => p.category === "custom").length
  };

  for (const [cat, count] of Object.entries(counts)) {
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = count;
  }
}

// Render rating stars HTML helper
function getRatingStarsHtml(rating) {
  let starsHtml = "";
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    } else if (i === fullStars && hasHalf) {
      starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }
  }
  return starsHtml;
}

// Render main product grid
function renderProductGrid() {
  if (!productGrid) return;
  // Filter list
  let filtered = products;
  
  // Filter by category
  if (activeCategory !== "all") {
    filtered = filtered.filter(p => p.category === activeCategory);
  }
  
  // Filter by search query
  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.desc.toLowerCase().includes(query) ||
      p.tag.toLowerCase().includes(query)
    );
  }

  // Update clear filters button visibility
  const btnClearFilters = document.getElementById("btnClearFilters");
  if (btnClearFilters) {
    if (activeCategory !== "all" || searchQuery.trim() !== "") {
      btnClearFilters.classList.add("show");
    } else {
      btnClearFilters.classList.remove("show");
    }
  }

  // Calculate total pages
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  if (currentPage < 1) {
    currentPage = 1;
  }

  // Get products for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filtered.slice(startIndex, endIndex);

  // Clear grid
  productGrid.style.opacity = 0;
  
  setTimeout(() => {
    productGrid.innerHTML = "";
    
    if (paginatedProducts.length === 0) {
      productGrid.innerHTML = `
        <div class="cart-empty-state" style="grid-column: 1 / -1; padding: 48px 0;">
          <i class="fa-solid fa-magnifying-glass-minus"></i>
          <p>No products found matching your search filters.</p>
        </div>
      `;
      productGrid.style.opacity = 1;
      renderPagination(totalPages);
      return;
    }
    
    paginatedProducts.forEach((product, index) => {
      const card = document.createElement("div");
      card.className = "product-card reveal-on-scroll reveal-up";
      card.style.transitionDelay = `${(index % 4) * 0.08}s`;
      card.addEventListener("click", () => openDetailModal(product.id));
      
      const isWishlisted = wishlist.includes(product.id);
      
      card.innerHTML = `
        <div class="product-card-inner">
          <div class="product-card-header">
            <span class="product-card-tag">${product.tag}</span>
            <div style="display: flex; gap: 8px;">
              <button class="product-card-wishlist ${isWishlisted ? 'active' : ''}" data-id="${product.id}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Wishlist">
                <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              </button>
            </div>
          </div>
          <div class="product-card-img-wrapper">
            <img src="${product.image}" alt="${product.title}" class="product-card-bg-img">
          </div>
          <div class="product-card-body">
            <div class="product-card-brand">${product.brand || 'GENERIC'}</div>
            <h3 class="product-card-title">${product.title}</h3>
            <div class="product-card-rating">
              <span class="rating-stars">${getRatingStarsHtml(product.rating)}</span>
              <span class="rating-text">
                ${product.rating} (${product.reviews} Reviews)
                ${product.rating >= 4.8 ? `<i class="fa-solid fa-circle-check" style="color: var(--accent-color); font-size: 11px; margin-left: 4px;" title="Top Rated"></i>` : ''}
              </span>
            </div>
            <div class="product-card-price-row">
              <span class="product-card-price">₹${product.price.toFixed(2)}</span>
            </div>
            <div class="product-card-buttons">
              <button class="product-card-btn btn-add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                <span>Add to Cart</span> <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <button class="product-card-btn btn-buy-now" onclick="event.stopPropagation(); buyNow(${product.id})">
                <span>Buy Now</span> <i class="fa-solid fa-bolt"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      productGrid.appendChild(card);
      if (scrollObserver) {
        scrollObserver.observe(card);
      } else {
        card.classList.add('active');
      }
    });
    
    productGrid.style.opacity = 1;
    renderPagination(totalPages);
  }, 150);
}

// Render pagination controls dynamically
function renderPagination(totalPages) {
  const paginationContainer = document.querySelector(".pagination");
  if (!paginationContainer) return;

  paginationContainer.innerHTML = "";
  
  // Create prev button
  const prevBtn = document.createElement("button");
  prevBtn.className = `pagination-btn${currentPage === 1 ? ' disabled' : ''}`;
  prevBtn.id = "prevPageBtn";
  prevBtn.title = "Previous Page";
  prevBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
  if (currentPage > 1) {
    prevBtn.addEventListener("click", () => {
      currentPage--;
      renderProductGrid();
      const header = document.querySelector(".content-header");
      if (header) {
        header.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
  paginationContainer.appendChild(prevBtn);

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      createPageButton(i, paginationContainer);
    }
  } else {
    // Page 1
    createPageButton(1, paginationContainer);

    if (currentPage <= 4) {
      for (let i = 2; i <= 5; i++) {
        createPageButton(i, paginationContainer);
      }
      createEllipsis(paginationContainer);
      createPageButton(totalPages, paginationContainer);
    } else if (currentPage >= totalPages - 3) {
      createEllipsis(paginationContainer);
      for (let i = totalPages - 4; i <= totalPages; i++) {
        createPageButton(i, paginationContainer);
      }
    } else {
      createEllipsis(paginationContainer);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        createPageButton(i, paginationContainer);
      }
      createEllipsis(paginationContainer);
      createPageButton(totalPages, paginationContainer);
    }
  }

  // Create next button
  const nextBtn = document.createElement("button");
  nextBtn.className = `pagination-btn${currentPage === totalPages ? ' disabled' : ''}`;
  nextBtn.id = "nextPageBtn";
  nextBtn.title = "Next Page";
  nextBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
  if (currentPage < totalPages) {
    nextBtn.addEventListener("click", () => {
      currentPage++;
      renderProductGrid();
      const header = document.querySelector(".content-header");
      if (header) {
        header.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
  paginationContainer.appendChild(nextBtn);
}

function createPageButton(pageNumber, container) {
  const btn = document.createElement("button");
  btn.className = `pagination-btn${pageNumber === currentPage ? ' active' : ''}`;
  btn.textContent = pageNumber;
  btn.addEventListener("click", () => {
    if (currentPage !== pageNumber) {
      currentPage = pageNumber;
      renderProductGrid();
      const header = document.querySelector(".content-header");
      if (header) {
        header.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
  container.appendChild(btn);
}

function createEllipsis(container) {
  const span = document.createElement("span");
  span.className = "pagination-ellipsis";
  span.textContent = "...";
  container.appendChild(span);
}

// Render recommendations horizontal carousel
function renderRecommendations() {
  if (!recommendationsCarousel) return;
  // Use a mix of items for recommendations
  const recommendationList = products.slice(0, 12);
  recommendationsCarousel.innerHTML = "";
  
  recommendationList.forEach((product, index) => {
    const item = document.createElement("div");
    item.className = "carousel-item reveal-on-scroll reveal-up";
    item.style.transitionDelay = `${(index) * 0.08}s`;
    
    const card = document.createElement("div");
    card.className = "product-card";
    card.addEventListener("click", () => openDetailModal(product.id));
    
    const isWishlisted = wishlist.includes(product.id);
    
    card.innerHTML = `
      <div class="product-card-inner">
        <div class="product-card-header">
          <span class="product-card-tag">${product.tag}</span>
          <div style="display: flex; gap: 8px;">
            <button class="product-card-wishlist ${isWishlisted ? 'active' : ''}" data-id="${product.id}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Wishlist">
              <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="product-card-img-wrapper">
          <img src="${product.image}" alt="${product.title}" class="product-card-bg-img">
        </div>
        <div class="product-card-body">
          <div class="product-card-brand">${product.brand || 'GENERIC'}</div>
          <h3 class="product-card-title">${product.title}</h3>
          <div class="product-card-rating">
            <span class="rating-stars">${getRatingStarsHtml(product.rating)}</span>
            <span class="rating-text">
              ${product.rating} (${product.reviews} Reviews)
              ${product.rating >= 4.8 ? `<i class="fa-solid fa-circle-check" style="color: var(--accent-color); font-size: 11px; margin-left: 4px;" title="Top Rated"></i>` : ''}
            </span>
          </div>
          <div class="product-card-price-row">
            <span class="product-card-price">₹${product.price.toFixed(2)}</span>
          </div>
          <div class="product-card-buttons">
            <button class="product-card-btn btn-add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
              <span>Add to Cart</span> <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button class="product-card-btn btn-buy-now" onclick="event.stopPropagation(); buyNow(${product.id})">
              <span>Buy Now</span> <i class="fa-solid fa-bolt"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    item.appendChild(card);
    recommendationsCarousel.appendChild(item);
    if (scrollObserver) {
      scrollObserver.observe(item);
    } else {
      item.classList.add('active');
    }
  });
}

// Event Listeners setup
function setupEventListeners() {
  // Sidebar category filter clicks
  // Sidebar category main header click
  if (categoryMainHeader) {
    categoryMainHeader.addEventListener("click", (e) => {
      e.preventDefault();
      
      const target = e.target;
      const isChevron = target.closest(".chevron-icon");
      
      // Animate item
      categoryMainHeader.classList.add("category-click-bounce");
      categoryMainHeader.addEventListener("animationend", () => {
        categoryMainHeader.classList.remove("category-click-bounce");
      }, { once: true });
      
      if (isChevron) {
        categoryMainHeader.classList.toggle("collapsed");
      } else {
        // Toggle collapsed state but also activate filter
        categoryMainHeader.classList.toggle("collapsed");
        categoryMainHeader.classList.add("active");
        categorySubItems.forEach(sub => sub.classList.remove("active"));
        
        activeCategory = "all";
        currentCategoryTitle.textContent = "Give All You Need";
        currentPage = 1;
        renderProductGrid();
      }
    });
  }

  // Sidebar category sub items clicks
  categorySubItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Animate item
      item.classList.add("category-click-bounce");
      item.addEventListener("animationend", () => {
        item.classList.remove("category-click-bounce");
      }, { once: true });
      
      categoryMainHeader.classList.remove("active");
      categorySubItems.forEach(sub => sub.classList.remove("active"));
      item.classList.add("active");
      
      activeCategory = item.getAttribute("data-category");
      
      // Update heading text
      const titleSpan = item.querySelector("span").textContent.trim();
      currentCategoryTitle.textContent = titleSpan;
      
      currentPage = 1;
      renderProductGrid();
    });
  });

  // Header Search bar toggle
  if (searchToggleBtn && searchDrawerOverlay) {
    searchToggleBtn.addEventListener("click", () => {
      searchDrawerOverlay.classList.add("open");
      headerSearchInput.focus();
    });
  }

  if (searchDrawerOverlay) {
    searchDrawerOverlay.addEventListener("click", (e) => {
      if (e.target === searchDrawerOverlay) {
        searchDrawerOverlay.classList.remove("open");
        headerSearchInput.value = "";
        searchQuery = "";
        if (searchInput) searchInput.value = "";
        currentPage = 1;
        if (productGrid) renderProductGrid();
      }
    });
  }

  // Mobile Menu Drawer handlers
  if (mobileMenuToggle && mobileMenuOverlay) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuOverlay.classList.add("open");
    });
  }

  if (closeMobileMenuBtn && mobileMenuOverlay) {
    closeMobileMenuBtn.addEventListener("click", () => {
      mobileMenuOverlay.classList.remove("open");
    });
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", (e) => {
      if (e.target === mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove("open");
      }
    });
  }

  const mobileNavLinksList = document.querySelectorAll(".mobile-nav-item");
  mobileNavLinksList.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenuOverlay.classList.remove("open");
    });
  });


  if (headerSearchCloseBtn && searchDrawerOverlay) {
    headerSearchCloseBtn.addEventListener("click", () => {
      searchDrawerOverlay.classList.remove("open");
      headerSearchInput.value = "";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      currentPage = 1;
      if (productGrid) renderProductGrid();
    });
  }

  // Real-time search inputs syncing & filtering
  if (headerSearchInput) {
    headerSearchInput.addEventListener("input", () => {
      searchQuery = headerSearchInput.value;
      if (searchInput) searchInput.value = searchQuery; // sync values
      currentPage = 1;
      renderProductGrid();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value;
      if (headerSearchInput) headerSearchInput.value = searchQuery; // sync values
      currentPage = 1;
      renderProductGrid();
    });
  }

  // Search button action
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (searchInput) searchQuery = searchInput.value;
      currentPage = 1;
      renderProductGrid();
    });
  }

  // Cart Drawer open/close toggles
  if (cartToggleBtn) cartToggleBtn.addEventListener("click", toggleCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", toggleCartDrawer);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener("click", (e) => {
      if (e.target === cartDrawerOverlay) toggleCartDrawer();
    });
  }

  // Wishlist Drawer open/close toggles
  if (wishlistToggleBtn) wishlistToggleBtn.addEventListener("click", toggleWishlistDrawer);
  if (closeWishlistBtn) closeWishlistBtn.addEventListener("click", toggleWishlistDrawer);
  if (wishlistDrawerOverlay) {
    wishlistDrawerOverlay.addEventListener("click", (e) => {
      if (e.target === wishlistDrawerOverlay) toggleWishlistDrawer();
    });
  }

  // Checkout action
  if (checkoutBtn) checkoutBtn.addEventListener("click", handleCheckout);

  // Modal open/close actions
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeDetailModal);
  if (productDetailModal) {
    productDetailModal.addEventListener("click", (e) => {
      if (e.target === productDetailModal) closeDetailModal();
    });
  }

  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener("click", () => {
      if (currentOpenProductId) {
        addToCart(currentOpenProductId);
      }
    });
  }

  if (modalBuyNowBtn) {
    modalBuyNowBtn.addEventListener("click", () => {
      if (currentOpenProductId) {
        buyNow(currentOpenProductId);
        closeDetailModal();
      }
    });
  }

  // Modal image carousel navigation
  if (modalPrevImgBtn) modalPrevImgBtn.addEventListener("click", () => navigateCarousel(-1));
  if (modalNextImgBtn) modalNextImgBtn.addEventListener("click", () => navigateCarousel(1));

  // Wishlist toggle
  if (modalWishlistBtn) modalWishlistBtn.addEventListener("click", () => toggleWishlist(currentOpenProductId));

  // Recommendations Carousel scroll actions
  if (carouselPrevBtn && recommendationsCarousel) {
    carouselPrevBtn.addEventListener("click", () => {
      recommendationsCarousel.classList.remove("slide-next");
      recommendationsCarousel.classList.add("slide-prev");
      
      const cardWidth = 320 + 24; // Card width + gap
      recommendationsCarousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      
      setTimeout(() => {
        recommendationsCarousel.classList.remove("slide-prev");
      }, 600);
    });
  }

  if (carouselNextBtn && recommendationsCarousel) {
    carouselNextBtn.addEventListener("click", () => {
      recommendationsCarousel.classList.remove("slide-prev");
      recommendationsCarousel.classList.add("slide-next");
      
      const cardWidth = 320 + 24; // Card width + gap
      recommendationsCarousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
      
      setTimeout(() => {
        recommendationsCarousel.classList.remove("slide-next");
      }, 600);
    });
  }

  // Newsletter Submit
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailVal = newsletterEmail.value.trim();
      if (emailVal) {
        showToast(`Thank you! ${emailVal} has been signed up.`, "success");
        newsletterEmail.value = "";
      }
    });
  }

  // Home logo click resets filter
  const logoLink = document.getElementById("logoLink");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      if (productGrid) {
        e.preventDefault();
        resetFilters();
      }
    });
  }

  // Clear filters button click
  const btnClearFilters = document.getElementById("btnClearFilters");
  if (btnClearFilters) {
    btnClearFilters.addEventListener("click", () => {
      // Add a bounce/click animation
      btnClearFilters.classList.add("category-click-bounce");
      btnClearFilters.addEventListener("animationend", () => {
        btnClearFilters.classList.remove("category-click-bounce");
      }, { once: true });
      
      resetFilters();
      showToast("All filters cleared", "info");
    });
  }

  // Sticky header transition on scroll
  const headerEl = document.querySelector("header");
  if (headerEl) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        headerEl.classList.add("scrolled");
      } else {
        headerEl.classList.remove("scrolled");
      }
    });
  }
}

// Reset filters to default state
function resetFilters() {
  activeCategory = "all";
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  if (headerSearchInput) headerSearchInput.value = "";
  if (headerSearchBar) headerSearchBar.classList.remove("open");
  
  if (categoryMainHeader) {
    categoryMainHeader.classList.add("active");
    categoryMainHeader.classList.remove("collapsed");
  }
  if (categorySubItems) {
    categorySubItems.forEach(i => i.classList.remove("active"));
  }
  
  if (currentCategoryTitle) currentCategoryTitle.textContent = "Give All You Need";
  currentPage = 1;
  renderProductGrid();
}

// Setup dropdown accordions in the sidebar
function setupSidebarAccordions() {
  const headers = [
    { id: "newArrivalsHeader", filterClass: "new-arrivals" },
    { id: "bestSellerHeader", filterClass: "best-seller" },
    { id: "discountHeader", filterClass: "discounts" }
  ];

  headers.forEach(h => {
    const el = document.getElementById(h.id);
    if (el) {
      el.addEventListener("click", () => {
        el.classList.toggle("collapsed");
      });
      // Set click handlers for accordion link options
      const dropdown = el.nextElementSibling;
      const links = dropdown.querySelectorAll(".dropdown-item");
      links.forEach(link => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const filterValue = link.getAttribute("data-filter");
          showToast(`Applied filter: ${link.textContent}`, "info");
        });
      });
    }
  });
}

// Toast notification helper
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === "info") {
    icon = '<i class="fa-solid fa-circle-info"></i>';
  } else if (type === "warning") {
    icon = '<i class="fa-solid fa-circle-exclamation"></i>';
  }
  
  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);
  
  // Trigger transition
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);
  
  // Remove toast
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Toggle Cart Drawer
function toggleCartDrawer() {
  cartDrawerOverlay.classList.toggle("open");
  renderCart();
}

// Add Item to Shopping Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  updateGlobalCartCounter();
  showToast(`Added "${product.title}" to cart.`);
}

// Buy Now function - adds to cart and opens drawer
function buyNow(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.product.id === productId);
  if (!existing) {
    cart.push({ product, quantity: 1 });
  }
  
  updateGlobalCartCounter();
  updateCartSubtotals();
  
  // Trigger slide-in drawer
  cartDrawerOverlay.classList.add("open");
  renderCart();
}

// Update Global Cart Count Indicator Badge
function updateGlobalCartCounter() {
  if (!globalCartCount) return;
  const totalQty = cart.reduce((total, item) => total + item.quantity, 0);
  globalCartCount.textContent = totalQty;
  
  // Trigger bounce animation
  globalCartCount.classList.remove("cart-bump");
  void globalCartCount.offsetWidth; // trigger reflow
  globalCartCount.classList.add("cart-bump");
  
  if (totalQty > 0) {
    globalCartCount.style.display = "flex";
  } else {
    globalCartCount.style.display = "none";
  }
}

// Render cart drawer items list
function renderCart() {
  cartItemsList.innerHTML = "";
  
  if (cart.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Your shopping cart is currently empty.</p>
      </div>
    `;
    updateCartSubtotals();
    return;
  }

  cart.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="cart-item-img-wrapper">
        <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-img">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.product.title}</h4>
        <span class="cart-item-price">₹${item.product.price.toFixed(2)}</span>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="adjustQuantity(${item.product.id}, -1)">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="qty-text">${item.quantity}</span>
          <button class="qty-btn" onclick="adjustQuantity(${item.product.id}, 1)">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="removeCartItem(${item.product.id})" title="Remove Item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    cartItemsList.appendChild(itemEl);
  });

  updateCartSubtotals();
}

// Adjust quantity of item in cart
window.adjustQuantity = function(productId, delta) {
  const item = cart.find(item => item.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  
  if (item.quantity <= 0) {
    removeCartItem(productId);
  } else {
    updateGlobalCartCounter();
    renderCart();
  }
};

// Remove item entirely from cart
window.removeCartItem = function(productId) {
  const index = cart.findIndex(item => item.product.id === productId);
  if (index !== -1) {
    const title = cart[index].product.title;
    cart.splice(index, 1);
    updateGlobalCartCounter();
    renderCart();
    showToast(`Removed "${title}" from cart.`, "info");
  }
};

// Calculate and render price subtotals
function updateCartSubtotals() {
  const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
  cartTotal.textContent = `₹${subtotal.toFixed(2)}`;
}

// Handle cart drawer Checkout process
function handleCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty. Please add items to checkout.", "warning");
    return;
  }

  showToast("Order placed successfully! Thank you for shopping at Mani Electronices.", "success");
  
  // Clear cart
  cart = [];
  updateGlobalCartCounter();
  renderCart();
  toggleCartDrawer();
}

// Open Product Detail Modal popup
window.openDetailModal = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentOpenProductId = productId;
  currentImageIndex = 0;
  
  modalProductTag.textContent = product.tag;
  modalProductCategory.textContent = product.category.toUpperCase();
  if (modalProductBrand) {
    modalProductBrand.textContent = (product.brand || "GENERIC").toUpperCase();
  }
  modalProductTitle.textContent = product.title;
  modalProductStars.innerHTML = getRatingStarsHtml(product.rating);
  modalProductReviews.textContent = `${product.rating} (${product.reviews} Reviews)`;
  modalProductPrice.textContent = `₹${product.price.toFixed(2)}`;
  modalProductDesc.textContent = product.desc;
  
  // Render carousel & features
  updateModalCarousel(product);
  renderModalFeatures(product);
  updateWishlistBtnState(productId);
  
  productDetailModal.classList.add("open");
};

// Close Product Detail Modal popup
function closeDetailModal() {
  productDetailModal.classList.remove("open");
  currentOpenProductId = null;
}

// Update carousel images and dots
function updateModalCarousel(product) {
  const images = product.images || [product.image];
  modalProductImg.src = images[currentImageIndex];
  modalProductImg.alt = product.title;
  
  if (images.length <= 1) {
    modalPrevImgBtn.style.display = "none";
    modalNextImgBtn.style.display = "none";
  } else {
    modalPrevImgBtn.style.display = "flex";
    modalNextImgBtn.style.display = "flex";
  }
  
  modalCarouselDots.innerHTML = "";
  images.forEach((img, index) => {
    const dot = document.createElement("button");
    dot.className = `carousel-dot${index === currentImageIndex ? ' active' : ''}`;
    dot.title = `Go to photo ${index + 1}`;
    dot.addEventListener("click", () => {
      if (currentImageIndex !== index) {
        currentImageIndex = index;
        
        // Add image change pop animation
        modalProductImg.classList.add("carousel-image-change");
        modalProductImg.addEventListener("animationend", () => {
          modalProductImg.classList.remove("carousel-image-change");
        }, { once: true });
        
        updateModalCarousel(product);
      }
    });
    modalCarouselDots.appendChild(dot);
  });
}

// Navigate image carousel
function navigateCarousel(direction) {
  if (!currentOpenProductId) return;
  const product = products.find(p => p.id === currentOpenProductId);
  if (!product) return;
  
  const images = product.images || [product.image];
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  
  // Add image change pop animation
  modalProductImg.classList.add("carousel-image-change");
  modalProductImg.addEventListener("animationend", () => {
    modalProductImg.classList.remove("carousel-image-change");
  }, { once: true });
  
  // Add button click bounce animation
  const arrowBtn = direction === 1 ? modalNextImgBtn : modalPrevImgBtn;
  if (arrowBtn) {
    arrowBtn.classList.add("arrow-click-bounce");
    arrowBtn.addEventListener("animationend", () => {
      arrowBtn.classList.remove("arrow-click-bounce");
    }, { once: true });
  }

  updateModalCarousel(product);
}

// Render key features list
function renderModalFeatures(product) {
  modalProductFeatures.innerHTML = "";
  const features = product.features || [
    "Premium build quality",
    "High performance components",
    "1-Year manufacturer warranty",
    "Eco-friendly materials"
  ];
  features.forEach(feature => {
    const li = document.createElement("li");
    li.className = "modal-feature-item";
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${feature}</span>`;
    modalProductFeatures.appendChild(li);
  });
}

// Toggle product in wishlist
function toggleWishlist(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed "${product.title}" from wishlist.`, "info");
  } else {
    wishlist.push(productId);
    showToast(`Added "${product.title}" to wishlist.`, "success");
  }
  updateWishlistBtnState(productId);
  updateWishlistCardButtons();
  updateGlobalWishlistCounter();
  renderWishlist();
}
window.toggleWishlist = toggleWishlist;

// Update wishlist button active/inactive state in modal
function updateWishlistBtnState(productId) {
  if (!modalWishlistBtn) return;
  const isWishlisted = wishlist.includes(productId);
  const icon = modalWishlistBtn.querySelector("i");
  if (icon) {
    if (isWishlisted) {
      modalWishlistBtn.classList.add("active");
      icon.className = "fa-solid fa-heart";
    } else {
      modalWishlistBtn.classList.remove("active");
      icon.className = "fa-regular fa-heart";
    }
  }
}

// Update all wishlist buttons active/inactive state on active cards
function updateWishlistCardButtons() {
  const cardButtons = document.querySelectorAll(".product-card-wishlist");
  cardButtons.forEach(btn => {
    const productId = parseInt(btn.getAttribute("data-id"));
    const icon = btn.querySelector("i");
    if (icon) {
      if (wishlist.includes(productId)) {
        btn.classList.add("active");
        icon.className = "fa-solid fa-heart";
      } else {
        btn.classList.remove("active");
        icon.className = "fa-regular fa-heart";
      }
    }
  });
}

// Toggle Wishlist Drawer
function toggleWishlistDrawer() {
  if (wishlistDrawerOverlay) {
    wishlistDrawerOverlay.classList.toggle("open");
    renderWishlist();
  }
}

// Update Global Wishlist Count Indicator Badge
function updateGlobalWishlistCounter() {
  if (!globalWishlistCount) return;
  const count = wishlist.length;
  globalWishlistCount.textContent = count;
  
  // Trigger bounce animation
  globalWishlistCount.classList.remove("wishlist-bump");
  void globalWishlistCount.offsetWidth; // trigger reflow
  globalWishlistCount.classList.add("wishlist-bump");
  
  if (count > 0) {
    globalWishlistCount.style.display = "flex";
  } else {
    globalWishlistCount.style.display = "none";
  }
}

// Render wishlist drawer items list
function renderWishlist() {
  if (!wishlistItemsList) return;
  wishlistItemsList.innerHTML = "";
  
  if (wishlist.length === 0) {
    wishlistItemsList.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-heart-crack" style="font-size: 48px; color: var(--text-light); margin-bottom: 16px;"></i>
        <p>Your wishlist is currently empty.</p>
      </div>
    `;
    return;
  }

  wishlist.forEach(id => {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="cart-item-img-wrapper">
        <img src="${product.image}" alt="${product.title}" class="cart-item-img">
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${product.title}</h4>
        <span class="cart-item-price">₹${product.price.toFixed(2)}</span>
        <div>
          <button class="wishlist-add-to-cart-btn" onclick="addToCartFromWishlist(${product.id})">
            <i class="fa-solid fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
      <button class="btn-remove-item" onclick="toggleWishlist(${product.id})" title="Remove Item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    wishlistItemsList.appendChild(itemEl);
  });
}

// Add item to cart from wishlist and show toast
window.addToCartFromWishlist = function(productId) {
  addToCart(productId);
  renderWishlist();
};

// Auth Modal Logic
const authModal = document.getElementById("authModal");
const authSlider = document.getElementById("authSlider");
const profileBtn = document.getElementById("profileBtn");
const closeAuthModalBtn = document.getElementById("closeAuthModalBtn");
const toSignUpLink = document.getElementById("toSignUpLink");
const toSignInLink = document.getElementById("toSignInLink");

const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");

// Registration Success Modal elements
const regSuccessModal = document.getElementById("regSuccessModal");
const closeRegSuccessBtn = document.getElementById("closeRegSuccessBtn");
const regSuccessActionBtn = document.getElementById("regSuccessActionBtn");

// Social Login buttons
const googleLoginBtn = document.getElementById("googleLoginBtn");
const appleLoginBtn = document.getElementById("appleLoginBtn");
const googleRegisterBtn = document.getElementById("googleRegisterBtn");
const appleRegisterBtn = document.getElementById("appleRegisterBtn");

// Set up Auth event listeners
function setupAuthEventListeners() {
  if (profileBtn) {
    profileBtn.addEventListener("click", () => {
      authModal.classList.add("open");
    });
  }

  if (closeAuthModalBtn) {
    closeAuthModalBtn.addEventListener("click", () => {
      authModal.classList.remove("open");
    });
  }

  // Click outside to close Auth Modal
  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) {
        authModal.classList.remove("open");
      }
    });
  }

  // Slide to Register form
  if (toSignUpLink) {
    toSignUpLink.addEventListener("click", () => {
      authSlider.style.transform = "translateX(-50%)";
    });
  }

  // Slide back to Login form
  if (toSignInLink) {
    toSignInLink.addEventListener("click", () => {
      authSlider.style.transform = "translateX(0)";
    });
  }

  // Sign In Form submission
  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signInEmail").value;
      showToast(`Welcome back, ${email}! Logged in successfully.`, "success");
      signInForm.reset();
      authModal.classList.remove("open");
    });
  }

  // Sign Up Form submission
  if (signUpForm) {
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signUpName").value;
      
      // Close login modal and open registration success screen
      if (authModal) authModal.classList.remove("open");
      if (regSuccessModal) regSuccessModal.classList.add("open");
      
      signUpForm.reset();
      // Smoothly switch slider back to login side in the background
      authSlider.style.transform = "translateX(0)";
    });
  }

  // Close Registration Success Modal
  if (closeRegSuccessBtn) {
    closeRegSuccessBtn.addEventListener("click", () => {
      if (regSuccessModal) regSuccessModal.classList.remove("open");
    });
  }

  // Action button in Success Modal: Close success, reopen Login Modal
  if (regSuccessActionBtn) {
    regSuccessActionBtn.addEventListener("click", () => {
      if (regSuccessModal) regSuccessModal.classList.remove("open");
      if (authModal) authModal.classList.add("open");
    });
  }

  // Click outside to close Registration Success Modal
  if (regSuccessModal) {
    regSuccessModal.addEventListener("click", (e) => {
      if (e.target === regSuccessModal) {
        regSuccessModal.classList.remove("open");
      }
    });
  }

  // Social log click events
  const socialActions = [
    { el: googleLoginBtn, msg: "Connecting with Google..." },
    { el: appleLoginBtn, msg: "Connecting with Apple..." },
    { el: googleRegisterBtn, msg: "Registering with Google..." },
    { el: appleRegisterBtn, msg: "Registering with Apple..." }
  ];

  socialActions.forEach(action => {
    if (action.el) {
      action.el.addEventListener("click", () => {
        showToast(action.msg, "info");
      });
    }
  });

  // Forgot password
  if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = document.getElementById("signInEmail").value.trim();
      if (email) {
        showToast(`Password reset link sent to: ${email}`, "success");
      } else {
        showToast("Please enter your email to request a reset link.", "warning");
      }
    });
  }
}

// ==========================================================================
// SCROLL REVEAL ANIMATIONS (IntersectionObserver-based, GPU composited)
// ==========================================================================
let scrollObserver = null;

function initScrollAnimations() {
  // If IntersectionObserver is not supported, immediately activate all elements
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('active'));
    return;
  }

  const observerOptions = {
    root: null, // viewport
    rootMargin: '0px 0px -80px 0px', // trigger slightly before entering the full viewport
    threshold: 0.1 // 10% visibility triggers it
  };

  scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve to keep DOM lightweight and prevent repeat transitions
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe static reveal elements
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    scrollObserver.observe(el);
  });
}
