import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, TomatoButton } from './StyleComponent'

const Main = () => {

  const [userList, setuserList] = useState([]);
  const navigate = useNavigate();

  const displayData = async () =>{

    try{
        const response = await axios.get("http://localhost:5000/api/display");
        setuserList(response.data);
      }
    catch(error){
      console.log(error);
    }
  };

    const handleGoToSignup = () =>{
   
        navigate('/Signup')
    }

    const handleGoToLogin = () =>{
      navigate('/Login')
    }
  return (
    <div><h1>Main</h1>

    <div>
      <TomatoButton type="button" onClick={displayData}> Display</TomatoButton></div>

    <div>
      <h2>user List</h2>

      <ul>
        {userList.map((user, index) => (
        <li key={index}>{user.username}</li>
          ) ) }
     </ul>

    </div>


<Button type="button"  onClick={handleGoToLogin}>back to login</Button>
<Button type="button" onClick={handleGoToSignup} $primary>back to Signup</Button>
    </div>
  )
}

export default Main;