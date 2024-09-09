import one from '/images/onepiece.jpg'
import {useNavigate} from 'react-router-dom'


export function DetailsCard ({prop}){
    const navigate = useNavigate()
    return (
        <div style={{
            margin : "5px",
        }}>
        <div >
            <a onClick={()=>{
                navigate('/watch/anime')
            }}><img style={{
            height : "300px",
            width : "220px",
            cursor : 'pointer'
            }} src={one} alt="" /></a>
        </div>
        <div style={{
            fontWeight : "bold",
        }}>
            {prop.name}
        </div>
        <div style={{
            marginTop : "3px",
            color : "#6B7478"
        }}>
            {prop.platform} | {prop.duration}
        </div>
        </div>  
    )
}