
document.querySelector('button').addEventListener('click', login)

function login() {
    console.log('I got clicked')


    let name = document.querySelector('#name').value
    let password = document.querySelector('#password').value

    if(name == 'us' && password == '123') {
        document.querySelector('#recipe-list').hidden = false;
    }

}