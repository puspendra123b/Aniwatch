import { Header } from "../components/Header";
import { Recomended } from "../components/Recomended";
import { VideoPlayer } from "../components/VideoPlayer";

export function Playing(){

const episodeName = [{

}]
    return (
        <div>
            <Header />
            <div style={{
                background : '#2E3234',
                height : '800px',
                margin : '3rem',
                display : 'flex',
            }}>
                <div style={{
                height : '100%',
                width : '300px',
                overflow : 'scroll'
                }}>
                    <div style={{
                        display :'flex',
                        alignItems : 'center',
                        justifyContent : 'space-between'
                    }}>
                        <h5 style={{
                            marginLeft : "10px"
                        }}>List of episodes: </h5>
                        <input style={{
                            height : "20px",
                            width : '100px',
                            marginRight : '10px'
                        }} type="text" placeholder="No. of episode" />
                    </div>
                    <div>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                        <li style={styles.list}>Hi There</li>
                    </div>
                </div>
                <div style={{
                    width : '80%',
                }}>
                    <VideoPlayer />

                </div>
            </div>
            <Recomended />
        </div>
    )
}

const styles = {
    list : {
        borderBlock : "1px solid grey",
        padding : '1rem',
        listStyle : 'number',
        cursor : 'pointer',
    }
}