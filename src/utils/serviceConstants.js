// export const blogsGETURL = '';

const baseUrl = 'http://localhost:3000'

export const urls = {
  getAllPostsURL: baseUrl + '/posts?_embed=comments&_expand=user',
  getAllUsersURL: baseUrl + '/users',
  storePostURL: baseUrl+'/posts'
}
