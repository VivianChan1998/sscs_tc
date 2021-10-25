import React from 'react'
import {Link} from 'react-router-dom'
import './component_style.css'

export default function Events(props){
    return(
        <div>
            <div className='event-wrapper'>
                <div className="event-info-wrapper" style={props.data.imgurl===''? {width: "100%"}:{}}>
                    <h2 className='event-date'>
                        {props.data.date}
                    </h2>
                    <h2 className='event-title'>
                        {props.data.title}
                    </h2>
                    <p>
                        {props.data['content'].map(e => {
                            return(
                                <div>
                                    {e}
                                    <br/>
                                    <br/>
                                </div>
                            )
                        })}
                    </p>
                    <a href={props.data.url} target="_blank">{props.data.link}</a>
                </div>
                <div className="event-img-wrapper" style={props.data.imgurl===''? {width: 0}:{}}>
                    <img src={props.data.imgurl} />
                </div>

            </div>
            <div className='event-back'>
                <Link to='/'>
                    {'<'} Back to Event and News
                </Link>
            </div>
        </div>
    )
}