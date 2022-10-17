
import SneakerCard from "./SneakerCard"
import React from 'react';

function SneakerList({sneakers, currentUser, handleComments,sendComments,handleDeleteComment, handleUpdateComment}){

   
  

   

const sneakerComponents = sneakers.results && sneakers.results.map(sneaker => {
   return <SneakerCard
   sneaker={sneaker}
    currentUser={currentUser}
    handleComments={handleComments}
    sendComments={sendComments}
    handleDeleteComment={handleDeleteComment}
    handleUpdateComment={handleUpdateComment}
   key={sneaker.id}
    />
})


return(
  
<div className="components">
  {sneakerComponents}
</div>
    
)

}


export default SneakerList;