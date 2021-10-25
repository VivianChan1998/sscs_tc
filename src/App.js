import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './App.css';
import './style.css'
import Overview from './Container/OverView'
import MD from './Component/MD.jsx'
import data from './json/data.json'
import Events from './Component/Events'
import EventNews from './Container/EventNews';
import Links from './Container/Links'
import About from './Container/About'
import Contact from './Container/Contact';
import img_logo from './img/logo.jpeg'
import logo_ieee from './img/top-logos/ieee.png'
import logo_sscs from './img/top-logos/scss.png'

var history = createBrowserHistory();

export default class App extends React.Component {
  
  render(){
    return(
      <div className='wrapper'>
        <div id="top">
          <div id='top-logos'>
            <img src={logo_ieee} />
            <img src={logo_sscs} />
          </div>
          <Nav />
          <Menu {...this.props}/>
        </div>
        
        <Switch>
          <Route exact path="/" render={()=><EventNews/>} history={history} />
          <Route path="/about" render={()=><About />} history={history} />
          <Route path="/links" render={()=><Links/>} history={history} />
          <Route path="/contact" render={()=><Contact/>} history={history} />
          {
            data['index'].map( e => 
              <Route path={`/${e}`} render={()=><Events data={data.posts[e]} />} history={history} />
            )
          }
        </Switch>

      </div>
    )
  }
}

function Nav(){
  return(
    <div id="Nav">
          <Link to='/'>
            <h1>IEEE Solid-State Circuits Society, Taipei Chapter</h1>
          </Link>
    </div>
  )
}//<img src={img_logo} />

function Menu(props){
  return(
    <div id="link-wrapper">
      <PageButton title="Event News" link='/' {...props}/>
      <PageButton title="About" link='/about' {...props}/>
      <PageButton title="Links" link='/links' {...props}/>
      <PageButton title="Contact" link='/contact' {...props}/>
    </div>
  )
}

function PageButton(props){
  var className = "link"
  if(props.activeTag === props.title){
    className = "link link-active"
  }
  return(
    <Link to={props.link}>
      <div className={className}>    
        <h3>
          {props.title}
        </h3>
      </div>
    </Link>
  )
}
