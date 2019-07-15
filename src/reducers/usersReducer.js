export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER_ACTION':
      return [...state, action.payload]
    default:
      return state
  }
}