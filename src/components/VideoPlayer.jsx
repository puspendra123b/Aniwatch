import cricket from '/videos/cricket.mp4'
import ReactPlayer from 'react-player'

export function VideoPlayer(){
    return(
        <div > 
            <ReactPlayer url={cricket} 
            controls
            height='600px'
            width='100%'
            />
        </div>
    )
}