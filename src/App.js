import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './App.css';
import './style.css'
import Overview from './Container/OverView'
import MD from './Component/MD.jsx'
import data from './json/data.json'
import Event from './Container/Event';
import Links from './Container/Links'
import img_logo from './img/logo.jpeg'

var history = createBrowserHistory();

export default class App extends React.Component {
  
  render(){
    return(
      <div className='wrapper'>
        <div id="top">
          <Nav />
          <Menu {...this.props}/>
        </div>
        
        <Switch>
          <Route exact path="/" render={()=><Event/>} history={history} />
          <Route path="/about" render={()=><h1>about</h1>} history={history} />
          <Route path="/links" render={()=><Links/>} history={history} />
          <Route path="/contact" render={()=><h1>contact</h1>} history={history} />
          {
            data.all.map(e => {
              var d = data.posts[e]
              return <Route path={"/"+d.id} key={d.id} history={history} render={()=>{
                return(
                  <div className='wrapper'>
                    <div>
                      <Nav />
                      <Menu/>
                      <button className='back' onClick={() => history.goBack()}>
                        {/*<Link to='/'>*/}
                        <h3>{"<"} Back to Front Page</h3>
                        {/*</Link>*/}
                      </button>
                      <MD mdURL={d.md}/>
                      <button className='back' onClick={() => history.goBack()}>
                          <h3>{"<"} Back to Front Page</h3>
                      </button>
                    </div>
                  </div>
                )
                
              }}></Route>
            })
          }
          
        </Switch>
      </div>
    )
  }
}

class Main extends React.Component {
  render(){
    return (
      <div className='wrapper'>
          <Nav />
          <Menu {...this.props}/>
          
      </div>
    );
  }
}

function Nav(){
  return(
    <div id="Nav">
          <Link to='/'>
            <h1>IEEE SSCS Taipei Chapter</h1>
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
      <PageButton title="contact" link='/contact' {...props}/>
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
