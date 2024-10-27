import {createStore} from "vuex"

const store =  createStore({
    state:{
        prods:[]
    },
    mutations:{
        addProd(state,prod){

        },
        updateProds(state,prods){
            state.prods = prods.data
        }
    },
    getters:{
        get_products: (state) =>{
            return state.prods
        }

    }



})


export default store