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
    post: () => {
      const message = 'hello this is a message';
      console.log(`${Who} posted ${message}`)
      return message;
    },
  });

  const Subscriber = (Who) => ({
    subscribe: () => {
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

