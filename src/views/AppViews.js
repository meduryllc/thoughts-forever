import React from 'react';
import logo from './assets/tflogo.png'
import loader from './assets/grid.svg'
import all_logos from './assets/Reach-ThoughtsForever.png'
import algosigner_image from './assets/algosigner.png'

import teamMembers from './assets/sai-lalith.png'
import algoAddress from './assets/algorand-address.png'

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    const parent = this.props.content.props.parent;
    const home = this.props.content.props.parent.state.home;
    
    const displayQR = (this.state || {}).displayQR || false;

    const showQR = () => {
      this.setState({displayQR:true});  
    }

    const hideQR = () => {
      this.setState({displayQR: false})
    }

   
    return (
      <div className="App" >
        
        <header className="App-header" id="root" style={{backgroundColor:'white'}} >
          {home ? null : 
            <div style={{textAlign: 'left'}}>
              <img src={logo} alt="Thoughts Forever" style={{textAlign: 'left',display:'inline',verticalAlign:'top', height:'100px', marginLeft: '10%', width:'225px'}} onClick={() => parent.skipFundAccount()}/>
              
              <hr style={{backgroundColor:'steelblue'}}/>
              
            </div>
          }
          
          {content}
          <footer style={{position:'fixed', bottom:'0', width:'100%', backgroundColor:'#28363D'}}>
            
            <p style={{fontSize:'17px', color:'white'}}>&#169; Thoughts Forever 2021</p>
            <p style={{fontSize:'15px', color:'white'}}>If you like what you see, please consider donating Algos to: <span onMouseEnter={showQR} onMouseLeave={hideQR}>UDCQSPHSOGK5TLCM5PWIHP3RIJ5MPC2MTQPCTQUJQYNYGI6SLJYKROQ3VQ</span></p>
            { displayQR ? 
              <img src={algoAddress} alt="UDCQSPHSOGK5TLCM5PWIHP3RIJ5MPC2MTQPCTQUJQYNYGI6SLJYKROQ3VQ" /> : null
            }
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
        <img src={loader} alt="Loading" style={{marginTop: '5%'}}/>
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
           <img src={logo} alt="Thoughts Forever" style={{height:'100%', marginLeft: '10%', width:'90%', marginBottom: '2%'}}/>
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
    
    return (
      <div >
    
        <img src={all_logos} alt="Reach and Algorand" />
        <br />
        <div style={about_us}>
          About Us: 
          <div style={{fontSize:'20px', textAlign:'center', marginTop: '3%', padding: '10px', marginBottom:'2%'}}>
            <strong>Thoughts Forever</strong> is a Decentralized Application (DApp) developed using <strong><a href="https://reach.sh/">Reach</a></strong> and the <strong><a href="https://www.algorand.com/">Algorand</a></strong> blockchain platform.<br/>
            It was developed as a project during the Universities Unchained Hackathon 2021.
            <br/>
            <div style={{marginTop:'5%'}}>
              
                <img src={teamMembers} alt="Sai and Lalith" style={{height:'60%', width:'60%'}}/>
              
            </div><br/>
            The team members of this project are:<br/><br/> 
            Sai Medury, a PhD. candidate at University of Tennessee, Chattanooga<br/><br/>
            Lalith Medury, a junior year undergraduate from Vidya Jyothi Institute of Technology, India<br/><br/>
            <br/><br/>
          </div>
        </div>
       
      </div>
    );
  }
}

exports.NoAlgosigner = class extends React.Component {
  render() {
    const {parent} = this.props;
    
    return (
      <div >
    
        <img src={all_logos} alt="Reach and Algorand" />
        <br />
        <div style={{...card, textAlign: 'center'}}>
          <img src={algosigner_image} alt="Algosigner" style={{height: '20%', width: '20%'}}/> <br/>
          This application is currently supporting Chrome Browser with Algosigner extension installed in it. You can download <a href="https://www.google.com/intl/en_in/chrome/">Chrome</a>, install <a href="https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm">Algosigner</a> and come back 
          to start using this application.

          <button
                onClick={() => parent.skipFundAccount()}
                style={{marginRight: "10px"}}
              >Try Again</button>

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

export default exports;