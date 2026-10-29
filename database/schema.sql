-- Categories Table
CREATE TABLE IF NOT EXISTS products_category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL UNIQUE
);

-- Products Table
CREATE TABLE IF NOT EXISTS products_product (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    brand VARCHAR(100) NULL,
    category_id INTEGER NOT NULL,
    tag VARCHAR(50) NULL,
    price DECIMAL(10, 2) NOT NULL,
    rating DECIMAL(3, 2) NOT NULL DEFAULT 5.0,
    reviews VARCHAR(50) NOT NULL DEFAULT '0',
    image TEXT NULL,
    desc TEXT NULL,
    FOREIGN KEY (category_id) REFERENCES products_category (id) ON DELETE CASCADE
);

-- Product Additional Images Table
CREATE TABLE IF NOT EXISTS products_productimage (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    image TEXT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products_product (id) ON DELETE CASCADE
);

-- Product Key Features Table
CREATE TABLE IF NOT EXISTS products_productfeature (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    feature VARCHAR(250) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products_product (id) ON DELETE CASCADE
);

-- User Profiles Table
CREATE TABLE IF NOT EXISTS accounts_userprofile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL UNIQUE,
    phone VARCHAR(20) NULL,
    address TEXT NULL,
    rewards_points INTEGER NOT NULL DEFAULT 100,
    FOREIGN KEY (user_id) REFERENCES auth_user (id) ON DELETE CASCADE
);

-- Shopping Cart Items Table
CREATE TABLE IF NOT EXISTS cart_cartitem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NULL,
    session_key VARCHAR(40) NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES auth_user (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products_product (id) ON DELETE CASCADE
);

-- Customer Wishlist Items Table
CREATE TABLE IF NOT EXISTS wishlist_wishlistitem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NULL,
    session_key VARCHAR(40) NULL,
    product_id INTEGER NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES auth_user (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products_product (id) ON DELETE CASCADE,
    UNIQUE (user_id, product_id, session_key)
);

-- Customer Orders Table
CREATE TABLE IF NOT EXISTS orders_order (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NULL,
    full_name VARCHAR(200) NOT NULL,
    email VARCHAR(254) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address TEXT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'Pending',
    created_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES auth_user (id) ON DELETE CASCADE
);

-- Customer Order Items Table
CREATE TABLE IF NOT EXISTS orders_orderitem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY (order_id) REFERENCES orders_order (id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products_product (id) ON DELETE SET NULL
);

-- Product Reviews Table
CREATE TABLE IF NOT EXISTS reviews_review (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    rating INTEGER NOT NULL DEFAULT 5,
    comment TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products_product (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES auth_user (id) ON DELETE CASCADE
);

-- Promotional Coupons Table
CREATE TABLE IF NOT EXISTS coupons_coupon (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code VARCHAR(50) NOT NULL UNIQUE,
    discount_amount DECIMAL(6, 2) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT 1,
    valid_until DATETIME NULL
);

-- User Rewards History Table
CREATE TABLE IF NOT EXISTS rewards_reward (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    points INTEGER NOT NULL DEFAULT 0,
    description VARCHAR(200) NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES auth_user (id) ON DELETE CASCADE
);
