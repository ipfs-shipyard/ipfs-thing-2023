---

name: "Measuring IPFS"
date: '2023-04-16'
days: 1
venueName: 'Radisson Grand Place, Brussels'
venueAddress: ''
difficulty: All Welcome
description: >-
  A data-driven approach to the design and operation of IPFS and libp2p through rigorous network measurements, performance evaluation, and recommendations for builders and operators.
priority: 2
attendees: 50
org: 
times: '10:00 AM - 6:00 PM'
timeslots:
  - time: '08:50 - 09:20'
    speakers: Guillaume Michel
    title: "Effectiveness of Bitswap Discovery Process"
    description: "Bitswap is the current data exchange protocol for IPFS. When a new CID is requested, kubo will first broadcast the request to all directly connected peers over Bitswap. If the content wasn’t provided by any connected peers after a timeout, kubo will start a DHT walk to find where the content is located. This talk discusses the effectiveness of the Bitswap discovery broadcast and the use of Bitswap as a Content Router."

  - time: '08:30 - 09:00'
    speakers: Asmir Avdicevic
    title: "Measuring on the fast track"
    description: "Measurements & Performance when building protocols."

  - time: '09:10 - 09:40'
    speakers: Yiannis Psaras
    title: "State of Content Routing through the DHT: Latest developments and measurement results"
    description: "During the last couple of quarters we have seen several developments landing on IPFS's public DHT: the content routing-specific operation of Hydras has been disabled, the resource manager was turned on by default and some misconfiguration of it led to several nodes in the network performing worse than expected. In parallel we developed improvements that will hopefully increase the performance. This talk will present data from our measurement experiments and will also lay out our future plans."

  - time: '08:00 - 08:30'
    speakers: Yiannis Psaras
    title: "Track Opening talk: Data Driven Protocol Design and Optimisation: What it is and what are the latest developments."
    description: "We will introduce the importance of data-driven protocol design and optimisation and the measurement campaigns that the ProbeLab team has carried out in the past couple of quarters. We will selectively dive into a couple of them, present representative results and provide pointers for the rest. We will also talk about KPIs for the IPFS network and discuss our future plans."

  - time: '12:20 - 12:50'
    speakers: Max Inden
    title: "Hole Punching in the wild"
    description: "In 2022 we rolled out hole punching in libp2p. One year has passed since. We launched a large measurement campaign with many volunteers deploying vantage points in their home network, punching holes across the globe.  In this talk I will give an overview of the largest hack of the internet (aka. hole punching), dive into learnings running it on IPFS (~50_000 nodes) and finally present the data collected through our measurement campaign.  If you always wondered how hole punching works, how much more successful UDP is over TCP, whether IPv4 or v6 makes a difference, which country is most friendly to p2p and how to overcome symetric NATs, join for the talk!"

  - time: '21:50 - 22:20'
    speakers: Max Inden
    title: "libp2p performance"
    description: "Measuring libp2p's transport performance with the new perf protocol https://github.com/libp2p/specs/pull/478."

  - time: '12:00 - 12:30'
    speakers: Logan Lentz
    title: "Navigating the Path to Ethical IPFS Analytics"
    description: "Unlocking a Few Secrets of IPFS Engagement: Learn about our journey creating an Anonymous Analytics Platform that respects user privacy while giving developers usable information about their data on IPFS. "

  - time: '10:10 - 10:40'
    speakers: Zhengyu Wu
    title: "Is IPFS Ready for Decentralized Video Streaming?"
    description: "Participants will have ideas about how video stream is currently on IPFS. Also have idea how can we improved video streaming with IPFS."

---
