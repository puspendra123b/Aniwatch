import one from '/images/onepiece.jpg'

export function SideCard({prop}){
    return (
        <div style={{
            display : "flex",
            alignItems : 'center',
        }}>
            <h3 style={{
                marginLeft : '10px'
            }}>01</h3>
            <div style={{
                display : "flex",
                alignItems : 'center',
                borderBlockEnd : "1px solid #6B7478"
            }}>
                <img style={{
                    height : '80px',
                    width : '60px',
                    borderRadius : "5px",
                    margin : "10px"
                }} src={one} alt="One Piece" />
                <h4 style={{
                    width : "100px"
                }}>One Piece</h4>
            </div>
        </div>
    )
}