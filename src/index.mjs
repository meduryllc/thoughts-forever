import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(10);

  const accAlice = await stdlib.newTestAccount(startingBalance);
  const accBob = await stdlib.newTestAccount(startingBalance);

  const ctcAlice = accAlice.deploy(backend);
  const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

  const HAND = ['Rock', 'Paper', 'Scissors'];
  const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

  const Poster = (Who) => ({

    createStream : () => {
      const streamName = 'How terrible is Juventus?';
      console.log(`${Who} created a stream called ${streamName}`);
      return streamName;
    },

    post: () => {
      const message = 'hello this is a message';
      console.log(`${Who} posted ${message}`)
      return message;
    },

    continueStream: () => {
      //const options = ["STOP","CONTINUE"];
      const options = [0,1];
      const random = Math.floor(Math.random() * 2);
      const choice = options[random];
      const stopOrContinue = choice == 0 ? 'CONTINUE' : 'STOP';
      console.log(`${Who} chose to ${stopOrContinue} the stream`);
      return choice;
    }
  });

  const Subscriber = (Who) => ({
    subscribe: () => {
      return true;
    },

    seeStream: (name) => {
      console.log(`${Who} saw that a stream ${name} was created`);
      return true;
    },

    seeMessage: (message) => {
      console.log(`${Who} saw message ${message}`);
    }

  })

  await Promise.all([
    backend.Alice(
      ctcAlice,
      Poster('Alice'),
    ),
    backend.Bob(
      ctcBob,
      Subscriber('Bob'),
    ),
  ]);
  
})(); 

