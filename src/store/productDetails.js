let initialState = {
  productDetails: [],
}

export default function detailReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER_DETAIL':
      return { ...state, productDetails: [...state.productDetails, payload] }

    default: 
      return state;  
  }
}
