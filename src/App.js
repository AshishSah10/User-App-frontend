import { useState, memo } from "react";
import "./styles.css";
import Button from "./components/button/Button.jsx"
import Input from "./components/input/Input";
import {BiSearchAlt} from "react-icons/bi"

export default function App() {
  const [allUser, setAllUser] = useState([])
  const [searchKeyword, setSearchKeyword] = useState("")
  const api = "https://randomuser.me/api/";
  const addUserHandler = async() => {
    const response = await fetch(api, { method: "GET" });
    const responseJson = await response.json();
    const userData = responseJson.results[0];
    const newUser = [...allUser, userData]
    setAllUser(newUser)
  };

  const filteredUser = allUser.filter(user => 
    user.name.first.toLowerCase().includes(searchKeyword.toLowerCase()) ||
    user.name.last.toLowerCase().includes(searchKeyword.toLowerCase())
  )
  console.log(filteredUser)
  return (
    <div className="App">
      <Button value="Add User" color="primary" btnClickHandler={addUserHandler}/>
      <Input placeholder="search here..." type="search" value={searchKeyword} OnChange={(event) => setSearchKeyword(event.target.value)}/>
      <UserList userList={filteredUser}/>
    </div>
  );
}


const UserList = ({userList}) => {
  return(
      <div className="user-list">
        {userList.map((userObj, index)=> <UserObject key={index} userObj={userObj} />
      )}
      </div>
  )
}

const UserObject = memo(({userObj}) => {
  return(
     <div className="user-object">
        <div>{userObj.name.title} {userObj.name.first} {userObj.name.last}</div>
        <ol>
          <li>{userObj.gender}</li>
          <li>{userObj.email}</li>
        </ol>
     </div>
  )
})
