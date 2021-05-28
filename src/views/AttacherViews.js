import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div style={card}>
        Please paste the contract info of a stream:
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    const {streamName} = this.props;
    return (
      <div style={card}>
        Subscribing {streamName}
      </div>
    );
  }
}

exports.ViewStreamName = class extends React.Component {
  render() {
    const {parent, streamName} = this.props;
    return (
      <div style={card_attach}>
        Subscribing to: <strong>{streamName}</strong>?
        <br/>
         <button
          onClick={() => {
            parent.subscribe('Yes');
          }}
        >Confirm</button>
        <button
          style={{backgroundColor: 'red'}}
          onClick={() => {
            parent.subscribe('No');
          }}
        >No</button>
      </div>
    );
  }
}


exports.ViewPost = class extends React.Component {
  render() {
    const {parent, posts} = this.props;
    var today = new Date();
    var month = parseInt(today.getMonth() + 1);
    var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    today=months[month]+' '+today.getDate();
    return (
      <div >
        <p style={{fontSize:'20px', textAlign:'left', marginLeft:'35%'}}>Posts:</p>
        
          
            {posts.map(post => {
              return (
                /*
                <div style={card_attach}>
                  <p style={{size: '10px'}}>{post}</p>
                </div>
                */
                <div style={tweet}>
       
                <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>Alice</strong></span><p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@alice | {today}</p>
                
                  <p style={{fontSize: '20px', marginLeft: '10%'}}>{post}</p>
                </div>
              )
            })}
          
        
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div >
        Waiting for posts...
        <br />
      </div>
    );
  }
}

const card = {
  marginTop: '20px',
  color: '#000000',
  backgroundColor: '#FFFFFF',
  
  borderRadius: '10px',
  marginRight: '10%',
  marginLeft: '10%',
  border: '2px solid steelblue',
  padding: '10px',
  
}

const card_attach = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  width: '30vw',
  marginLeft: '35%',
  border: '2px solid steelblue',
  padding: '10px'
}

const tweet = {
  ...card_attach,
  textAlign: 'left',
  marginTop: '2%'
}

export default exports;