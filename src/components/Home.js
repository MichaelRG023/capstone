
import SneakerList from './SneakerList';

function Home({currentUser,handleComments,sneakers,sendComments,handleDelete}){

  






    return( 
    <div>
    <SneakerList sneakers={sneakers} currentUser={currentUser} handleComments={handleComments} sendComments={sendComments} handleDelete={handleDelete}/>
    </div>
    )
}

export default Home;