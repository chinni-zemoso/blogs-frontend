import { urls } from '../../utils/serviceConstants'

import { useHttp } from '../../utils/hooks/http';

export const getAllPosts = async () => {

    const fetchedPostsJson = await fetch(urls.getAllPostsURL, {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            accept: "application/json",
            "cache-control": "no-cache",
        },
    }).then(function (response) {
        return response.json();
    })
    const fetchedUsersJson = await fetch(urls.getAllUsersURL, {
        method: 'GET',
        headers: {
            "content-type": "application/json",
            accept: "application/json",
            "cache-control": "no-cache",
        },
    }).then(function (response) {
        return response.json();
    })
    console.log('fetchedUsersJson')
    console.log(fetchedUsersJson)
    console.log('fetchedPostsJson')
    console.log(fetchedPostsJson)

    let framedPosts = [];

    if (fetchedPostsJson) {
        framedPosts = fetchedPostsJson.map((json) => {
            let framedPost={}
            framedPost.image = json.image;
            framedPost.title = json.title;
            framedPost.body = json.body;
            framedPost.postedOn = json.postedOn;

            framedPost.userName = json.user.name;
            framedPost.userImage = json.user.image;
            let framedComments = json.comments.map((comment) => {
                let framedComment={}
                let userId = comment.userId;
                let user
                for (var j = 0; j < fetchedUsersJson.length; j++) {
                    if (userId === fetchedUsersJson[j].id) {
                        user = fetchedUsersJson[j];
                    }
                }
                framedComment.name = user.name
                framedComment.email = user.email
                framedComment.image = user.image
                framedComment.body = comment.body
                return framedComment;
            })
            framedPost.comments = framedComments
            return framedPost
        })
    }
    return framedPosts;
}


export const storeBlogPost = async () => {
    
}

