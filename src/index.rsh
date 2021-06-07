'reach 0.1';

const [ isStatus, START, STOP ] = makeEnum(2);

const common = {
  endStream: Fun([], Null)
}

const Poster = {
  ...common,
  post: Fun([], Bytes(140)),
  continueStream: Fun([], UInt),
  createStream: Fun([], Bytes(30)),
  streamName : Bytes(30)
};

const Subscriber = {
  ...common,
  subscribe: Fun([],Bool),
  seeMessage: Fun([Bytes(140), Bytes(30)], Null),
  seeStream: Fun([Bytes(30)], Bool)
}

export const main = Reach.App(
    {},
    [Participant('Alice', Poster), ParticipantClass('Bob', Subscriber)],
    (A, B) => {
      
      A.only(() => {
        const streamName = declassify(interact.createStream());
      });
      
      A.publish(streamName);
      commit();

      B.only(() => {
        const subscribe = declassify(interact.seeStream(streamName));
      });
      B.publish(subscribe);
      
      var status = START;
      invariant(balance() == 0);
      while(status == START){
        
        commit();

        A.only(() => {
          const message = declassify(interact.post()); 
        });
        A.publish(message);
        // Constraints here
        commit();

        B.only(() => {
          //declassify(interact.seeMessage(somelist[0])); });
          interact.seeMessage(message, streamName) });

        A.only(() => {
          const stopNow = declassify(interact.continueStream());
        })
        A.publish(stopNow);

        status = stopNow;
       

        continue;
      }
      commit();

      each([A, B], () => {interact.endStream()}); 

      exit(); 
    
    }
);
