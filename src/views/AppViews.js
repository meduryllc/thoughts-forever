import React from 'react';
import logo from './assets/tflogo.png'
import loader from './assets/grid.svg'
import all_logos from './assets/Reach-ThoughtsForever.png'

import teamMembers from './assets/sai-lalith.png'


const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    const parent = this.props.content.props.parent;
    const home = this.props.content.props.parent.state.home;
    const poster = this.props.content.props.parent.state.poster;
    const subscriber = this.props.content.props.parent.state.subscriber;
    /*
        {poster ? null : (<button style={nav_buttons} onClick={() => parent.selectCreate()}>Start a Stream</button>) }
              
        {subscriber ? null: (<button style={nav_buttons} onClick={() => parent.selectJoin()}>Join a Stream</button>) }  
    */
    return (
      <div className="App" >
        
        <header className="App-header" id="root" style={{backgroundColor:'white'}} >
          {home ? null : 
            <div style={{textAlign: 'left'}}>
              <img src={logo} style={{textAlign: 'left',display:'inline',verticalAlign:'top', height:'100px', marginLeft: '10%', width:'225px'}} onClick={() => parent.skipFundAccount()}/>
              
              <hr style={{backgroundColor:'steelblue'}}/>
              
            </div>
          }
          
          {content}
          <footer style={{position:'fixed', bottom:'0', width:'100%', backgroundColor:'#28363D'}}>
            
            <p style={{fontSize:'20px', color:'white'}}>&#169; Thoughts Forever 2021</p>
            
          </footer>
        </header>
        
    
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account. <br/>
        <img src={loader} style={{marginTop: '5%'}}/>
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {bal, standardUnit, defaultFundAmt, parent} = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div>
        <h2>Fund account</h2>
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmt}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button onClick={() => parent.fundAccount(amt)}>Fund Account</button>
        <button onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div style={{marginTop: '10%'}}>
        
        <div style={card}>
           <img src={logo} style={{height:'100%', marginLeft: '10%', width:'90%', marginBottom: '2%'}}/>
            <br/>
            <em style={{fontSize:'60%'}}>Censorship-resistant Micro-blogging application.</em>
            <br />
            <p>
              <button
                onClick={() => parent.aboutUs()}
                style={{marginRight: "10px", backgroundColor:'#28363D'}}
              >About Us</button>
              <button
                onClick={() => parent.selectCreate()}
                style={{marginRight: "10px"}}
              >Get Started</button>
              

            </p>
            
        </div>
       
      </div>
    );
  }
}

exports.AboutUs = class extends React.Component {
  render() {
    const {parent} = this.props;
    
    return (
      <div >
    
        <img src={all_logos} />
        <br />
        <div style={about_us}>
          About Us: 
          <div style={{fontSize:'20px', textAlign:'left', marginTop: '3%', padding: '10px'}}>
            <strong>Thoughts Forever</strong> is a Micro-blogging Application built with <strong>Reach</strong> on <strong>Algorand</strong> during Universities Unchained Hackathon 2021. With this microblogging
            application, users can subscribe to unlimited streams and launch their own. The team members of this project include Sai Medury, a PhD. candidate
            from University of Tennessee, Chattanooga and Lalith Medury, a junior year undergraduate from Vidya Jyothi Institute of Technology, India. 
            <br/>
            <div style={{marginTop:'5%', marginLeft:'30%'}}>
              
                <img src={teamMembers} style={{height:'60%', width:'60%'}}/>
              
            </div>
            
          </div>
        </div>
       
      </div>
    );
  }
}


const card = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  width: '40vw',
  marginTop: '0%',
  border: '2px solid steelblue',
  padding: '10px',
  display:'inline-block'
}

const about_us= {
  ...card,
  width: '80vw'
}

const nav_buttons = {
  border: '2px solid black',
  borderRadius: '5px',
  color: 'black',
  backgroundColor: 'white',
  marginLeft: '2%',
  width:'20%',
  height:'10%',
  textAlign: 'left',
  marginTop: '0px',
  display:'block'
}

export default exports;