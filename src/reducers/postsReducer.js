export default (state =[], action) => {
 switch (action.type) {
    case 'FETCH_POSTS_ACTION':
      return action.payload
    default:
      return state
  }
}