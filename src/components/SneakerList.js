
import SneakerCard from "./SneakerCard"
import React from 'react';

function SneakerList({sneakers, currentUser, handleComments,sendComments}){

   
   


const sneakerComponents = sneakers.results && sneakers.results.map(sneaker => {
   return <SneakerCard
   sneaker={sneaker}
    currentUser={currentUser}
    handleComments={handleComments}
    sendComments={sendComments}
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