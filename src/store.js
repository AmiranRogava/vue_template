import {createStore} from "vuex"

const store =  createStore({
    state:{
        prods:[],
        cart: JSON.parse(localStorage.getItem("cart")) || [] 
    },
    mutations:{
        addProd(state,prod){

        },
        updateProds(state,prods){
            state.prods = prods.data
        },
        addToCart(state, prod) {
            state.cart.push(prod);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeItem(state, itemId) {
            state.cart = state.cart.filter(item => item.id !== itemId);
          },
        setCart(state, cartItems) {
            state.cart = cartItems;
        }
    },
    getters:{
        get_products: (state) =>{
            return state.prods
        },
        get_cart: (state) =>{ 
            return state.cart
        }
    },
    actions: {
        initializeCart({ commit }) {
            const cart = JSON.parse(localStorage.getItem("cart"));
            if (cart) {
                commit('setCart', cart);
            }
        }
    }



})


export default store