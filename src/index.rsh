'reach 0.1';

const Poster = {
  post: Fun([], Bytes(128)),
};

const Subscriber = {
  subscribe: Fun([],Bool),
  seeMessage: Fun([Bytes(128)], Null),
}

export const main = Reach.App(
    {},
    [Participant('Alice', Poster), Participant('Bob', Subscriber)],
    (A, B) => {
      A.only(() => {
        /*
        const messages = Array.replicate(5, "message");
        const somelist = messages.set(0, declassify(interact.post())); 
        */
        const message = declassify(interact.post()); 
      });
      A.publish(message);
      // Constraints here
      commit();

      B.only(() => {
        const status = declassify(interact.subscribe()); });
      B.publish(status);

      commit();

      B.only(() => {
        //declassify(interact.seeMessage(somelist[0])); });
        declassify(interact.seeMessage(message)); });

      exit(); 
    
    }
);
