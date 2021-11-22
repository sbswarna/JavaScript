document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

//get local text data
function getText() {
    fetch('test.txt')
        .then(function (res) { //we'll get a promise.
            return res.text();
        })
        .then(function (data) { //the actual data after resolving that promise.
            //console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (err) {
            console.log((err));
        })
}

//get local JSON data
function getJSON() {
    fetch('text.json')
        .then(function (res) { //we'll get a promise.
            return res.json();
        })
        .then(function (data) { //the actual data after resolving that promise.
            //console.log(data);
            let output = '';

            data.forEach(function (jsonData) {
              output += `
              <ul>
                <li>${jsonData.title}</li>
                <li>${jsonData.body}</li>
              </ul>
              `  
            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log((err));
        })
}

//get External API data
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function (res) { //we'll get a promise.
            return res.json();
        })
        .then(function (data) { //the actual data after resolving that promise.
            //console.log(data);
            let output = '';

            data.forEach(function (userData) {
              output += `<li>${userData.login}</li>`  
            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log((err));
        })
}