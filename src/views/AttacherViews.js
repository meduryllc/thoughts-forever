import React from 'react';
import PlayerViews from './PlayerViews';

const exports = {...PlayerViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Subscriber (Bob)</h2>
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
      <div>
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
      <div>
        Subscribing to {streamName}
      </div>
    );
  }
}

exports.ViewStreamName = class extends React.Component {
  render() {
    const {parent, streamName} = this.props;
    return (
      <div>
        Do you want to subscribe to: <strong>{streamName}</strong>?
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

exports.ViewStreamName = class extends React.Component {
  render() {
    const {parent, streamName} = this.props;
    return (
      <div>
        Do you want to subscribe to: <strong>{streamName}</strong>?
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
    const {parent, post} = this.props;
    return (
      <div>
        They posted: <strong>{post}</strong>
      </div>
    );
  }
}

exports.WaitingForTurn = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for posts...
        <br />
      </div>
    );
  }
}

export default exports;