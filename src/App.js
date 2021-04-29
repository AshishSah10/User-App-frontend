import { useState } from "react";
import "./styles.css";
import Button from "./components/button/Button.jsx"

export default function App() {
  const [allUser, setAllUser] = useState([])
  const api = "https://randomuser.me/api/";
  const addUserHandler = async () => {
    const response = await fetch(api, { method: "GET" });
    const responseJson = await response.json();
    const userData = responseJson.results[0];
    allUser.push(userData)
    const newUsers = [...allUser]
    setAllUser(newUsers)
  };
  return (
    <div className="App">
      <Button value="Add User"/>
      {/* <Button addUserHandler={addUserHandler}/> */}
      <UserList userList={allUser}/>
    </div>
  );
}

// const Button = ({addUserHandler}) => {
//   return(
//     <>
//       <button onClick={addUserHandler}>Add User</button>
//     </>
//   )
// }

const UserList = ({userList}) => {
  return(
      <div className="user-list">
        {userList.map((userObj, index)=> <UserObject key={index} userObj={userObj} />
      )}
      </div>
  )
}

const UserObject = ({userObj}) => {
  return(
     <div className="user-object">
        <div>{userObj.name.title} {userObj.name.first} {userObj.name.last}</div>
        <ol>
          <li>{userObj.gender}</li>
          <li>{userObj.email}</li>
        </ol>
     </div>
  )
}
