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
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentUser,setCurrentUser] = useState('');
  const [comments, setComments] = useState([]);
console.log("comments:", comments)
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
        res.json().then(user=>{setCurrentUser(user);
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

    //  function handleUpdateComment(updatedComments){
    //  const updatedComment = comments.map((comment)=>{
    //   if(comment.id === updatedComment.id){
    //     return updatedComments;
    //   }else{
    //     return comment;
    //   }
    //  });
    //  setLocalSneakers(updatedComments)
    //  }

    const handleUpdateComment =(newComment, sneaker_id)=>{
      const copyOfSneaker =[...localSneakers]
      const sneaker_index = copyOfSneaker.findIndex((sneakerObj)=> sneakerObj.id === sneaker_id)
      copyOfSneaker[sneaker_index].comments = [...copyOfSneaker[sneaker_index].comments, newComment]
      setLocalSneakers(copyOfSneaker)
    }

      function handleDeleteComment(deletedComment){
      const updatedComments = comments.filter((comment)=> comment.id !==deletedComment.id)
      setLocalSneakers(updatedComments)
      }
     
      function handleDarkModeClick(){
        setIsDarkMode((isDarkMode)=>!isDarkMode)
      }


      
    if(errors) return<h1>{errors} </h1>

  return(
    <div className={"App" + (isDarkMode? "dark" : "light")}>
    <Navbar currentUser={currentUser} updateUser={updateUser} isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <Routes>   
        
        <Route path="/" element={<Login updateUser={updateUser}/>}/> 
        <Route  path='/home' element={<Home sneakers={sneakerData} 
        currentUser={currentUser} 
        handleComments={handleComments} 
        sendComments={comments} 
        handleUpdateComment={handleUpdateComment}
        handleDeleteComment={handleDeleteComment}
       
        />}/>
      
       <Route path="/signup" element={<Signup updateUser={updateUser}/>}/>
      </Routes>
    
    </div>
  );

 
}

export default App
