function savedReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      // avoid duplicates by checking code
      if (state.find(p => p.code === action.product.code)) {
        return state
      }
      return [...state, action.product]

    case 'REMOVE_PRODUCT':
      return state.filter(p => p.code !== action.code)

    case 'CLEAR_ALL':
      return []

    default:
      return state
  }
}