import tokenService from '../utils/tokenService';
import { Route53Resolver } from 'aws-sdk';

// // index
// export function getPosts() {
//     return fetch(`/api/posts`).then(function(res) {
//       return res.json();
//     })
//   }

//   // show
//   export function getPost(id) {
//     return fetch(`/api/posts/${id}`).then(function(res) {
//       return res.json();
//     })
//   }

// create
export function createPost(post) {
  return fetch('/api/posts/create', {
    method: 'POST',
    body: JSON.stringify({
      petName: post.name,
      petAge: post.petAge,
      petBreed: post.petBreed,
      zipCode: post.zipCode,
      picture: post.picture,
      content: post.content
    }),
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + tokenService.getToken()
    }
  });
}

export function getPost(id) {
  return fetch(`/api/posts/${id}`).then(function(res) {
    return res.json();
  });
}

// edit
export function editPost(post) {
  console.log(post);
  return fetch(`/api/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + tokenService.getToken()
    }
  }).then(res => {
    return res.json();
  });
}

// delete
export function deletePost(id) {
  console.log('$$$$$$$$$$$$$$$$$$$$api service deletePost');
  return fetch(`/api/posts/${id}`, {
    method: 'delete'
  }).then(function(res) {
    return res.json();
  });
}
// export function deletePost(id) {
//   return fetch(`/api/posts/${id}`, {
//     method: 'delete'
//   })
//     .then(res => res.text())
//     .then(post => post);
// }

//   // upvote/downvote posts
//   export function upvotePost(id, type) {
//     var type = type === "downvote" ? "downvote" : "upvote";
//     return fetch(`/api/posts/${id}/${type}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         upvotes: 1
//       }),
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//   }

//   // add a comment to post
//   export function addComment(postId, comment) {
//     return fetch(`/api/posts/${postId}/comments`, {
//       method: 'POST',
//       body: JSON.stringify({
//         body: comment
//       }),
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//   }
