---

name: 'HTTP Gateways'
date: '2023-04-17'
days: 1
venueName: 'Radisson Grand Place, Brussels'
venueAddress: ''
difficulty: All Welcome
description: >-
  How do we deliver IPFS content to the masses? In this track, we'll dive into the magical and maddening topic of HTTP Gateways. Topics include the evolving semantics of /ipfs/cid, .car blocks and rendered flat files, and large-scale efforts to improve gateway architectures such as Project Saturn and Project Rhea.
priority: 2
attendees: 50
org: ''
times: '10:00 AM - 4:00 PM'
timeslots:
  - time: '13:00 - 13:30'
    speakers: 'Claudia Richoux'
    title: 'Live CDN Incentives and its Future'
    description: 'I'll be talking about how to do CDN incentivization at a protocol level correctly- the game theory is pretty simple and I independently converged on a design pretty similar to the one on Skynet. Adding a simple piece of novel cryptography to the payment channels, and integrating that into the transport layer, reduces latency/RTTs and allows for "delegated payments" where a content creator can send a short commitment to a user to "give them a coupon" for the delivery of a particular file.'

  - time: '12:40 - 13:00'
    speakers: 'Piotr Galar'
    title: 'Testing Your IPFS Gateway Implementation: A Step-by-Step Guide'
    description: 'In this talk, I will present our newly developed testing suite for IPFS gateways, which helps implementers ensure their gateway implementations conform to the IPFS gateway specification. I'll discuss the structure of the test suite, adding new tests, and demonstrate how it is currently being used to verify the Kubo and Bifrost gateway implementations. Additionally, I'll provide a step-by-step guide for setting up the suite in a CI environment, enabling implementers to receive continuous feedback and detailed reports on their gateway's features and compliance with the gateway specification.'

  - time: '12:20 - 12:40'
    speakers: 'Aarsh Shah'
    title: 'Introduction to Caboose'
    description: 'Introduction to Caboose, a blockstore interface to the Saturn CDN network.'

  - time: '09:00 - 09:30'
    speakers: 'Adin Schmahmann'
    title: 'IPFS Service Worker Gateways'
    description: 'We'll take a look at loading content using IPFS in a web browser without relying on extensions or trusted HTTP Gateways using service workers. We'll also discuss some of the libraries and recent improvements that have enabled this functionality.'

  - time: '11:50 - 12:20'
    speakers: 'Marcin  Rataj'
    title: 'Self-hosting IPFS Gateway with bifrost-gateway'
    description: 'This will be a talk about scaling IPFS Gateways. At ipfs.io we are in the process of moving from a single binary that does everything (Kubo) into discrete, separate services, that can be deployed and managed separately.   Will use project Rhea (new ipfs.io backend) as an example, but the goal will be to show how to do easy self-hosting and run own gateway using our turn-key bifrost-gateway docker image with either Saturn CDN or a regular Kubo as a backend.  If time allows, we will also show how to create own, optimized gateway implementation using go-libipfs/gateway with custom backend that implements the new GO API.  '

  - time: '08:30 - 09:00'
    speakers: 'Will Scott'
    title: 'What is Rhea?'
    description: 'Diving into the decentralization of the IPFS gateway, and how Saturn can provide a replacement for centralized infrastructure'

  - time: '11:30 - 11:50'
    speakers: 'Alex Kinstler'
    title: 'Web3 CDN Saturn accelerates IPFS & Filecoin retrievals'
    description: 'Learn how the Saturn network accelerates content addressable data from IPFS and Filecoin Learn about the Beta Test Program for developers to start using Saturn. Learn how to get started with Saturn and future roadmap outlook.'

---
