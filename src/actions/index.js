import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  const userIds = _.uniq(_.map(getState().posts, 'userId'))
  userIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')
  dispatch({ type:'FETCH_POSTS_ACTION', payload: response.data })
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)
  dispatch({ type: 'FETCH_USER_ACTION', payload: response.data })
}
