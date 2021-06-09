import React from 'react';
import logo from './assets/tflogo.png'
import loader from './assets/grid.svg'

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
                onClick={() => parent.selectCreate()}
                style={{marginRight: "10px"}}
              >Get Started</button>

            </p>
            <p>
              
            
            </p>
        </div>
       
      </div>
    );
  }
}

const card = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  width: '30vw',
  marginTop: '0%',
  border: '2px solid steelblue',
  padding: '10px',
  display:'inline-block'
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