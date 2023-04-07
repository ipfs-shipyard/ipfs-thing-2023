---

name: "HTTP Gateways"
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
  - time: '09:00 - 09:30'
    speakers: 'undefined '
    title: "WELCOME AND OPENING"
    description: "1 hour 45 minutes"

  - time: '11:00 - 11:30'
    speakers: 'Adin Schmahmann'
    title: "IPFS Service Worker Gateways"
    description: "We'll take a look at loading content using IPFS in a web browser without relying on extensions or trusted HTTP Gateways using service workers. We'll also discuss some of the libraries and recent improvements that have enabled this functionality."

  - time: '12:30 - 13:00'
    speakers: 'undefined '
    title: "LUNCH"
    description: "1 hour"

  - time: '14:20 - 14:40'
    speakers: 'Aarsh Shah'
    title: "Introduction to Caboose"
    description: "Introduction to Caboose, a blockstore interface to the Saturn CDN network."

  - time: '14:40 - 15:00'
    speakers: '@galargh'
    title: "Testing Your IPFS Gateway Implementation: A Step-by-Step Guide"
    description: "In this talk, I will present our newly developed testing suite for IPFS gateways, which helps implementers ensure their gateway implementations conform to the IPFS gateway specification. I'll discuss the structure of the test suite, adding new tests, and demonstrate how it is currently being used to verify the Kubo and Bifrost gateway implementations. Additionally, I'll provide a step-by-step guide for setting up the suite in a CI environment, enabling implementers to receive continuous feedback and detailed reports on their gateway's features and compliance with the gateway specification."

  - time: '15:00 - 15:30'
    speakers: 'laudiacay'
    title: "Live CDN Incentives and its Future"
    description: "I'll be talking about how to do CDN incentivization at a protocol level correctly- the game theory is pretty simple and I independently converged on a design pretty similar to the one on Skynet. Adding a simple piece of novel cryptography to the payment channels, and integrating that into the transport layer, reduces latency/RTTs and allows for &#34;delegated payments&#34; where a content creator can send a short commitment to a user to &#34;give them a coupon&#34; for the delivery of a particular file."

---