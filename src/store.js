import { createStore } from "vuex";

// LocalStorage plugin to persist cart state and recalculate total cost
const localStoragePlugin = (store) => {
    store.subscribe((mutation, state) => {
        // Persist the cart to localStorage on relevant mutations
        if (['addToCart', 'removeItem', 'decrease', 'setCart'].includes(mutation.type)) {
            store.commit('setCost');
      
        }

        if (['addToCart', 'removeItem', 'decrease'].includes(mutation.type)) {
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }

     
    });
};

const store = createStore({
    state: {
        prods: [],          // Array of products
        cart: JSON.parse(localStorage.getItem("cart")) || {}, // Cart data from localStorage
        totalCost: 0        // Total cost of items in the cart
    },
    mutations: {
        // Add a product to the cart
        addProd(state, prod) {
            // Logic for adding a product
        },

        // Update the product list
        updateProds(state, prods) {
            state.prods = prods.data;
        },

        // Add product to the cart
        addToCart(state, prod) {
            if (state.cart[prod.id]) {
                state.cart[prod.id].count += 1;
            } else {
                prod.count = 1;
                state.cart[prod.id] = prod;
            }
        },

        // Decrease the count of an item in the cart
        decrease(state, itemId) {
            if (state.cart[itemId].count > 1) {
                state.cart[itemId].count -= 1;
            } else {
                delete state.cart[itemId];
            }
        },

        // Remove an item from the cart
        removeItem(state, itemId) {
            delete state.cart[itemId];
        },

        // Set the total cost of items in the cart
        setCost(state) {
            const totalCost = Object.values(state.cart).reduce((acc, item) => acc + item.price * item.count, 0);
            state.totalCost = totalCost.toFixed(2); // Fixed to 2 decimal places
        },

        // Set the cart state (used for initializing the cart)
        setCart(state, cartItems) {
            
            state.cart = cartItems;
        }
    },
    getters: {
        // Get the list of products
        get_products: (state) => state.prods,

        // Get the cart items
        get_cart: (state) => state.cart,

        // Get the total cost of items in the cart
        get_cost: (state) => state.totalCost,

        // Get a specific product by ID
        get_product: (state) => (prodId) => {
            return state.prods.find(el => el.id === prodId) || {};
        }
    },
    actions: {
        // Initialize the cart from localStorage
        initializeCart({ commit }) {
            const cart = JSON.parse(localStorage.getItem("cart"));
            if (cart) {
                commit('setCart', cart);
                commit('setCost');
            }
        }
    },
    plugins: [localStoragePlugin] // Register the localStorage plugin
});

export default store;
