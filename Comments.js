function handlecomment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
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
    <h1>User id: ${users.name}</h1>
    <h2>Title Name : ${users.email}</h2>
    <p>Description : ${users.body}</p>

    `
    section.appendChild(div)
    
    }
}