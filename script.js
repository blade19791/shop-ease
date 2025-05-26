
        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const backdrop = document.querySelector('.backdrop');
            const mobileMenu = document.querySelector('.mobile-menu');
            
            backdrop.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            if (backdrop.style.display === 'block') {
                backdrop.style.display = 'none';
                document.body.style.overflow = 'auto';
            } else {
                backdrop.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
        
        // Cart Toggle
        function toggleCart() {
            const cartDropdown = document.getElementById('cart-dropdown');
            cartDropdown.classList.toggle('active');
            
            if (cartDropdown.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
        
        // Sample product data
        const products = [
            {
                id: 1,
                title: "Wireless Bluetooth Headphones",
                price: 99.99,
                category: "electronics",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 2,
                title: "Smart Watch with Fitness Tracker",
                price: 149.99,
                category: "electronics",
                rating: 4.2,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 3,
                title: "Diamond Pendant Necklace",
                price: 299.99,
                category: "jewelery",
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 4,
                title: "Men's Casual T-Shirt",
                price: 24.99,
                category: "men",
                rating: 4.0,
                image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 5,
                title: "Women's Summer Dress",
                price: 39.99,
                category: "women",
                rating: 4.3,
                image: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 6,
                title: "Leather Wallet for Men",
                price: 49.99,
                category: "men",
                rating: 4.1,
                image: "https://images.unsplash.com/photo-1600857544200-b2f666a9be2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 7,
                title: "Gold Plated Earrings",
                price: 79.99,
                category: "jewelery",
                rating: 4.6,
                image: "https://images.unsplash.com/photo-1611591437281-460914d225e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 8,
                title: "Wireless Charging Pad",
                price: 29.99,
                category: "electronics",
                rating: 3.9,
                image: "https://images.unsplash.com/photo-1583394838336-d9f1a5a1df93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            }
        ];
        
        // Cart functionality
        let cart = [];
        
        // Display products
        function displayProducts(productsToDisplay = products) {
            const productsContainer = document.getElementById('products-container');
            
            // Clear loading spinner
            productsContainer.innerHTML = '';
            
            if (productsToDisplay.length === 0) {
                productsContainer.innerHTML = '<p class="empty-products">No products found</p>';
                return;
            }
            
            productsToDisplay.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" class="product-img">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <div class="product-rating">
                            ${getStarRating(product.rating)}
                            <span>(${product.rating})</span>
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                `;
                
                productsContainer.appendChild(productCard);
            });
        }
        
        // Get star rating HTML
        function getStarRating(rating) {
            let stars = '';
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 >= 0.5;
            
            for (let i = 1; i <= 5; i++) {
                if (i <= fullStars) {
                    stars += '<i class="fas fa-star"></i>';
                } else if (i === fullStars + 1 && hasHalfStar) {
                    stars += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            
            return stars;
        }
        
        // Add to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            
            // Check if product is already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            updateCart();
            
            // Show notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = ${product.title} added to cart!;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('fade-out');
                setTimeout(() => notification.remove(), 500);
            }, 2000);
        }
        
        // Update cart UI
        function updateCart() {
            const cartCount = document.getElementById('cart-count');
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            
            // Update cart count
            cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
            
            // Update cart items
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            } else {
                cartItems.innerHTML = '';
                
                cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    
                    cartItem.innerHTML = `
                        <div class="cart-item-img">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="cart-item-details">
                            <h4>${item.title}</h4>
                            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                            <div class="cart-item-quantity">
                                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    `;
                    
                    cartItems.appendChild(cartItem);
                });
            }
            
            // Update cart total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = $${total.toFixed(2)};
        }
        
        // Update quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                item.quantity += change;
                
                if (item.quantity <= 0) {
                    cart = cart.filter(item => item.id !== productId);
                }
                
                updateCart();
            }
        }
        
        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }
        
        // Filter products by category
        function filterProducts(category) {
            const productsContainer = document.getElementById('products-container');
            productsContainer.innerHTML = '<div id="loading-spinner" class="loading-spinner"></div>';
            
            setTimeout(() => {
                if (category === 'all') {
                    displayProducts(products);
                } else {
                    const filteredProducts = products.filter(product => product.category === category);
                    displayProducts(filteredProducts);
                }
            }, 500);
        }
        
        // Sort products by price
        function sortProducts(order) {
            const productsContainer = document.getElementById('products-container');
            productsContainer.innerHTML = '<div id="loading-spinner" class="loading-spinner"></div>';
            
            setTimeout(() => {
                const sortedProducts = [...products].sort((a, b) => {
                    return order === 'asc' ? a.price - b.price : b.price - a.price;
                });
                
                displayProducts(sortedProducts);
            }, 500);
        }
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            // Display products with a slight delay to show loading spinner
            setTimeout(() => {
                displayProducts();
            }, 500);
            
            // Add notification styles
            const style = document.createElement('style');
            style.textContent = `
                .notification {
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #4a6bff;
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 5px;
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
                    z-index: 1000;
                    animation: slide-up 0.5s ease;
                }
                
                .notification.fade-out {
                    animation: fade-out 0.5s ease;
                }
                
                @keyframes slide-up {
                    from { bottom: -50px; opacity: 0; }
                    to { bottom: 20px; opacity: 1; }
                }
                
                @keyframes fade-out {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
                
                /* Cart item styles */
                .cart-item {
                    display: flex;
                    gap: 1rem;
                    padding: 1rem 0;
                    border-bottom: 1px solid #eee;
                }
                
                .cart-item-img {
                    width: 80px;
                    height: 80px;
                }
                
                .cart-item-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 5px;
                }
                
                .cart-item-details {
                    flex: 1;
                }
                
                .cart-item-details h4 {
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                }
                
                .cart-item-price {
                    font-weight: 600;
                    color: #4a6bff;
                    margin-bottom: 0.5rem;
                }
                
                .cart-item-quantity {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .cart-item-quantity button {
                    width: 25px;
                    height: 25px;
                    background-color: #f1f1f1;
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .cart-item-quantity button:hover {
                    background-color: #ddd;
                }
                
                .cart-item-remove {
                    color: #ff4d4d;
                    font-size: 1rem;
                    align-self: flex-start;
                }
            `;
            document.head.appendChild(style);
        });