# Thoughts Forever
Censorship-resistant Micro-blogging App developed using Reach DApp programming language

Authors: Lalith Medury and Sai Medury

*Developed during Universities Unchained Hackathon 2021*

## Build Instructions

This DApp can be built and tested out on Linux OS.
### Software Requirements
- [make](https://www.gnu.org/software/make/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Reach sh](https://docs.reach.sh/tut-1.html) 

### Run React app using Reach

After required software are installed, this app can be run on local docker container using Reach commands.

#### Choose backend smart-contract platform

Reach enables us to deploy the same application with different blockchain platforms as backend. Using the appropriate environment variable to choose the right backend.

```bash
# Deploy on Algorand
export REACH_CONNECTOR_MODE=ALGO

# or Deploy on Ethereum
export REACH_CONNECTOR_MODE=ETH
```

#### Launch DApp on local docker container

The following command will launch Thoughts Forever DApp on local docker container (image provided by Reach)

```bash
reach react
```
The app should then open on your browser window at port 3000.