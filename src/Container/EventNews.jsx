import React from 'react'
import {Link} from 'react-router-dom'
import data from '../json/data.json'


export default function EventNews(props){

    var c = data['posts']
    var allPost = []
    for(var i in c) allPost.push(c[i]);

    var t = data['tags']
    var tags = []
    for(var i in t) tags.push(t[i]);

    var sortedPost = tags.map( e => {
        return allPost.filter( d => {
            console.log(d.tag)
            return d.tag === e 
        })
    })

    console.log(sortedPost)

    return(
        <div className='sub-wrapper'>
            <h1>Event and News</h1>
            {
                tags.map( (e, id) => <EventTypes tag={e} posts={sortedPost[id]} /> )
            }
        </div>
    )
}

function EventTypes(props) {
    console.log(props)
    return(
        <div className="eventnews-type">
            <h3>{props.tag}</h3>
            {
                props.posts.map( e => <EventTitle data={e} /> )
            }
        </div>
    )
}

function EventTitle(props) {
    return(
        <div className='eventnews'>
            <Link to={`/${props.data["id"]}`}>
                <span className='eventnews-date'> {props.data["date"]} </span>
                <span className='eventnews-title'> {props.data["title"]} </span>
            </Link>
        </div>
    )
}