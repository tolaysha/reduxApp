import React from 'react';
import './users.scss';
const USERS = [
  {name: 'Иван', surname: 'Попов', active: true, gender: 'male' },
  {name: 'Петр', surname: 'Смирнов', active: false, gender: 'male' },
  {name: 'Анна', surname: 'Кузнецов', active: true, gender: 'female' },
  {name: 'Дмитрий', surname: 'Смирнов', active: false, gender: 'male' },
  {name: 'Любовь', surname: 'Иванова', active: true, gender: 'female' },
  {name: 'Петр', surname: 'Попов', active: true, gender: 'male' },
  {name: 'Анна', surname: 'Репина', active: true, gender: 'female' },
]

function getUsers() {
   return new Promise((resolve, reject) => {
      setTimeout( () => resolve(USERS), 0)
   })
}

let UserList = (props)=> {
	const [users, setUsers] = React.useState([])
	React.useEffect(()=>{
  	getUsers()
    	.then((data)=>{
      	setUsers(data);
      })
  })
	return (
    <ul >
      {users.map((item, index) =><li style = {{'display':'block'}} key = {index}>{item.name}  {item.surname}</li>)}
    </ul>
    )
  

}
export default UserList;
