const http = new Library2;

//GET users from https://jsonplaceholder.typicode.com/
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

//POST
const data = {
    name: 'sbs',
    username: 'sbs',
    email: 'sbs@gmail.com'
}
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//Update
http.put('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//Delete
http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(res => console.log(res))
    .catch(err => console.log(err));