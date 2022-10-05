
import SneakerList from './SneakerList';

function Home({currentUser,handleComments,sneakers,sendComments}){

  






    return( 
    <div>
    <SneakerList sneakers={sneakers} currentUser={currentUser} handleComments={handleComments} sendComments={sendComments}/>
    </div>
    )
}

export default Home;