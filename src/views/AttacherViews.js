import React from 'react';
import loader from './assets/grid.svg'
import '../index.css'

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    
    const sawFirstPost= this.props.content.props.sawFirstPost;
    const joinStream=this.props.content.props.joinStream;
    const seePosts=this.props.content.props.seePost;
    const parent = this.props.content.props.parent;
    
    if(sawFirstPost && joinStream) parent.joinNewStream();
    if(!joinStream && sawFirstPost && !seePosts) parent.viewPosts();
    
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
      <div className='CardAttach'>
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
      <div className='CardAttach'>
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
      <div className='CreateOrSubscribe'>
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
               
                <div key={post.thought} className='SubscriberTweet'>
       
                <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>{post.address.substring(0,6)+'....'}</strong></span><p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@{post.stream} | {today}</p>
                
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
    
    return (
      <div className='WideCard'>
          <h3>Thank you! The stream has stopped. </h3>
      </div>
    );
  }
}



export default exports;