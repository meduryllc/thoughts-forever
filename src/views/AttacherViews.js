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
        Please paste the contract info to attach to:
        <br />
        <textarea spellcheck="false"
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
        Subscribing to {streamName}
      </div>
    );
  }
}

exports.ViewStreamName = class extends React.Component {
  render() {
    const {parent, streamName} = this.props;
    return (
      <div style={card}>
        Do you want to subscribe to: <strong>{streamName}</strong>?
        <br/>
         <button
          onClick={() => {
            parent.subscribe('Yes');
          }}
        >Yes</button>
        <button
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
    return (
      <div >
        Posts: <br/> <br/>
        
          
            {posts.map(post => {
              return <div style={card}>{post}</div>
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

export default exports;