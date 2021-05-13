# User Requirements

[comment]: <> (Our term for tweet: thought)

## DApp concept
Censorship-resistant micro-blogging where clients subscribe to many event streams and launch their own

## Functional Requirements
- F1: (ID/ Auth) Users should be able to create an account 
- F2: (Thoughts) User's should be able to upload thoughts
- F3: (Streams) User's should be able to create streams and allow other users to "subscribe" these streams
- F4: (Stream Subscriptions) Users should be able to view all activity in a stream (in chronological order)

## Non-functional Requirements
- NF1: Scalable (10s of thoughts per second, 100s of users in a event stream subscription)
- NF2: Low Latency (Thoughts should be visible within 5s of posting)
- NF3: Censorship-resistant (People can't be kicked out or blocked out of this DApp)