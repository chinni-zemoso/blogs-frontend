// export const blogsGETURL = '';

const baseUrl = 'http://localhost:3000'

export const URL = {
  getAllPostsURL: baseUrl + '/posts?_embed=comments&_expand=user',
  getAllUsersURL: baseUrl + '/users',
  storeCommentsURL: baseUrl+'/comments'
}
