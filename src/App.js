import Home from "./components/Home"
import './App.css';
import Login from './components/Login';
import {
 Routes,
 Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import {useEffect, useState} from "react";


function App() {
  //current logged in user state
  const [currentUser,setCurrentUser] = useState('');
  const [comments, setComments] = useState([]);

  const updateUser =(user)=> setCurrentUser(user)

// GET all sneakers from the API
  const [sneakerData, setSneakerData] = useState([]);

  const [errors, setErrors] = useState(false);

  useEffect(()=>{
  
    fetch('/all_sneakers')
    .then(res=>{
      if(res.ok){
        res.json().then(setSneakerData)
      }else {
        res.json().then(data => setErrors(data.error))
      }
    })
  },[])
  //GET all  comments
   useEffect(()=>{
   fetch('/comments')
  .then(res=>res.json())
  .then(data => setComments(data))
  },[])

  
  // currently logged in state user
    useEffect(()=>{
    fetch('/users')
    .then(res=>{
      if(res.ok){
        res.json().then(user=>{
          setCurrentUser(user);
        })
      }else{
        res.json().then(data => setErrors(data.error))
      }
     })
   },[])
     const [localSneakers,setLocalSneakers] = useState([])
   useEffect(()=>{
    fetch('/sneakers')
    .then(res=>res.json())
    .then(setLocalSneakers)
   }, [])
    
      const handleComments =(newComments)=>{
      setComments(comments =>[...comments,newComments])
      }

      const handleDelete=(commentToDelete, sneaker_id)=>{
        const copyOfSneakers = [...localSneakers]
        const sneaker_index = copyOfSneakers.findIndex((sneakerObj) => sneakerObj.id === sneaker_id)
        copyOfSneakers[sneaker_index].comments = copyOfSneakers[sneaker_index].comments?.filter(comment => comment.id !== commentToDelete.id)
        setLocalSneakers(copyOfSneakers)
           }
    if(errors) return<h1>{errors} </h1>

  return(
    <div>
    <Navbar currentUser={currentUser} updateUser={updateUser}/>
      <Routes>   
        
        <Route path="/" element={<Login updateUser={updateUser}/>}/> 
        <Route  path='/home' element={<Home sneakers={sneakerData} 
        currentUser={currentUser} 
        handleComments={handleComments} 
        sendComments={comments} 
        handleDelete={handleDelete}/>}/>
      
       <Route path="/signup" element={<Signup updateUser={updateUser}/>}/>
      </Routes>
    
    </div>
  );

 
}

export default App
