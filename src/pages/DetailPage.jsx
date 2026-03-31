function savedReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      if (state.find(p => p.code === action.product.code)) {
        return state
      }
      return [...state, action.product]

    case 'REMOVE':
      return state.filter(p => p.code !== action.code)

    default:
      return state
  }
}