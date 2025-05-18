const contentDiv = document.querySelector('#content')
const header = document.querySelector('h1')


const submitData = (name, email) => {

  const userObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ name, email })
  }

  return fetch("http://localhost:3000/users", userObject)
          .then((response) => {
            return response.json();
          })
          .then((object) => {
            const p = document.createElement("p");
            p.textContent = object.id;
            contentDiv.appendChild(p);
          })
          .catch((error) => {
            header.textContent = error.message
          });
}
