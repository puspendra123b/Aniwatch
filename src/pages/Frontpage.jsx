import {useNavigate} from 'react-router-dom'

import { Background } from "../components/Background"
export function Frontpage(){

    const navigate = useNavigate()
    return (
        <div style={{
            paddingTop : '3rem'
        }}>
            <div >
            <a onClick={()=>{
                navigate('/home')
            }} style={styles.topbar}>Home</a>
            <a onClick={()=>{
                navigate('/movies')
            }} style={styles.topbar} >Movies</a>
            <a onClick={()=>{
                navigate('/tv-series')
            }} style={styles.topbar} >Tv Series</a>
            <a onClick={()=>{
                navigate('/most-popular')
            }} style={styles.topbar} >Most Popular</a>
            <a onClick={()=>{
                navigate('/top-airing')
            }} style={styles.topbar} >Top Airing</a>
        </div >
        <div style={{
            padding : '3rem'
        }}>
            <Background />
        </div>
        </div>
    )
}

const styles={
    topbar : {
        margin : "100px 20px 40px 40px",
        fontWeight : "bold",
        color : "#fff",
        textDecoration : "none",
        cursor : "pointer"
    }
}