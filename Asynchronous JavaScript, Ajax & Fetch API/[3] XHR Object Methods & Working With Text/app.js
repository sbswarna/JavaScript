document.getElementById('button').addEventListener('click', loadData);

function loadData() {

    //creat an xml http request object
    const xhr = new XMLHttpRequest();

    //open
    xhr.open('GET', 'data.txt', true) //the third parameter defines if is synchronous or asynchronous. true means asynchronous
    //console.log('Readystate = ',xhr.readyState);
    //onload
    xhr.onload = function() {
        //console.log('Readystate = ',xhr.readyState);
        if(this.status === 200) { //to check if everything is ok. 200 is the http ok status.
            //console.log(this.responseText);

            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    //older approach 
    // xhr.onreadystatechange = function() {
    //     console.log('Readystate = ',xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    //for errors
    xhr.onerror = function() {
        console.log('Request error!');
    }
    xhr.send();
}

//Ready state values
// 0 = connection not initialized
// 1 = server connection extablished
// 2 = request received
// 3 = processing request
// 4 = request finished and response is ready