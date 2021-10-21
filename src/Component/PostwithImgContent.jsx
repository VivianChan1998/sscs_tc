import React from 'react'
import {Link} from 'react-router-dom'

export default class PostwithImgContent extends React.Component{
    render(){
        return(
            <Link to={'/'+this.props.id}>
                <div className="Post-img-content" >
                        <div className='Post-img'>
                            <img src={this.props.imageURL} alt="cover"></img>
                        </div>
                        
                        <div className='Post-text'>
                            <h2>{this.props.title}</h2>
                            <p>
                                {this.props.content}
                            </p>
                        </div>
                    </div>
                    
            </Link>
        )
    }
}
//<img src={this.props.imageURL} />