import { useNavigate } from "react-router-dom"

export function Collection(){

    const navigate = useNavigate()

    return (
        <div>
            <h1>Create Collection</h1>
            <label htmlFor="">Collection Name :</label>
            <input type="text" placeholder="Collection name" />
            <label htmlFor="">Collection Description :</label>
            <input type="text" placeholder="Collection description" />
            <button onClick={()=>{
                navigate('/admin/collection/episodes')
            }}  >Create Collection</button>
            
        </div>
    )
}