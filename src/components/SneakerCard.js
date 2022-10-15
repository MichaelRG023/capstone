

import React,{useEffect, useState} from "react";
import './SneakerCard.css'

function SneakerCard({sneaker,currentUser, handleComments,sendComments, handleDelete}){

  const [showForm, setShowForm] = useState(false);
  const [showComments, setShowComments] = useState("")
  const [comment, setComment] = useState([])
 
  const handleOnChange=(e)=>{
      setShowComments(e.target.value)
  }
   
    //stop data from looping, very annoying when console.log()
  const addComment =(e)=>{
    e.preventDefault()


    //fetching comm, so that comments can be individual
    fetch(`/comments`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          comment:showComments 
        })
      }).then(res=>res.json())
       .then(comment=>{handleTheComments(comment.comment)
       handleComments(comment)
    })
    
  }
  //handling new comments 
  const handleTheComments=(newcomment)=>{
    setComment([...comment, newcomment])
  }
  const commentArray = comment.map(c => <p> {c}</p>)

         

  
            // add the comment button
          const showAddCommentButton = () => {
            return (
                <>
                {showForm ? (<button onClick={() => setShowForm(!showForm)} className="text">Cancel</button>) : (<button onClick={() => setShowForm(!showForm)} className="text">Add A Comment</button>)}
                </>
            )}



            
            //add the commentForm
            const showCommentForm =()=>{
            return(
              <div>
              {showForm?
              <form className="new-comment-form" onSubmit={addComment}>
              <input type="text" onChange={handleOnChange} placeholder="insert comment"/>
              <button type="submit">Submit your Comments</button>
              </form>
                :
                null}
              </div>
              )}

               
    return(
      <>
        <div className="Card">
        <h1> Sku:{sneaker.sku}</h1>
          <a href={sneaker.links.flightClub}> Link To FlightClub</a>
          <br></br>
          <a href={sneaker.links.stockX}> Link To stockX</a>
          <br></br>
          <a href={sneaker.links.goat}>Link to Goat</a>
          <h3> Brand: {sneaker.brand}</h3>
          <h3>  Name: {sneaker.name}</h3>
          <h3>Colorway: {sneaker.colorway}</h3>
          <h3>Gender: {sneaker.gender}</h3>
          <h3> Silhouette: {sneaker.silhouette}</h3>
          <h3>ReleaseYear:{sneaker.releaseYear}</h3>
          <h3> ReleaseDate:{sneaker.releaseDate}</h3>
          <h3>RetailPrice:{sneaker.retailPrice}</h3>
          <h3>EstimatedMarketValue{sneaker.estimatedMarketValue}</h3>
          <h3>Story:{sneaker.story}</h3>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
              <div className="comments">
                <h3 className="comments-title">Comments</h3>
                {commentArray}
                <button onChange={""}>Delete Comment</button>
              
              </div>
           
                <br></br>
                <br></br>
                <br></br>
                <div className="text-center">
                   {currentUser ? showCommentForm() : null}
                </div>
                   {currentUser ? showAddCommentButton() : null}
                </div>
                
       
       </>
          
  )
}

export default SneakerCard