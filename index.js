const h5 = document.querySelector('h5')

function addID (element) {
    element.id =  `h5El`
}
addID(h5);


function del(e) {
    cnf = confirm('Are you sure you want to delete?')
    const r = e.target.remove();
    return cnf 
}

h5.addEventListener('click', del)

const form = document.getElementById('form');
const log = document.getElementById('log');


function logSubmit (event) {
    log.textContent =  `Form Submitted! Time Stamp: ${event.timeStamp}`;
    event.preventDefault();
    form.reset();
}

form.addEventListener('submit', logSubmit);
