import React from 'react'
import {Link} from 'react-router-dom'
import data from '../json/data.json'


export default class EventNews extends React.Component{
    render(){
        return(
            <div className='sub-wrapper'>
                <h1>Event and News</h1>
                {
                    data['index'].map( e => <EventTitle id={e} /> )
                }
            </div>
        )
    }
}

function EventTitle(props) {
    var d = data['posts'][props.id]
    return(
        <div className='eventnews'>
            <Link to={`/${props.id}`}>
                <span className='eventnews-date'> {d["date"]} </span>
                <span className='eventnews-title'> {d["title"]} </span>
            </Link>
        </div>
    )
}