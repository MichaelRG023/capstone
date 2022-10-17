
import SneakerList from './SneakerList';

function Home({currentUser,handleComments,sneakers,sendComments,handleUpdateComment, handleDeleteComment,}){

  






    return( 
    <div>
    <SneakerList sneakers={sneakers} currentUser={currentUser} handleComments={handleComments} sendComments={sendComments} handleDeleteComment={handleDeleteComment} handleUpdateComment={handleUpdateComment} />
    </div>
    )
}

export default Home;