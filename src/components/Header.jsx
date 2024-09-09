import logo from '/images/logo.png'
import rikka from '/images/rikka.gif'

export function Header(){
    return (
        <div>
            <div style={{
                display : 'flex',
                justifyContent : "space-between",
                alignItems : "center",
                height : "60px",
                marginTop : "none"
            }
            }>
                <div >
                    <img style={{
                    height : "45px"
                }} src={logo} alt="aniwatch" />
                </div>
                <div>
                    <button>🔍</button>
                    <button style={{
                        background: "#ffdd95",
                        color : "black"
                    }}>Login</button>
                </div>
            </div>
            <div style={{
                background : '#0A0C0D',
                height : '100px',
                display :'flex',
                alignItems : 'center'
            }}>
                <img style={{
                    height : '70px',
                    borderRadius : "50px",
                    marginLeft : '1rem'
                }} src={rikka} alt="" />
                <h4 style={{
                    marginLeft : '1rem'
                }}>
                    Share AniWatch To Your Friends
                </h4>
            </div>
        </div>
        
    )
}