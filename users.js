function handleusers(){
    fetch('https://jsonplaceholder.typicode.com/users')
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
    
    <h2>User Title: ${users.name}</h2>
    <h3>User name: ${users.username}</h3>
    <h3>User email: ${users.email}</h3>
    <h3>User address: ${users.address.city}</h3>
    
    
    `
    section.appendChild(div)
    
    }
}