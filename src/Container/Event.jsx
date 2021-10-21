import React from 'react'
import data from '../json/data.json'


export default class Event extends React.Component{
    render(){
        return(
            <div className='sub-wrapper'>
                <h1>Event and News</h1>
                {
                    data['index'].map( e => {
                        console.log(e)
                        return <Events data={data.posts[e]} />
                    })
                }
            </div>
        )
    }
}

function Events(props){
    return(
        <div className='event-wrapper'>
            <div className="event-info-wrapper">
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
            

            
            <div className="event-img-wrapper">
                <img src={props.data.imgurl} />
            </div>
        </div>
    )
}

