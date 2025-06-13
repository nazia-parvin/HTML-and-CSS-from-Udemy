// const button = document.getElementById('button');
const button = document.querySelector('#button');
const heading = document.querySelector('h1');

// console.log(button);
button.addEventListener('click', function () {
    // console.log('Button CLicked')
    // console.log(document.body)
    document.body.classList.toggle('dark');
    heading.classList.toggle('yellow');
})
