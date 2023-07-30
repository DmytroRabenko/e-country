import { createSlice } from "@reduxjs/toolkit";//, current

const storeSlice = createSlice({
    name: 'products',
    initialState: { 
                    basket: [],
                    selected: [],
                    compared: [],
                    loginOpen: false,
                    basketOpen: false,
                    formOpen: false,
                    mobNavigation: false,
                    mobHeader: false,
                    basketTotalPrice: '',  
                    currentPage: {},
    },
    reducers:{
        loginVisible(state, action){
            state.loginOpen = !state.loginOpen;
            document.body.style.overflow = "";
        },
        basketVisible(state, action){
            state.basketOpen = !state.basketOpen;
            document.body.style.overflow = "";
        },
        formVisible(state, action){
            state.formOpen = !state.formOpen;
            document.body.style.overflow = "";
        },
        mobNavigationVisible(state, action){
            state.mobNavigation = !state.mobNavigation;
            document.body.style.overflow = "";
        },
        mobHeaderVisible(state, action){
            state.mobHeader = !state.mobHeader;
            document.body.style.overflow = "";
        },
        addToBasket(state, action){//basket

            if(action.payload){//встановлення властивості quantity, якщо вона не встановлена
                if(!action.payload.quantity){
                    action.payload.quantity = 1;
                }
                for (let x of state.basket){//збільшення quantity, при наступному натиску кнопки
                    if(action.payload.id === x.product.id){
                        x.product.quantity++;
                    }
                }
                if(!state.basket.some(x => x.product.id === action.payload.id)){
                    state.basket.push({product: action.payload})
                }
            }      
        },
        removeFromBasket(state, action){
            state.basket = state.basket.filter(el => el.product.id !== action.payload.id)
        },
        clearBasket(state, action){
            state.basket = [];
        },
        plusCount(state, action){
            for(let x of state.basket){   
                if(x.product.id === action.payload.id){
                    if(x.product.quantity < 100){
                        x.product.quantity++;
                    }
                }         
            }

        },
        minusCount(state, action){
            for(let x of state.basket){   
                if(x.product.id === action.payload.id){
                    if(x.product.quantity > 1){
                        x.product.quantity--;
                    }
                }         
            }
        },
        addToSelected(state, action){//selected
            if(!state.selected.some(x => x.product.id === action.payload.id)){
                state.selected.push({product: action.payload})
            }   
        },
        removeFromSelected(state, action){
            state.selected = state.selected.filter(el => el.product.id !== action.payload.id)
        },
        addToCompared(state, action){//compared
            if(!state.compared.some(x => x.product.id === action.payload.id)){
                state.compared.push({product: action.payload})
            } 
        },
        removeFromCompared(state, action){
            state.compared = state.compared.filter(el => el.product.id !== action.payload.id)
        },
        updateCurrentPage(state, action){
            state.currentPage = action.payload
        }
    }
})

export const {addToBasket, loginVisible, basketVisible, formVisible, mobNavigationVisible, mobHeaderVisible, removeFromBasket, clearBasket, minusCount, plusCount, updateCurrentPage, addToSelected, removeFromSelected, addToCompared, removeFromCompared} = storeSlice.actions;

export default storeSlice.reducer;
