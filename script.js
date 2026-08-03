/* =====================================================
   SNACKPASS
   PROFESSIONAL SNACK ORDERING APPLICATION
   ===================================================== */


/* =====================================================
   MENU DATA
   ===================================================== */

const menuItems = [

    /* ---------- FRIED SNACKS ---------- */

    {
        id: 1,
        name: "Samosa",
        category: "Fried Snacks",
        price: 20,
        icon: "🥟",
        description: "Crispy pastry with spicy potato filling.",
        tag: "Popular"
    },

    {
        id: 2,
        name: "Medu Vada",
        category: "Fried Snacks",
        price: 25,
        icon: "🍩",
        description: "Crispy South Indian lentil fritter.",
        tag: "Classic"
    },

    {
        id: 3,
        name: "Onion Pakoda",
        category: "Fried Snacks",
        price: 30,
        icon: "🧅",
        description: "Crunchy onion fritters with spices.",
        tag: "Hot"
    },

    {
        id: 4,
        name: "Bread Bajji",
        category: "Fried Snacks",
        price: 25,
        icon: "🍞",
        description: "Golden bread slices dipped in batter.",
        tag: ""
    },

    {
        id: 5,
        name: "Bonda",
        category: "Fried Snacks",
        price: 25,
        icon: "🥔",
        description: "Soft potato balls with crispy coating.",
        tag: ""
    },

    {
        id: 6,
        name: "Mirchi Bajji",
        category: "Fried Snacks",
        price: 30,
        icon: "🌶️",
        description: "Spicy green chilli stuffed and fried.",
        tag: "Spicy"
    },

    {
        id: 7,
        name: "Aloo Tikki",
        category: "Fried Snacks",
        price: 35,
        icon: "🥔",
        description: "Crispy potato patty with Indian spices.",
        tag: ""
    },


    /* ---------- BAKERY ---------- */

    {
        id: 8,
        name: "Veg Puff",
        category: "Bakery",
        price: 30,
        icon: "🥐",
        description: "Flaky pastry filled with vegetables.",
        tag: "Popular"
    },

    {
        id: 9,
        name: "Paneer Puff",
        category: "Bakery",
        price: 45,
        icon: "🥐",
        description: "Flaky puff filled with spicy paneer.",
        tag: ""
    },

    {
        id: 10,
        name: "Veg Roll",
        category: "Bakery",
        price: 35,
        icon: "🌯",
        description: "Soft roll packed with seasoned vegetables.",
        tag: ""
    },

    {
        id: 11,
        name: "Chocolate Muffin",
        category: "Bakery",
        price: 45,
        icon: "🧁",
        description: "Soft chocolate muffin with rich flavour.",
        tag: "Sweet"
    },

    {
        id: 12,
        name: "Butter Bun",
        category: "Bakery",
        price: 25,
        icon: "🍞",
        description: "Fresh soft bun with creamy butter.",
        tag: ""
    },

    {
        id: 13,
        name: "Chocolate Croissant",
        category: "Bakery",
        price: 55,
        icon: "🥐",
        description: "Flaky croissant with chocolate filling.",
        tag: "Premium"
    },


    /* ---------- SANDWICHES ---------- */

    {
        id: 14,
        name: "Veg Sandwich",
        category: "Sandwiches",
        price: 50,
        icon: "🥪",
        description: "Fresh vegetables with creamy spread.",
        tag: "Popular"
    },

    {
        id: 15,
        name: "Cheese Sandwich",
        category: "Sandwiches",
        price: 60,
        icon: "🥪",
        description: "Toasted sandwich loaded with cheese.",
        tag: ""
    },

    {
        id: 16,
        name: "Grilled Sandwich",
        category: "Sandwiches",
        price: 70,
        icon: "🥪",
        description: "Golden grilled sandwich with vegetables.",
        tag: "Popular"
    },

    {
        id: 17,
        name: "Paneer Sandwich",
        category: "Sandwiches",
        price: 75,
        icon: "🥪",
        description: "Grilled sandwich with spicy paneer.",
        tag: ""
    },

    {
        id: 18,
        name: "Corn Cheese Sandwich",
        category: "Sandwiches",
        price: 70,
        icon: "🌽",
        description: "Sweet corn and melted cheese.",
        tag: ""
    },


    /* ---------- FAST FOOD ---------- */

    {
        id: 19,
        name: "French Fries",
        category: "Fast Food",
        price: 50,
        icon: "🍟",
        description: "Golden crispy fries with seasoning.",
        tag: "Popular"
    },

    {
        id: 20,
        name: "Peri Peri Fries",
        category: "Fast Food",
        price: 65,
        icon: "🍟",
        description: "Crispy fries coated with peri peri.",
        tag: "Spicy"
    },

    {
        id: 21,
        name: "Veg Momos",
        category: "Fast Food",
        price: 60,
        icon: "🥟",
        description: "Steamed dumplings with vegetable filling.",
        tag: "Popular"
    },

    {
        id: 22,
        name: "Fried Momos",
        category: "Fast Food",
        price: 70,
        icon: "🥟",
        description: "Crispy fried dumplings with spicy dip.",
        tag: ""
    },

    {
        id: 23,
        name: "Spring Roll",
        category: "Fast Food",
        price: 55,
        icon: "🌯",
        description: "Crispy roll packed with vegetables.",
        tag: ""
    },

    {
        id: 24,
        name: "Cheese Balls",
        category: "Fast Food",
        price: 65,
        icon: "🧀",
        description: "Crispy bites with gooey cheese.",
        tag: ""
    },

    {
        id: 25,
        name: "Nachos",
        category: "Fast Food",
        price: 60,
        icon: "🌮",
        description: "Crunchy nachos with cheesy dip.",
        tag: ""
    },


    /* ---------- HEALTHY ---------- */

    {
        id: 26,
        name: "Fruit Bowl",
        category: "Healthy",
        price: 55,
        icon: "🍓",
        description: "Fresh seasonal fruits in a bowl.",
        tag: "Healthy"
    },

    {
        id: 27,
        name: "Sweet Corn",
        category: "Healthy",
        price: 40,
        icon: "🌽",
        description: "Steamed corn with butter and seasoning.",
        tag: "Healthy"
    },

    {
        id: 28,
        name: "Peanut Chaat",
        category: "Healthy",
        price: 40,
        icon: "🥜",
        description: "Protein-rich peanuts with fresh vegetables.",
        tag: "Healthy"
    },

    {
        id: 29,
        name: "Sprouts Chaat",
        category: "Healthy",
        price: 45,
        icon: "🥗",
        description: "Fresh sprouts with vegetables and spices.",
        tag: "Healthy"
    },

    {
        id: 30,
        name: "Corn Salad",
        category: "Healthy",
        price: 50,
        icon: "🥗",
        description: "Fresh corn, vegetables and herbs.",
        tag: ""
    },


    /* ---------- SWEETS ---------- */

    {
        id: 31,
        name: "Gulab Jamun",
        category: "Sweets",
        price: 35,
        icon: "🍮",
        description: "Soft sweet dumplings soaked in syrup.",
        tag: "Sweet"
    },

    {
        id: 32,
        name: "Brownie",
        category: "Sweets",
        price: 55,
        icon: "🍫",
        description: "Rich chocolate brownie.",
        tag: "Popular"
    },

    {
        id: 33,
        name: "Donut",
        category: "Sweets",
        price: 45,
        icon: "🍩",
        description: "Soft glazed donut.",
        tag: ""
    },

    {
        id: 34,
        name: "Laddu",
        category: "Sweets",
        price: 25,
        icon: "🟠",
        description: "Traditional Indian sweet.",
        tag: ""
    },

    {
        id: 35,
        name: "Chocolate Cake",
        category: "Sweets",
        price: 65,
        icon: "🍰",
        description: "Soft chocolate cake slice.",
        tag: "Popular"
    },


    /* ---------- BEVERAGES ---------- */

    {
        id: 36,
        name: "Filter Coffee",
        category: "Beverages",
        price: 25,
        icon: "☕",
        description: "Authentic South Indian filter coffee.",
        tag: "Classic"
    },

    {
        id: 37,
        name: "Masala Tea",
        category: "Beverages",
        price: 20,
        icon: "🍵",
        description: "Hot tea infused with Indian spices.",
        tag: "Classic"
    },

    {
        id: 38,
        name: "Cold Coffee",
        category: "Beverages",
        price: 55,
        icon: "🥤",
        description: "Chilled creamy coffee.",
        tag: "Popular"
    },

    {
        id: 39,
        name: "Fresh Lemonade",
        category: "Beverages",
        price: 30,
        icon: "🍋",
        description: "Refreshing chilled lemon drink.",
        tag: ""
    },

    {
        id: 40,
        name: "Chocolate Milkshake",
        category: "Beverages",
        price: 70,
        icon: "🥛",
        description: "Thick chocolate milkshake.",
        tag: "Premium"
    },

    {
        id: 41,
        name: "Mango Shake",
        category: "Beverages",
        price: 65,
        icon: "🥭",
        description: "Creamy shake made with mango.",
        tag: "Seasonal"
    },

    {
        id: 42,
        name: "Iced Tea",
        category: "Beverages",
        price: 45,
        icon: "🧋",
        description: "Refreshing chilled iced tea.",
        tag: ""
    }

];


/* =====================================================
   APPLICATION STATE
   ===================================================== */

const state = {

    cart: new Map(),

    category: "All",

    search: ""

};


/* =====================================================
   DOM ELEMENTS
   ===================================================== */

const menuGrid =
    document.getElementById("menuGrid");

const categories =
    document.getElementById("categories");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const menuTitle =
    document.getElementById("menuTitle");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");

const cartItems =
    document.getElementById("cartItems");

const cartItemCount =
    document.getElementById("cartItemCount");

const subtotalElement =
    document.getElementById("subtotal");

const serviceFeeElement =
    document.getElementById("serviceFee");

const totalElement =
    document.getElementById("total");

const checkoutButton =
    document.getElementById("checkoutButton");

const mobileCartCount =
    document.getElementById("mobileCartCount");

const mobileBarItems =
    document.getElementById("mobileBarItems");

const mobileBarTotal =
    document.getElementById("mobileBarTotal");

const mobileCartBar =
    document.getElementById("mobileCartBar");

const mobileCartButton =
    document.getElementById("mobileCartButton");

const checkoutModal =
    document.getElementById("checkoutModal");

const closeCheckout =
    document.getElementById("closeCheckout");

const checkoutItems =
    document.getElementById("checkoutItems");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const studentName =
    document.getElementById("studentName");

const placeOrderButton =
    document.getElementById("placeOrderButton");

const successModal =
    document.getElementById("successModal");

const orderToken =
    document.getElementById("orderToken");

const customerName =
    document.getElementById("customerName");

const successAmount =
    document.getElementById("successAmount");

const newOrderButton =
    document.getElementById("newOrderButton");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");

const toastIcon =
    document.getElementById("toastIcon");

const resetSearch =
    document.getElementById("resetSearch");


/* =====================================================
   UTILITY
   ===================================================== */

function formatPrice(amount) {

    return `₹${amount}`;

}


/* =====================================================
   FILTER MENU
   ===================================================== */

function getFilteredItems() {

    const search =
        state.search.trim().toLowerCase();


    return menuItems.filter(item => {

        const categoryMatch =
            state.category === "All" ||
            item.category === state.category;


        const searchMatch =
            !search ||
            item.name.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search);


        return categoryMatch && searchMatch;

    });

}


/* =====================================================
   DISPLAY MENU
   ===================================================== */

function renderMenu() {

    const filteredItems =
        getFilteredItems();


    menuGrid.innerHTML = "";


    resultCount.textContent =
        `${filteredItems.length} ${
            filteredItems.length === 1
                ? "item"
                : "items"
        }`;


    menuTitle.textContent =
        state.search

            ? `Results for "${state.search}"`

            : state.category === "All"

                ? "All Snacks"

                : state.category;


    if (filteredItems.length === 0) {

        noResults.classList.add("show");

        return;

    }


    noResults.classList.remove("show");


    filteredItems.forEach(
        (item, index) => {

            const quantity =
                state.cart.get(item.id) || 0;


            const card =
                document.createElement("article");

            card.className =
                "food-card";


            card.style.animationDelay =
                `${index * 0.025}s`;


            card.innerHTML = `

                <div class="food-image">

                    ${
                        item.tag
                            ? `
                                <span class="food-tag">
                                    ${item.tag}
                                </span>
                              `
                            : ""
                    }

                    <span>
                        ${item.icon}
                    </span>

                </div>


                <div class="food-info">

                    <span class="food-category">
                        ${item.category}
                    </span>


                    <h3 class="food-name">
                        ${item.name}
                    </h3>


                    <p class="food-description">
                        ${item.description}
                    </p>


                    <div class="food-bottom">

                        <span class="food-price">
                            ${formatPrice(item.price)}
                        </span>


                        ${
                            quantity === 0

                            ? `

                                <button
                                    class="food-action"
                                    data-action="add"
                                    data-id="${item.id}"
                                    aria-label="Add ${item.name}"
                                >
                                    +
                                </button>

                              `

                            : `

                                <button
                                    class="food-action in-cart"
                                    data-action="minus"
                                    data-id="${item.id}"
                                    aria-label="Decrease ${item.name}"
                                >

                                    −

                                    <span class="quantity">
                                        ${quantity}
                                    </span>

                                    +

                                </button>

                              `
                        }

                    </div>

                </div>

            `;


            menuGrid.appendChild(card);

        }
    );

}


/* =====================================================
   ADD ITEM
   ===================================================== */

function addItem(id) {

    const current =
        state.cart.get(id) || 0;


    state.cart.set(
        id,
        current + 1
    );


    renderAll();


    const item =
        menuItems.find(
            product => product.id === id
        );


    showToast(
        `${item.name} added to basket`,
        "✓"
    );

}


/* =====================================================
   REMOVE ONE
   ===================================================== */

function removeItem(id) {

    const current =
        state.cart.get(id) || 0;


    if (current <= 1) {

        state.cart.delete(id);

    }

    else {

        state.cart.set(
            id,
            current - 1
        );

    }


    renderAll();

}


/* =====================================================
   REMOVE ENTIRE ITEM
   ===================================================== */

function removeEntireItem(id) {

    const item =
        menuItems.find(
            product => product.id === id
        );


    state.cart.delete(id);


    renderAll();


    showToast(
        `${item.name} removed`,
        "×"
    );

}


/* =====================================================
   CART TOTALS
   ===================================================== */

function getCartTotals() {

    let subtotal = 0;

    let quantity = 0;


    state.cart.forEach(
        (count, id) => {

            const item =
                menuItems.find(
                    product => product.id === id
                );


            if (!item) return;


            subtotal +=
                item.price * count;


            quantity += count;

        }
    );


    const serviceFee =
        subtotal > 0 ? 5 : 0;


    const total =
        subtotal + serviceFee;


    return {

        subtotal,

        serviceFee,

        total,

        quantity

    };

}


/* =====================================================
   RENDER CART
   ===================================================== */

function renderCart() {

    const {
        subtotal,
        serviceFee,
        total,
        quantity
    } = getCartTotals();


    cartItemCount.textContent =
        `${quantity} ${
            quantity === 1
                ? "item"
                : "items"
        }`;


    subtotalElement.textContent =
        formatPrice(subtotal);


    serviceFeeElement.textContent =
        formatPrice(serviceFee);


    totalElement.textContent =
        formatPrice(total);


    checkoutButton.disabled =
        quantity === 0;


    mobileCartCount.textContent =
        quantity;


    mobileBarItems.textContent =
        `${quantity} ${
            quantity === 1
                ? "item"
                : "items"
        }`;


    mobileBarTotal.textContent =
        formatPrice(total);


    if (state.cart.size === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h4>
                    Your basket is empty
                </h4>

                <p>
                    Add some snacks and
                    they'll appear here.
                </p>

            </div>

        `;

        return;

    }


    cartItems.innerHTML = "";


    state.cart.forEach(
        (count, id) => {

            const item =
                menuItems.find(
                    product => product.id === id
                );


            if (!item) return;


            const cartItem =
                document.createElement("div");


            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <div class="cart-item-icon">
                    ${item.icon}
                </div>


                <div>

                    <div class="cart-item-name">
                        ${item.name}
                    </div>

                    <div class="cart-item-price">
                        ${formatPrice(item.price)}
                        × ${count}
                    </div>


                    <button
                        class="remove-item"
                        data-action="remove-all"
                        data-id="${item.id}"
                    >
                        Remove
                    </button>

                </div>


                <div class="quantity-control">

                    <button
                        data-action="minus"
                        data-id="${item.id}"
                    >
                        −
                    </button>


                    <span class="quantity-number">
                        ${count}
                    </span>


                    <button
                        data-action="plus"
                        data-id="${item.id}"
                    >
                        +
                    </button>

                </div>

            `;


            cartItems.appendChild(cartItem);

        }
    );

}


/* =====================================================
   RENDER ALL
   ===================================================== */

function renderAll() {

    renderMenu();

    renderCart();

}


/* =====================================================
   MENU CLICK HANDLER
   ===================================================== */

menuGrid.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-action]"
            );


        if (!button) return;


        const id =
            Number(button.dataset.id);


        const action =
            button.dataset.action;


        if (action === "add") {

            addItem(id);

        }


        else if (action === "minus") {

            removeItem(id);

        }

    }
);


/* =====================================================
   CART CLICK HANDLER
   ===================================================== */

cartItems.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-action]"
            );


        if (!button) return;


        const id =
            Number(button.dataset.id);


        const action =
            button.dataset.action;


        if (action === "plus") {

            addItem(id);

        }


        else if (action === "minus") {

            removeItem(id);

        }


        else if (action === "remove-all") {

            removeEntireItem(id);

        }

    }
);


/* =====================================================
   CATEGORY FILTER
   ===================================================== */

categories.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".category-btn"
            );


        if (!button) return;


        document
            .querySelectorAll(".category-btn")
            .forEach(btn => {

                btn.classList.remove("active");

            });


        button.classList.add("active");


        state.category =
            button.dataset.category;


        renderMenu();

    }
);


/* =====================================================
   SEARCH
   ===================================================== */

searchInput.addEventListener(
    "input",
    event => {

        state.search =
            event.target.value;


        clearSearch.classList.toggle(
            "show",
            state.search.length > 0
        );


        renderMenu();

    }
);


/* =====================================================
   CLEAR SEARCH
   ===================================================== */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        state.search = "";

        clearSearch.classList.remove(
            "show"
        );

        renderMenu();

        searchInput.focus();

    }
);


/* =====================================================
   RESET SEARCH
   ===================================================== */

resetSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        state.search = "";

        state.category = "All";


        document
            .querySelectorAll(".category-btn")
            .forEach(button => {

                button.classList.remove(
                    "active"
                );

            });


        document
            .querySelector(
                '[data-category="All"]'
            )
            .classList.add("active");


        clearSearch.classList.remove(
            "show"
        );


        renderMenu();

    }
);


/* =====================================================
   CHECKOUT
   ===================================================== */

checkoutButton.addEventListener(
    "click",
    openCheckout
);


mobileCartBar.addEventListener(
    "click",
    openCheckout
);


mobileCartButton.addEventListener(
    "click",
    openCheckout
);


function openCheckout() {

    const {
        total
    } = getCartTotals();


    if (state.cart.size === 0) {

        return;

    }


    renderCheckoutItems();


    checkoutTotal.textContent =
        formatPrice(total);


    checkoutModal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";


    setTimeout(
        () => studentName.focus(),
        150
    );

}


/* =====================================================
   CHECKOUT ITEMS
   ===================================================== */

function renderCheckoutItems() {

    checkoutItems.innerHTML = "";


    state.cart.forEach(
        (count, id) => {

            const item =
                menuItems.find(
                    product => product.id === id
                );


            if (!item) return;


            const row =
                document.createElement("div");


            row.className =
                "checkout-item";


            row.innerHTML = `

                <div class="checkout-item-left">

                    <span class="checkout-item-icon">
                        ${item.icon}
                    </span>

                    <div>

                        <div class="checkout-item-name">
                            ${item.name}
                        </div>

                        <div class="checkout-item-qty">
                            Quantity: ${count}
                        </div>

                    </div>

                </div>


                <span class="checkout-item-price">

                    ${formatPrice(
                        item.price * count
                    )}

                </span>

            `;


            checkoutItems.appendChild(row);

        }
    );

}


/* =====================================================
   CLOSE CHECKOUT
   ===================================================== */

function closeCheckoutModal() {

    checkoutModal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


closeCheckout.addEventListener(
    "click",
    closeCheckoutModal
);


checkoutModal
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeCheckoutModal
    );


/* =====================================================
   ESCAPE KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            checkoutModal.classList.contains("show")
        ) {

            closeCheckoutModal();

        }

    }
);


/* =====================================================
   GENERATE ORDER TOKEN
   ===================================================== */

function generateOrderToken() {

    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";


    let token = "";


    for (
        let i = 0;
        i < 5;
        i++
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                characters.length
            );


        token +=
            characters[randomIndex];

    }


    return `SP-${token}`;

}


/* =====================================================
   PLACE ORDER
   ===================================================== */

placeOrderButton.addEventListener(
    "click",
    () => {

        const name =
            studentName.value.trim();


        if (!name) {

            studentName.focus();

            showToast(
                "Please enter your name",
                "!"
            );

            return;

        }


        if (state.cart.size === 0) {

            return;

        }


        const {
            total
        } = getCartTotals();


        const token =
            generateOrderToken();


        orderToken.textContent =
            token;


        customerName.textContent =
            name;


        successAmount.textContent =
            formatPrice(total);


        closeCheckoutModal();


        successModal.classList.add(
            "show"
        );


        document.body.style.overflow =
            "hidden";

    }
);


/* =====================================================
   NEW ORDER
   ===================================================== */

newOrderButton.addEventListener(
    "click",
    () => {

        state.cart.clear();


        studentName.value = "";


        successModal.classList.remove(
            "show"
        );


        document.body.style.overflow =
            "";


        renderAll();


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


        showToast(
            "Ready for your next snack!",
            "🍿"
        );

    }
);


/* =====================================================
   TOAST
   ===================================================== */

let toastTimer;


function showToast(
    message,
    icon = "✓"
) {

    toastMessage.textContent =
        message;


    toastIcon.textContent =
        icon;


    toast.classList.add(
        "show"
    );


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}


/* =====================================================
   CATEGORY AUTO SCROLL
   ===================================================== */

const categoryLeft =
    document.getElementById(
        "categoryLeft"
    );

const categoryRight =
    document.getElementById(
        "categoryRight"
    );


categoryLeft.addEventListener(
    "click",
    () => {

        categories.scrollBy({

            left: -200,

            behavior: "smooth"

        });

    }
);


categoryRight.addEventListener(
    "click",
    () => {

        categories.scrollBy({

            left: 200,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   KEYBOARD SHORTCUT
   ===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT"
        ) {

            event.preventDefault();

            searchInput.focus();

        }

    }
);


/* =====================================================
   INITIAL APPLICATION LOAD
   ===================================================== */

renderAll();