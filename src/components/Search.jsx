import logo from '/images/logo.png'
import search from '/images/search.png'

export function Search(){
    return (
        <div style={{
            display : 'flex',
            flexDirection : "column",
            justifyContent : "center"
            }}>
            <img style={{
                height : "50px",
                width : "150px",
                margin : "10px"
            }}
             src={logo} alt="aniwatch" />
             <div style={{
            display : 'flex'
            }}>
             <input style={{
                margin : '10px',
                padding: "7px",
                paddingleft : 'px',
                borderRadius: "50px",
                fontSize: "16px",
                background: "#fbfbfb",
                border: "2px solid transparent",
                height: "25px",
                width : '500px',
                color : "black",
                boxShadow: "0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%)",
             }}
             type="text" placeholder='Search anime...'/>
             <button style={{
                background: "#ffdd95",
                height: "55px",
                width : "55px",
                borderRadius : '50px'
                }}> <img style={{
                    height: "100%",
                    width : '100%',
                }}
                src={search} alt="" />  </button>
             </div>
             
             <p><b>Top search: </b> <i> Solo Leveling, One Piece, Ninja Kamui, Mashle: Magic andMuscles Season 2,
              Jujutsu Kaisen 2nd Season, Naruto: Shippuden, Classroom of the Elite III, 
              Mashle: Magic and Muscles, Attack on Titan </i>
</p>
        </div>
    )
}


// box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);