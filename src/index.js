import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import * as reach from '@reach-sh/stdlib/ALGO';
//import * as reach from '@reach-sh/stdlib/ETH';


const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultStream: 'Reach is Fun', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {view: 'ConnectAccount', ...defaults, home: true};
  }
  async componentDidMount() {
    this.setState({view:'DeployerOrAttacher'});
    /*
    try {
      const faucet = await reach.getFaucet();
      this.setState({view: 'FundAccount', faucet});
    } catch (e) {
      
      this.setState({view: 'DeployerOrAttacher'});
    }
    */
  }

  async connectToAccount () {
    let isConnected = false;
    try{

      await reach.setProviderByName('TestNet');
      await reach.setSignStrategy('AlgoSigner');
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      this.setState({acc, bal});
      isConnected = true;
      
    }catch(error){
      isConnected = false;
      
    }
    return isConnected;

  }
  
  async fundAccount(fundAmount) {
    await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher', home: true}); }
  //selectJoin() { this.setState({home:false, poster: true, subscriber: false, view: 'Wrapper', ContentView: Subscriber}); }
  selectJoin() { this.setState({home:false, poster: false, subscriber: true, view: 'Wrapper', ContentView: Subscriber});}
  async selectCreate() {
    let isConnected = await this.connectToAccount(); 
    
    if(isConnected) this.setState({home:false, subscriber: false, poster:true, view: 'Wrapper', ContentView: Poster}); 
    else {
      this.setState({home:false, view: 'NoAlgosigner'});
    }
  }
  aboutUs() {this.setState({home:false, view:'AboutUs'})}
  
  render() { return renderView(this, AppViews); }
}

class User extends React.Component {
  async endStream(){
    this.setState({createdFirstPost: false, sawFirstPost:false, view: 'EndStream'});
  }
  
}


class Poster extends User {
  constructor(props) {
    super(props);

    const address = props.acc.getAddress();
    this.state = {view: 'CreateStream',posts: [], seePost:false, subscriberPosts: [], sawFirstPost: false, address:address, createdFirstPost: false}; 
  }
  
  async setStreamName(streamName){
    this.setState({view: 'Deploy', streamName});
  }
  async createStream() { 
    return this.state.streamName; 
  }

  selectJoin() {
    
    this.setState({home:false, poster: false, joinStream: true, subscriber: true, view: 'Wrapper', ContentView: Subscriber});
    
  }
  
  selectView() {
    
    if(!this.state.sawFirstPost) this.setState({home:false, poster: false, subscriber: true, view: 'Wrapper', ContentView: Subscriber});
    else {this.setState({home:false, poster: false, joinStream:false, subscriber: true, seePost:false, view: 'Wrapper', ContentView: Subscriber})}
  }
  selectCreate() { 
    if(this.state.createdFirstPost) this.setState({view: 'PostThought'}); 
    else this.setState({view: 'CreateStream'});
  }
  async post(){
    const thought = await new Promise(resolvePostedP => {
      
      this.setState({view: 'PostThought', posts: this.state.posts, resolvePostedP});
    });
    this.setState({view: 'SeePost', createdFirstPost:true, posts: [...this.state.posts, thought], thought});
    
    return thought;
  }

  async continueStream(){
    const decision = await new Promise(resolveContinueP => {
      this.setState({view: 'ContinueOrStop',  resolveContinueP});
    });
    return decision;
  }

  async postThought(thought) { this.state.resolvePostedP(thought); }

  async continue(decision) { 
    if(decision == 'Continue') decision = 0;
    else if(decision == 'Stop') decision = 1;
    this.state.resolveContinueP(decision);
  }

  async deploy() {
    const ctc = this.props.acc.deploy(backend);
    this.setState({view: 'Deploying', ctc});
    
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    
  }

  async help() {
    this.setState({view:'Help'})
  }

  
  render() { return renderView(this, DeployerViews); }
}

class Subscriber extends User {
  constructor(props) {
    super(props);
    
    if(props.sawFirstPost && !props.joinStream) {this.state = {view: 'ViewPost', alreadyViewed: true, posts: props.subscriberPosts}}
    else {this.state = {view: 'Attach', posts: []}};
  }
  joinNewStream() {
    this.props.parent.setState({joinStream:false});
    this.setState({view:'Attach'})
  }
  
  viewPosts() {
    this.props.parent.setState({seePost:true});
    this.setState({view:'ViewPost'})
  }
  
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Bob(ctc, this);
  }
  
  async seeStream(streamName){
    await new Promise(resolveAcceptedP => {
      this.setState({view: 'ViewStreamName', streamName, resolveAcceptedP});
    });
    return true;
  }
  
  async seeMessage(post, streamName, address){
    let newPost = {
      thought: post,
      stream: streamName,
      address: address
    }
    this.props.parent.setState({subscriberPosts: [...this.props.parent.state.subscriberPosts, newPost],seePost:true, sawFirstPost: true});
    
    await this.setState({view: 'ViewPost', alreadyViewed:false, posts: [...this.state.posts, newPost]});
  }

  subscribe(yesOrNo) {
    
    if(yesOrNo == 'Yes'){
      this.state.resolveAcceptedP();
      this.setState({view: 'WaitingForTurn', joining:true});
    }
    else{
      this.setState({view: 'Attach'});
    }
  }

  
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);