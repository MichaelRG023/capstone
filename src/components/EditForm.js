import { useState } from "react"


function EditForm({handleUpdateComment, comment}){

    const [comment,setComment] = useState('')
    const [editForm, setEditForm] = useState(false)

    const toggleEditForm =() =>{
        setEditForm(editForm => !editForm)
    }

    const handleEditForm = (e) =>{
        e.preventDefault()
        fetch(`/comments/${comment.id}`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: comment
            })
        })
        .then((res)=> res.json())
        .then(comment =>{
            handleUpdateComment(comment, comment.sneaker.id)
        })
    }


    const editFormInputs =
    <form className="text-black" onSubmit={handleEditForm}>
        <input onChange={((e)=> setComment(e.target.value))} name="comment" type='text'placeholder="Write your comment..."/>
        <button type="submit">Edit</button>
    </form>


    return(
    <div>
    
    {editForm? editFormInputs: null}

    {editFrom ? <button onClick={toggleEditForm}>Cancel editing review</button>: <button onClick={toggleEditForm}>Edit Comment</button>}
    
    </div>
    )
}

export default EditForm