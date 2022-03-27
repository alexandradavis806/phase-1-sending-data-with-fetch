// Add your code here


const submitData = (name, email) => {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            accept: 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(r => r.json())
    .then(newObj => {
        const list = document.createElement('ul')
        const listItem = document.createElement('li')
        listItem.innerHTML = newObj.id
        document.body.append(list)
        list.append(listItem)
    })
    .catch(error => {
        const list = document.createElement('ul')
        const listItem = document.createElement('li')
        listItem.innerHTML = error.message
        document.body.append(list)
        list.append(listItem)
    })


    return fetch()
}

// submitData();