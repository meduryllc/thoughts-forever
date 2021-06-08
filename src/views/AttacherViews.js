import React from 'react';
import PlayerViews from './PlayerViews';
import loader from './assets/grid.svg'

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher" style={{display:'inline-block', float:'left', width:'100%'}}>
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
        <p style={{fontSize:'15px', marginBottom: '10px'}}>Please paste the contract info to join a stream:</p>
        <br />
        <textarea spellCheck="false"
          className='ContractInfo'
          columns="30"
          rows="5"
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Join</button>
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
        <br/>
        <img src={loader} style={{marginTop: '5%'}}/>
      </div>
    );
  }
}

exports.ViewStreamName = class extends React.Component {
  render() {
    const {parent, streamName} = this.props;
    
    return (
      <div style={create_or_subscribe}>
        Subscribing to: <strong>{streamName}</strong>
        <br/>
         <button
          onClick={() => {
            parent.subscribe('Yes');
          }}
        >Confirm</button>
        <button
          style={{backgroundColor: 'grey'}}
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
    const {parent, posts, alreadyViewed} = this.props;
    
    var today = new Date();
    var month = parseInt(today.getMonth() + 1);
    var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    today=months[month]+' '+today.getDate();
    return (
      <div >
        <p style={{fontSize:'20px', textAlign:'left', marginLeft:'35%'}}>Thoughts so far:</p>
        
          
            {posts.map(post => {
              return (
                /*
                <div style={card_attach}>
                  <p style={{size: '10px'}}>{post}</p>
                </div>
                */
                <div key={post.thought} style={tweet}>
       
                <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>Alice</strong></span><p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@{post.stream} | {today}</p>
                
                  <p style={{fontSize: '20px', marginLeft: '10%'}}>{post.thought}</p>
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
        Please wait while we retrieve thoughts....
        <br />

        <img src={loader} style={{marginTop: '5%'}}/>
      </div>
    );
  }
}

exports.EndStream = class extends React.Component {
  render() {
    const {parent, thought} = this.props;
    return (
      <div style={card_attach}>
          <h3>Thank you! The stream has stopped. </h3>
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
  width: '500px',
  textAlign: 'left',
  marginTop: '2%'
}

const create_or_subscribe = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  width: '50vw',
  marginLeft: '25%',
  border: '2px solid steelblue',
  padding: '10px',
}

export default exports;