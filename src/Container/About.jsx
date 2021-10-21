import React from 'react'
import data from '../json/data.json'
import img_chair from '../img/about/chair.jpeg'
import img_vice_chair from '../img/about/vice_chair.jpeg'
import img_treasurer from '../img/about/treasurer.png'
import img_secretary from '../img/about/secretary.jpeg'
import img_assistant from '../img/about/assistant.jpeg'


export default class About extends React.Component{
    render(){
        return(
            <div className='sub-wrapper'>
                <h1>About The IEEE SSCS TPE Organization</h1>
                <div className='about-content'>
                    <Members imgurl={img_chair} data={data.about.Chairman} />
                    <Members imgurl={img_vice_chair} data={data.about.Vice_Chairman} />
                    <Members imgurl={img_treasurer} data={data.about.Treasurer} />
                    <Members imgurl={img_secretary} data={data.about.Secretary} />
                    <Members imgurl={img_assistant} data={data.about.Assistant} />
                </div>
            </div>
        )
    }
}

function Members(props){
    return(
        <div className='member'>
            <div className='member-img'>
                <img src={props.imgurl}/>
            </div>
            <div className='member-info'>
                <h3>{props.data.title}</h3>
                <h4> {props.data.name_en} {props.data.name_ch} </h4>

                <p>{props.data.dept} <br/> {props.data.univ} </p>
                <p>
                    Email: <em>{props.data.email}</em>
                    <br/>
                    Tel: <em>{props.data.tel}</em>
                </p>
            </div>
        </div>
    )
}