import React from 'react';
import PlayerViews from './PlayerViews';
import loader from './assets/grid.svg'
import read from './assets/readIcon.png'
import post from './assets/postIcon.png'
import join from './assets/joinIcon.png'


const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content } = this.props;
    const parent = this.props.content.props.parent;

    const active = {
      display:'inline', 
      border:'2px solid #D7772E', 
      backgroundColor: '#D7772E',
      borderRadius: '5px', 
      padding: '10px',
      marginLeft: '2%',
      color: 'white'
    }

    const inactive = {display: 'inline'}

    const posterStyle = (this.state || {}).posterStyle || inactive;
    const subscriberStyle = (this.state || {}).subscriberStyle || inactive;
    const joinStyle = (this.state || {}).joinStyle || inactive;
    
    const poster = () => {
      this.setState({posterStyle:active, subscriberStyle:inactive, joinStyle:inactive})
    }

    const subscriber = () => {
      this.setState({posterStyle:inactive, subscriberStyle:active, joinStyle:inactive});
    }

    const joinNewStream = () => {
      this.setState({posterStyle:inactive, subscriberStyle:inactive, joinStyle:active});
    }

    const mouseLeave = () => {
      this.setState({posterStyle:inactive, subscriberStyle:inactive, joinStyle:inactive});
    }
   
    return (
      <div className="Deployer" style={{display:'inline', float:'left', width:'100%'}}>
        <div style={buttons}>
          <div style={posterStyle} onClick={() => parent.selectCreate()} onMouseEnter={() => poster()} onMouseLeave={() => mouseLeave()}>
            <img src={post} style={image_style}/> <p style={{display:'inline', fontSize:'60%'}}>Post Thoughts</p>
          </div>
          <div style={subscriberStyle} onClick={() => parent.selectView()} onMouseEnter={() => subscriber()} onMouseLeave={() => mouseLeave()}>
            <img src={read} style={image_style}/> <p style={{display:'inline', fontSize:'60%'}}>Read Thoughts</p>
          </div>
          <div style={joinStyle} onClick={() => parent.selectJoin()} onMouseEnter={() => joinNewStream()} onMouseLeave={() => mouseLeave()}>
            <img src={join} style={image_style}/> <p style={{display:'inline', fontSize:'60%'}}>Join Stream</p>
          </div>
        </div>
        
        {content}
        
      </div>
    );
  }
}

exports.CreateStream = class extends React.Component {
  render() {
    const {parent, defaultStream} = this.props;
    const streamName = (this.state || {}).streamName || defaultStream;
    let lengthOfStream = (this.state || {}).lengthOfStream || 0;
    let lengthOfPost = (this.state || {}).lengthOfPost || 0;
    let getSizeOfStream = (stream) => {
      this.setState({lengthOfStream: stream.length, streamName: stream, overboard:false})
      
    }
    /*
    <input
          type='text'
          style={{height: "30px", width: "80%"}}
          placeholder={defaultStream}
          
          maxLength="30"
          onChange={(e) => getSizeOfStream(e.currentTarget.value)}
        /> 
        <br />
        <p style={{fontSize:'12px', textAlign:'right', marginRight:'12%'}}>{lengthOfStream}/30</p>
        <button
         
          onClick={() => parent.setStreamName(streamName)}
        >Create</button>
    */

    
    return (
     
      <div style={card_deploy}>
        <p style={{fontSize: '20px'}}>Start a new stream</p>
        
        <input
          type='text'
          style={{height: "30px", width: "80%"}}
          placeholder='Enter the name of stream'
          
          maxLength="30"
          onChange={(e) => getSizeOfStream(e.currentTarget.value)}
        /> 
        <br />
        <p style={{fontSize:'12px', textAlign:'right', marginRight:'12%'}}>{lengthOfStream}/30</p>
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
      <div style={create_or_subscribe}>
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
      <div>Creating your stream... please wait.<br/><img style={{marginTop: '5%', color:'black'}} src={loader}/></div>
      
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
        
        <br /> <p style={{fontSize: '1.5vw'}}>Subscribers can join by entering the following contract information</p> 
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
    const {parent, defaultStream, posts, streamName, address} = this.props;
    
    const userAddress = address.substring(0,6)+'...';
    const lengthOfPost = (this.state || {}).lengthOfPost || 0;
    const thought = (this.state || {}).thought;
    var today = new Date();
    var month = parseInt(today.getMonth() + 1);
    var months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    today=months[month]+' '+today.getDate();
    var printPosts='';
    if(posts.length!=0) printPosts='Thoughts so far:';
    
    return (
      <div >
        <div>
          <p style={{fontSize:'20px', textAlign:'left', marginLeft:'35%'}}>New Thoughts:</p>
          <textarea style={{width:'31vw', marginLeft:'1%'}}
            rows={6}
            cols={6}
            placeholder='...'
            maxLength="140"
            onChange={(e) => this.setState({thought: e.currentTarget.value, lengthOfPost:e.currentTarget.value.length})}
          /> 
        <p style={{fontSize:'12px', textAlign:'right', marginRight:'35%'}}>{lengthOfPost}/140</p>
        
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
    
            <span style={{fontSize: '20px', display:'inline'}}><img style={{width: '10%', height:'20%', display:'inline', verticalAlign:'top'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"/><strong>{userAddress}</strong></span><p style={{color:'grey', fontSize:'20px', marginLeft:'1%', display:'inline'}}>@{streamName} | {today}</p>
            
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
        Uploading your thought.... please wait.
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
        <button style={{backgroundColor:'grey'}}
          onClick={() => {
            parent.continue('Stop');
          }}
        >Stop</button>
      </div>
    );
  }
}

exports.EndStream = class extends React.Component {
  render() {
    const {parent, thought} = this.props;
    return (
      <div style={card_deploy}>
          <h3>Thank you! The stream has stopped. </h3>
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
  padding: '10px', 
  width: '85vw'
}

const card_deploy = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: '10px',
  width: '40vw',
  marginLeft: '30%',
  border: '2px solid steelblue',
  padding: '10px',
  
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

const tweet = {
  ...card_deploy,
  width: '500px',
  marginLeft: '35%',
  textAlign: 'left',
  marginTop:'2%'
}

const nav_buttons = {
  border: '2px solid black',
  borderRadius: '5px',
  color: 'black',
  backgroundColor: 'white',
  textAlign: 'center'
  
}

const buttons = {
  marginLeft: '2%', 
  width:'100%', 
  marginBottom:'50px', 
  marginTop: '5px'
}

const image_style = {width:'30px', height:'30px', verticalAlign:'top', marginLeft:'20px'}

export default exports;