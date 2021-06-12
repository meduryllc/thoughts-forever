'reach 0.1';

//Enumerated data type for identifying the status of the stream
const [ isStatus, START, STOP ] = makeEnum(2);

//Common interface shared between poster and subscriber
const common = {
  endStream: Fun([], Null)
}

//Poster interface; poster of a stream can only execute these methods
const Poster = {
  ...common,
  post: Fun([], Bytes(140)),
  continueStream: Fun([], UInt),
  createStream: Fun([], Bytes(30)),
  streamName : Bytes(30)
};

//Subscriber interface; subscriber of a stream can only execute these methods
const Subscriber = {
  ...common,
  subscribe: Fun([],Bool),
  seeMessage: Fun([Bytes(140), Bytes(30), Address], Null),
  seeStream: Fun([Bytes(30)], Bool)
}

//Main logic of the DApp
export const main = Reach.App(
    {},
    //One poster and multiple subscribers
    [Participant('Alice', Poster), ParticipantClass('Bob', Subscriber)], 
    (A, B) => {
      
      A.only(() => {
        //retrieving name of the stream from frontend
        const streamName = declassify(interact.createStream()); 
        const creator = this;
      });
      //publishing name and creator address of the stream
      A.publish(streamName, creator); 
      commit();

      B.only(() => {
        //subscribing to the stream
        const subscribe = declassify(interact.seeStream(streamName)); 
      });
      B.publish(subscribe);
      
      //loop variable
      var status = START; 
      
      //loop invariant; no transfer of currency to and from the contract
      invariant(balance() == 0); 
      while(status == START){
        
        commit();

        A.only(() => {
          //retrieving the post from the frontend
          const message = declassify(interact.post()); 
        });
        
        //publishing the post
        A.publish(message); 
        commit();

        B.only(() => {
          
          //sending the message, name of the stream and the poster address to the frontend
          interact.seeMessage(message, streamName, creator) }); 

        A.only(() => {
          //retrieving the poster's decision on whether to continue or stop posting to the stream
          const stopNow = declassify(interact.continueStream()); 
        })

        A.publish(stopNow);
        status = stopNow;
        continue;
      }
      commit();
      
      //poster and subscriber are both notified that the stream has stopped
      each([A, B], () => {interact.endStream()}); 

      exit(); 
    
    }
);
