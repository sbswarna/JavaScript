const pageState = function () {
    let currentState = new homeState(this);

    this.initState = function () {
        this.changeState(new homeState);
    }
    this.changeState = function (state) {
        currentState = state;
    }
};

const homeState = function (page) {
    document.querySelector('#heading').textContent = 'Home';
    document.querySelector('#content').innerHTML = `
    <p>This is Home page</p>
    `;
}
const aboutState = function (page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
    <p>This is About Us page</p>
    `;
}
const contactState = function (page) {
    document.querySelector('#heading').textContent = 'Contact US';
    document.querySelector('#content').innerHTML = `
    <form>
        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" placeholder="Enter your name">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Enter your email">
        </div>
        <div class="form-group">
            <label>Message</label>
            <textarea class="form-control">Enter message here...</textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
}

const page = new pageState();
page.initState();

document.getElementById('home').addEventListener('click', (e) => {
    page.changeState(new homeState);
    e.preventDefault();
});

document.getElementById('about').addEventListener('click', (e) => {
    page.changeState(new aboutState);
    e.preventDefault();
});

document.getElementById('contact').addEventListener('click', (e) => {
    page.changeState(new contactState);
    e.preventDefault();
});