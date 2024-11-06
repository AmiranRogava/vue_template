import { createStore } from "vuex";


const localStoragePlugin = (store) => {
    store.subscribe((mutation, state) => {
        if (
            ['addToCart',"removeItem", 'decrease', 'setCart','setCost'].includes(mutation.type)
        ) {
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    });
};


const store = createStore({
    state: {
        prods: [],
        cart: JSON.parse(localStorage.getItem("cart")) || {},
        totalCost: 0
    },
    mutations: {
        addProd(state, prod) {
            // Your logic for adding a product
        },
        updateProds(state, prods) {
            state.prods = prods.data;
        },
        addToCart(state, prod) {
          
            if (state.cart[prod.id]) {
                state.cart[prod.id].count += 1;
            } else {
                prod.count = 1;
                state.cart[prod.id] = prod;
            }
        },
        decrease(state, itemId) {
            if (state.cart[itemId].count > 1){
                state.cart[itemId].count -= 1
                return
            }
            delete state.cart[itemId];
        },
        removeItem(state, itemId){
            delete state.cart[itemId];
        },
        setCost(state){
            const totalCost = Object.values(state.cart).reduce((acc, item) => {
                return acc + item.price * item.count
            }, 0)

            state.totalCost = totalCost.toFixed(2);
        },
        setCart(state, cartItems) {

            state.cart = cartItems;

        }
    },
    getters: {
        get_products: (state) => {
            return state.prods;
        },
        get_cart: (state) => {
            return state.cart;
        },
        get_cost:(state)=>{
            return state.totalCost;
        },
        get_product:(state) => (prodId) => {
        
            return state.prods.filter(el => el.id == prodId)[0] || {}
        }
    },
    actions: {
        initializeCart({ commit }) {



            const cart = JSON.parse(localStorage.getItem("cart"));
            if (cart) {
                
                
                commit('setCart', cart);
              
            }

            
        }
    },
    plugins: [localStoragePlugin] // Register the plugin here
});




export default store;
