import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import * as reach from '@reach-sh/stdlib/ETH';


const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultStream: 'Reach is Fun', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    
    const bal = reach.formatCurrency(balAtomic, 4);
    
    this.setState({acc, bal});
    try {
      const faucet = await reach.getFaucet();
      this.setState({view: 'FundAccount', faucet});
    } catch (e) {
      
      this.setState({view: 'DeployerOrAttacher'});
    }
  }
  async fundAccount(fundAmount) {
    await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectJoin() { this.setState({view: 'Wrapper', ContentView: Subscriber}); }
  selectCreate() { this.setState({view: 'Wrapper', ContentView: Poster}); }
  render() { return renderView(this, AppViews); }
}

class Poster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'CreateStream'};
  }
  async setStreamName(streamName){
    this.setState({view: 'Deploy', streamName});
  }
  async createStream() { 
    return this.state.streamName; 
  }

  async post(){
    const thought = await new Promise(resolvePostedP => {
      this.setState({view: 'PostThought', resolvePostedP});
    });
    this.setState({view: 'SeePost', thought});
    return thought;
  }

  async continueStream(){
    const decision = await new Promise(resolveContinueP => {
      this.setState({view: 'ContinueOrStop', resolveContinueP});
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
    //this.wager = reach.parseCurrency(this.state.wager); // UInt
    
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    
  }
  render() { return renderView(this, DeployerViews); }
}

class Subscriber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach', posts: []};
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
  
  /*
  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
    });
  }
  */
  async seeMessage(post){
    
    this.setState({view: 'ViewPost', posts: [...this.state.posts, post]});
  }

  subscribe(yesOrNo) {
    
    if(yesOrNo == 'Yes'){
      this.state.resolveAcceptedP();
      this.setState({view: 'WaitingForTurn'});
    }
    else{
      this.setState({view: 'Attach'});
    }
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);