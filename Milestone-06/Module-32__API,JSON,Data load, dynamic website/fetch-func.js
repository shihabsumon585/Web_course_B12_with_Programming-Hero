// // 32.3 Load JSON Data Using Fetch Function

// fetch("https://jsonplaceholder.typicode.com/posts/1")  // promise of response
//   .then(response => response.json())   // promise of convert to JSON dataf  f
//   .then(data => console.log(data))     // use the data



/*
const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(result); // output: Promise { <pending> }


const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => console.log(data)); // output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  
  
// fetch syntax
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => console.log(data));

  
const loadData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => console.log(data));
}


const loadData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    // promise to response
    .then((response) => response.json())
    // promise to json
    .then((data) => console.log(data));
}




 */


// const loadData = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     // promise to response
//     .then((response) => response.json())
//     // promise to json
//     .then((data) => displayPost(data));
// }

// const displayPost = (posts) => {
//   posts.forEach(post => {
//     console.log(post);
//   })
// }