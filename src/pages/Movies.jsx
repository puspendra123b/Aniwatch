
import { DetailsCard } from "../components/DetailsCard";
import { useState } from "react";
import { Header } from "../components/Header";
import { SideTrey } from "../components/SIdeTray";
import { PageName } from "../components/PageName";

export function Movies({id , Pagename}){
    
    

    const [movie , setMovie] = useState([{
        name : "One Piece",
        image : "",
        platform : "TV",
        duration : "24m"
    },{
        name : "Jujustu Kaisen",
        platform : "OVA",
        duration : "23m"
    },{
        name : "Naruto",
        platform : "TV",
        duration : "26m"
    },{
        name : "Naruto",
        platform : "TV",
        duration : "26m"
    },{
        name : "Naruto",
        platform : "TV",
        duration : "26m"
    },{
        name : "Naruto",
        platform : "TV",
        duration : "26m"
    },{
        name : "Naruto",
        platform : "TV",
        duration : "26m"
    },{
        name : "Naruto",
        platform : "TV",
        duration : "26m"
    }])
    return (
        <div>
            <Header />
            
            <div>
                <PageName id={id} prop={Pagename}/>
                <div style={{
                    display : 'flex',
                }}>
                    <div style={{
                        display : "flex",
                        flexWrap :"wrap",
                    }}>
                        {movie.map(movie => <DetailsCard prop={movie} /> )}
                    </div>
                    <div style={{
                        width : "400px"
                    }}>
                        <SideTrey prop={movie} />
                    </div>
                </div>
            </div>
            
            
        </div>

    )
}