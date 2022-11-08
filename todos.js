function handletodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
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
    <h3>User Title: ${users.completed}</h3>
    
    
    `
    section.appendChild(div)
    
    }
}