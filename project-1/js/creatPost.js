
const creatPost = () => {    
const post = {
    title : "Peac-Tatyrcul",
    descr : "Пик Тандыкул (Танды Кёль , Русский : Тандыкуль) - гора в Алайских горах Средней Азии . Тандыкуль",
    img : "./img/img3.jpg"
}
fetch(URL, {
    headers : {
        'Content-Type' : 'application/json'
    },
    method : 'POST',
    body : JSON.stringify(post)
    })
}

const URL = 'http://localhost:3000/posts'

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const post = {
        title : e.target[0].value,
        descr : e.target[1].value,
        img : e.target[2].value
    }
    console.log(post)
    fetch(URL, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(post)
    })
})
// form.addEventListener("submit", (e) => {
    // e.preventDefault();
    // const formData = new FormData(form)
    // fetch(URL, {
        // method : 'POST',
        // body : formData
    // })
// })