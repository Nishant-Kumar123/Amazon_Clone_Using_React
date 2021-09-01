// here all the data layer logic will be written

export const initialState = {
    basket: [],
    user: null,
};

// state = data layer || action = manipulates data layer || switch = check against bunch of cases

const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            // logic of adding item to 
            return {
                ...state,           // returning the state
                basket: [...state.basket, action.item]   // overwrite the value of basket with a new value
            }
      //      break;
        case 'REMOVE_FROM_BASKET':
            // logic of removing an item 
            return {state}; 
         //   break;
        default :
            return state;
    }
}

export default reducer;   // this helps to use reducer outside