import react, { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

function TableComponent(){
    let [users, setUsers ] = useState(null);
    let [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        // .then((response) => console.log(response.json()))
        .then((json) => {
            console.log("============",json);
            console.log(json.data);
            setUsers(json.data);
        })
        .catch(err => console.log(err.message))
    },[])

    function handleClick(user){
        console.log("+++++++++=",user)
    }

    function handleSearch(event){
        event.preventDefault();
        console.log(searchInput);
        let data = users.filter(user => (user.id == searchInput || user.name == searchInput));
        setUsers(data)
    }
    return (
    <>
    {/* {console.log(users)} */}
        <div>
            <form onSubmit={handleSearch}>
                <input id="search" type="text" onChange={(event) =>setSearchInput(event.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <table>
                {users &&
                <tbody>
                    <row>
                        <td >Name</td>
                        <td>User name</td>
                        <td>Email</td>
                        <td>City</td>
                        <td>Edit</td>
                    </row>
                    {users.map((user) => 
                        <row>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td><button onClick={() => handleClick(user)}>Edit</button></td>
                        </row>
                        )}
                </tbody>}
            </table>

        </div>
    </>)
}

export default TableComponent