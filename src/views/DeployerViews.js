import React from 'react';
import PlayerViews from './PlayerViews';
import loader from './assets/grid.svg'

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

/*
<button style={nav_buttons} onClick={() => parent.post()}>Post</button>
<button style={nav_buttons} onClick={() => parent.selectJoin()}>Streams</button>
*/

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    const parent = this.props.content.props.parent;
    
    return (
      <div className="Deployer" style={{display:'inline-block', float:'left', width:'100%'}}>
        <button style={nav_buttons} onClick={() => parent.selectCreate()}>Post</button>
        <button style={nav_buttons} onClick={() => parent.selectJoin()}>Streams</button>
        {content}
      </div>
    );
  }
}

exports.CreateStream = class extends React.Component {
  render() {
    const {parent, defaultStream} = this.props;
    const streamName = (this.state || {}).streamName || defaultStream;
    
    return (
     
      <div style={card_deploy}>
        <h2>New Stream</h2>
        <input
          type='text'
          style={{height: "30px", width: "400px"}}
          placeholder={defaultStream}
          onChange={(e) => this.setState({streamName: e.currentTarget.value})}
        /> 
        <br />
        <button
         
          onClick={() => parent.setStreamName(streamName)}
        >Create</button>
      </div>
      /*
     <div>
       <div style={tweet}>
       
        <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>Alice</strong></span><p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@alice | May 28</p>
        
        <p style={{fontSize: '20px', marginLeft: '10%'}}>This is my first post</p>
          
      </div>
      <div style={{marginTop:'5%'}}>
        <p style={{fontSize:'20px', textAlign:'left', marginLeft:'35%'}}>New Post:</p>
        <textarea style={{width:'31vw', marginLeft:'1%'}}
          rows={6}
          cols={6}
          placeholder='...'
          onChange={(e) => this.setState({thought: e.currentTarget.value})}
        /> 
        <br />
      </div>
      
      
     </div>
     */
      
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, streamName} = this.props;
    return (
      <div style={card_deploy}>
        Creating Stream: <strong>{streamName}</strong>
        <br />
        <button
          onClick={() => parent.deploy()}
        >Create</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Creating your stream... please wait.<br/><img style={{marginTop: '5%'}} src={loader}/></div>
      
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipborad(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div style={card}>
        
        <br /> Subscribers can join by entering the following contract information
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipborad(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

exports.PostThought = class extends React.Component {
  render() {
    const {parent, defaultStream, posts} = this.props;
    const streamName = (this.state || {}).streamName || defaultStream;
    const thought = (this.state || {}).thought;
    var today = new Date();
    var month = parseInt(today.getMonth() + 1);
    var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    today=months[month]+' '+today.getDate();
    var printPosts='';
    if(posts.length!=0) printPosts='My Posts';
    
    return (
      <div >
        <div>
          <p style={{fontSize:'20px', textAlign:'left', marginLeft:'35%'}}>New Post:</p>
          <textarea style={{width:'31vw', marginLeft:'1%'}}
            rows={6}
            cols={6}
            placeholder='...'
            onChange={(e) => this.setState({thought: e.currentTarget.value})}
          /> 
          <br />
        </div>
        <button
          onClick={() => parent.postThought(thought)}
        >Post</button>

        <p style={{fontSize:'20px', textAlign:'left', marginLeft:'35%'}}>{printPosts}</p>
        {posts.map(post => {
          return (
            /*
            <div style={card_attach}>
              <p style={{size: '10px'}}>{post}</p>
            </div>
            */
            <div key={post} style={tweet}>
    
            <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>Alice</strong></span><p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@alice | {today}</p>
            
              <p style={{fontSize: '20px', marginLeft: '10%'}}>{post}</p>
            </div>
          )
        })}
        
        
      
        
      </div>
    );
  }
}

exports.SeePost = class extends React.Component {
  render() {
    
    return (
      <div >
        Uploading your post.... please wait.
        <br/>
        <img src={loader} style={{marginTop: '5%'}}/>
         
      </div>
    );
  }
}

exports.ContinueOrStop = class extends React.Component {
  render() {
    const {parent, thought} = this.props;
    return (
      <div style={card_deploy}>
          Do you want to continue or stop posting?
          <br/>
         <button
          onClick={() => {
            parent.continue('Continue');
          }}
        >Continue</button>
        <button
          onClick={() => {
            parent.continue('Stop');
          }}
        >Stop</button>
      </div>
    );
  }
}

const card = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  marginRight: '10%',
  marginLeft: '10%',
  border: '2px solid steelblue',
  padding: '10px'
}

const card_deploy = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  width: '30vw',
  marginLeft: '35%',
  border: '2px solid steelblue',
  padding: '10px',
  
}

const tweet = {
  ...card_deploy,
  textAlign: 'left',
  marginTop:'2%'
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