console.log("html page is loaded");



const weatherForm = document.querySelector('form')
const search = document.querySelector('input');

let messageOne = document.querySelector('#error');
let messageTwo = document.querySelector('#forecast');

messageOne.textContent ="Loading"
messageTwo.textContent = ""

weatherForm.addEventListener('submit',(event)=> {

    event.preventDefault();

    const location = search.value;

    fetch('/weather?address='+location).then((res)=> {

res.json().then((data)=> {

    if(data.error)  return messageOne.textContent = data.error

    messageOne.textContent=data.address
    messageTwo.textContent = data.forecast

    console.log(data)

})
})


    console.log(location)
})