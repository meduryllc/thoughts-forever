import React from 'react';
import logo from './assets/tflogo.png'
import loader from './assets/grid.svg'

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        
        <header className="App-header" id="root">
          <img src={logo} style={{textAlign: 'left', height:'10%', width:'10%', marginLeft:'10%', marginBottom: '2%'}}/>
          {content}
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
        <img src={loader}/>
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
      <div style={card}>
        <img src={logo}/>
       
        <br />
        <p>
          <button
            onClick={() => parent.selectCreate()}
            style={{marginRight: "10px"}}
          >Start a stream</button>

          <button
            onClick={() => parent.selectJoin()}
          >Join a stream</button>
          
        </p>
        <p>
          
         
        </p>
      </div>
    );
  }
}

const card = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  width: '30vw',
  marginLeft: '35%',
  border: '2px solid steelblue',
  padding: '10px'
}

export default exports;