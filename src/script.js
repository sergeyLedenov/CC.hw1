let male = "No";
let female = "No";
let telephone = "No";
let tablet = "No";
let pc = "No";
let laptop = "No";

function Male () {
    if (female == "No") {
        male = "Yes";
    } else {
        male = "No";
    }
}

function Female () {
    if (male == "No") {
        female = "Yes";
    } else {
        female = "No";
    }
}

function Telephone () {
    if (telephone == "No") {
        telephone = "Yes";
    } else {
        telephone = "No";
    }
}

function Tablet () {
    if (tablet == "No") {
        tablet = "Yes";
    } else {
        tablet = "No";
    }
}

function Pc () {
    if (pc == "No") {
        pc = "Yes";
    } else {
        pc = "No";
    }
}

function Laptop () {
    if (laptop == "No") {
        laptop = "Yes";
    } else {
        laptop = "No";
    }
}

function Submiting () {
    let _delSpace = document.querySelector("#br");
    _delSpace.parentNode.removeChild(_delSpace);


    let nameEl = document.querySelector("#name");
    let _name = nameEl.value;

    let SnameEl = document.querySelector("#surname");
    let Sname = SnameEl.value;

    let emailEl = document.querySelector("#email");
    let email = emailEl.value;

    const element = (<div>
            <p>name: {_name}</p>
            <p>surname: {Sname}</p>
            <p>e-mail: {email}</p>
            <p>male: {male}</p>
            <p>female: {female}</p>
            <p>telephone: {telephone}</p>
            <p>tablet: {tablet}</p>
            <p>computer: {pc}</p>
            <p>laptop: {laptop}</p>
        </div>)

    const app = document.querySelector(".jswork");

    ReactDOM.render(element, app);
}