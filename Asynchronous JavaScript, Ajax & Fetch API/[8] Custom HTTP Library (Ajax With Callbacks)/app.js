const http = new library();

//Get posts
http.get(
  "https://jsonplaceholder.typicode.com/posts",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);

//get single post
http.get(
  "https://jsonplaceholder.typicode.com/posts/19",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);

//post data
const data = {
    title: 'Custom post',
    body: 'This is a custom post'
}
http.post(
  "https://jsonplaceholder.typicode.com/posts",
  data,
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);

//Update/put
http.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    data,
    function (err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    }
  );

//Delete
http.delete(
    "https://jsonplaceholder.typicode.com/posts/1",
    function (err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    }
  );