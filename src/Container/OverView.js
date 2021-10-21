import React from 'react'
import Post from '../Component/PostwithImgContent.jsx'
import './container_style.css'
import data from '../json/data.json'


export default class Overview extends React.Component{
    render(){
        return(
            <div className='Overview-wrapper'>
                {data[this.props.activeTag].map(
                    e => {
                        var d = data.posts[e]
                        return <Post imageURL={d.imageURL} id={d.id} key={d.id}
                            title={d.title} content={d.content} setDetail={this.props.setDetail} mdURL={d.md} />
                    }
                )}
            </div>
        )
        
    }
}




