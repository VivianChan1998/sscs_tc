import React from 'react'
import img_IEEE from '../img/links/ieee.jpeg'
import img_SCSS from '../img/links/scss.jpeg'
import img_IEEETW from '../img/links/ieee_tw.gif'



export default class Links extends React.Component{
    render(){
        return(
            <div className='sub-wrapper'>
                <h1>Links</h1>
                <div className='link-content'>
                    <Link imgsrc={img_IEEE} url="https://www.ieee.org/" name="IEEE" />
                    <Link imgsrc={img_SCSS} url="https://sscs.ieee.org/" name="SSCS" />
                    <Link imgsrc={img_IEEETW} url="http://www.ieee.org.tw/" name="IEEE Taipei" />
                </div>
            </div>
        )
    }
}

function Link(props){
    return(
        <div className='links-wrapper'>
            <a href={props.url}>
                <img src={props.imgsrc} />
            </a>
        </div>
    )
}