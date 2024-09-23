async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const userList = document.getElementById('user-list');

        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.city}</p>
            `;

            userList.appendChild(userDiv);
        });
    } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
    }
}

window.onload = fetchUsers;