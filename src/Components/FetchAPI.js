
import { useEffect, useState } from "react"


function FetchAPI() {
      
        const [users, setUsers] = useState([])
        const [newName, setNewName] = useState("")
        const [newEmail, setNewEmail] = useState("")
        const [newWebsite, setNewWebsite] = useState("")
      
        useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => setUsers(json))
        }, [])
      
        const addUser = () => {
          const name = newName.trim()
          const email = newEmail.trim()
          const website = newWebsite.trim()
          if (name && email && website) {
            fetch("https://jsonplaceholder.typicode.com/users", {
              method: "POST",
              body: JSON.stringify({
                name,
                email,
                website,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then(response => response.json())
              .then(data => {
                setUsers([...users, data])
                setNewName("")
                setNewEmail("")
                setNewWebsite("")
            
              })
          }
        }
      
        const updateUser = id => {
          const user = users.find(user => user.id === id)
      
          fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then(response => response.json())
        }
        const deleteUser = id => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
              method: "DELETE",
            })
              .then(response => response.json())
              .then(() => {
                setUsers(values => {
                  return values.filter(item => item.id !== id)
                })
              })
          }
        const onChangeHandler = (id, key, value) => {
          setUsers(values => {
            return values.map(item =>
              item.id === id ? { ...item, [key]: value } : item
            )
          })
        }
      
    return (
      <div className="mx-6 my-5 container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td onChange={value => onChangeHandler(user.id, "email", value)}>{user.name}</td>
                <td onChange={value => onChangeHandler(user.id, "email", value)}>{user.email}</td>
                <td onChange={value => onChangeHandler(user.id, "email", value)}>{user.website}</td>
                <td>
                  <button className="btn btn-success my-3 mx-3" onClick={() => updateUser(user.id)}>Update</button>
                  <button className="btn btn-danger my-3 mx-3" onClick={() => deleteUser(user.id)}>Delete</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Add name here..."
              />
            </td>
            <td>
              <input
                placeholder="Add email here..."
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
              />
            </td>
            <td>
              <input
                placeholder="Add website here..."
                value={newWebsite}
                onChange={e => setNewWebsite(e.target.value)}
              />
            </td>
            <td>
              <button className="btn btn-warning my-3 mx-3" onClick={addUser}>
                Add user
              </button>
            </td>
          </tr>
        </tfoot>
        </table>
      </div>
    )
  }
  
  export default FetchAPI