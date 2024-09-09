import back from '/images/back.webp'
import { Search } from './Search'

export function Background(){
    return (
        <div style={{
            display : "flex",
            justifyContent : "space-between"
        }}>
            <Search />
            <img style={{
                height : "auto",
                width : "500px",
                marginRight : "3rem"
                
            }}
             src={back} alt="background" />
        </div>
    )
}


