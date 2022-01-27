import './roadmap.css'
import classNames from 'classnames';

type Props = {
    src: string,
    number: string,
    text: string,
    reverse?: boolean
}
function RoadmapItem (props: Props){
    const classes = classNames('roadmap-item-container', { reverse: props.reverse })
    return (
        <div className={classes} >
            {/* <div>
                <img alt={props.src} src={props.src}></img>
            </div> */}
            <div className='number'>{props.number}</div>
            <div>
                <p className='roadmap-text'>{props.text}</p>
            </div>
        </div>
    )
} 

export default RoadmapItem;