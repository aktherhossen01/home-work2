function handlePhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then (data => displaypost(data))

}
function displaypost(user){
    const section = document.getElementById('section')
    for(const users of user){
    const div = document.createElement('div')
    div.classList.add('postClass')
    div.innerHTML = `
    <h1>User id: ${users.id}</h1>
    
    <h2>User Title: ${users.title}</h2>
    
    <img src="${users.url}" alt="">
    `
    section.appendChild(div)
    
    }
}