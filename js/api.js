 
 const ul = document.getElementById('apul');
 const div = document.getElementById('apdiv');
 
 fetch('https://jsonplaceholder.org/users')
.then(res => res.json())
.then(res => {
    console.log(res);
    res.forEach(x => {
        const li = document.createElement('li');
        if(x.id > 7 && x.id <26) {
            li.textContent = x.id
            ul.appendChild(li)
        }
        div.classList.add('ragaca')
        div.appendChild(ul)
    })
})

