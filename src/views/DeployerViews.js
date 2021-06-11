import React from 'react';
import loader from './assets/grid.svg'
import read from './assets/readIcon.png'
import post from './assets/postIcon.png'
import join from './assets/joinIcon.png'
import help from './assets/help.png'
import '../index.css'

const exports = {};

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
    const helpStyle = (this.state || {}).helpStyle || inactive;
    
    const poster = () => {
      this.setState({posterStyle:active})
    }

    const subscriber = () => {
      this.setState({subscriberStyle:active});
    }

    const joinNewStream = () => {
      this.setState({joinStyle:active});
    }
    const onHelp = () => {
      this.setState({helpStyle:active});
    }

    const mouseLeave = () => {
      this.setState({posterStyle:inactive, subscriberStyle:inactive, joinStyle:inactive, helpStyle:inactive});
    }
   
    return (
      <div className="Deployer" style={{display:'inline', float:'left', width:'100%'}}>
        <div className="Buttons">
          <div style={posterStyle} onClick={() => parent.selectCreate()} onMouseEnter={() => poster()} onMouseLeave={() => mouseLeave()}>
            <img className="Icons" src={post} /> <p style={{display:'inline', fontSize:'60%'}}>Post Thoughts</p>
          </div>
          <div style={subscriberStyle} onClick={() => parent.selectView()} onMouseEnter={() => subscriber()} onMouseLeave={() => mouseLeave()}>
            <img className="Icons" src={read} /> <p style={{display:'inline', fontSize:'60%'}}>Read Thoughts</p>
          </div>
          <div style={joinStyle} onClick={() => parent.selectJoin()} onMouseEnter={() => joinNewStream()} onMouseLeave={() => mouseLeave()}>
            <img className="Icons" src={join} /> <p style={{display:'inline', fontSize:'60%'}}>Join Stream</p>
          </div>
          <div style={helpStyle} onClick={() => parent.help()} onMouseEnter={() => onHelp()} onMouseLeave={() => mouseLeave()}>
            <img className="Icons" src={help} /> <p style={{display:'inline', fontSize:'60%'}}>Help</p>
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
    
    let getSizeOfStream = (stream) => {
      this.setState({lengthOfStream: stream.length, streamName: stream, overboard:false})
      
    }
    
    return (
     
      <div className='CardDeploy'>
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
      
      
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, streamName} = this.props;
    return (
      <div className='CreateOrSubscribe'>
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
      <div className='Card'>
        
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

exports.Help = class extends React.Component {

  /*
  <p>A <strong>thought</strong> is a post of utmost 140 characters (we currently only allow ASCII characters). <br/></p>
        <p>A <strong>stream </strong>is a collection of thoughts posted by a user. <br /></p>
        <p>To create a stream, click on <img style={image_style} src={post} /> Post Thoughts on the top. <br /></p>
        <p>After providing a name to the stream and clicking on deploy, the contract information will be displayed on the screen. <br/></p>
        <p>This information must be shared with the subscribers to allow them to subscribe to your stream.</p>
        <p>Atleast one user must subscribe to your stream before you start sharing your thoughts.</p>
        <p>To join a stream, click on <img style={image_style} src={join} /> Join Stream on the top. <br /></p>
        <p>Enter the contract information shared by the creator of the stream to subscribe.<br /></p>
        <p>You'll be able to view thoughts posted by the creator after subscribing to the stream.<br /></p>
        <p>You can join unlimited streams. <br/></p>
        <p>You can view all the thoughts from all the streams you've subscribed to in the <img style={image_style} src={read} /> Read Thoughts section.</p>
        */
  
  render() {
    
    
    return (
      <div className='Card'>
        Help Section
        <div style={{textAlign:'left', fontSize:'20px', marginTop:'3%', marginBottom:'3%'}}>
       <ol>
         <li>A <strong>thought</strong> is a post of utmost 140 characters (we currently only allow ASCII characters).</li><br/>
         <li>A <strong>stream </strong>is a collection of thoughts posted by a user.</li> <br/>
         <li>To create a stream, click on <img className='Icons' src={post} /> Post Thoughts on the top.</li> <br/>
         <li>After providing a name to the stream and clicking on deploy, the contract information will be displayed on the screen.</li> <br/>
         <li>This information must be shared with the subscribers to allow them to subscribe to your stream.</li> <br/>
         <li>Atleast one user must subscribe to your stream before you start sharing your thoughts.</li> <br/>
         <li>To join a stream, click on <img className='Icons' src={join} /> Join Stream on the top. </li> <br/>
         <li>Enter the contract information shared by the creator of the stream to subscribe.</li> <br/>
         <li>You'll be able to view thoughts posted by the creator after subscribing to the stream.</li> <br/>
         <li>You can join unlimited streams.</li> <br/>
         <li>In the <img className='Icons' src={read} /> Read Thoughts section, you can view all the thoughts from the streams you've subscribed to earlier.</li> <br/>
         
       </ol>
        

        </div>
      </div>
    )
  }
}

exports.PostThought = class extends React.Component {
  render() {
    const {parent, posts, streamName, address} = this.props;
    
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
           
            <div key={post} className='Tweet'>
    
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
    const {parent} = this.props;
    return (
      <div className='CardDeploy'>
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
    
    return (
      <div className='CardDeploy'>
          <h3>Thank you! The stream has stopped. </h3>
      </div>
    );
  }
}

export default exports;