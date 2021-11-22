const posts = [
    {
        title: 'Post 1',
        body: 'This is Post 1'
    },
    {
        title: 'Post 2',
        body: 'This is Post 2'
    },
    {
        title: 'Post 3',
        body: 'This is Post 3'
    }
];


//In a synchronous way
// function createPost(post) {
//     setTimeout(function () {
//         posts.push(post);
//     }, 2000);
// }

// function getPost() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post 4', body: 'This is Post 4'});
// getPost();


//In an asynchronous way
function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);

            const error = false;
            if(!error) {
                resolve(); 
            } else {
                reject('Something went wrong.');
            }

        }, 2000);
    });
}

function getPost() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post 4', body: 'This is Post 4'})
.then(getPost)
.catch(function (err) {
    console.log(err);
});
