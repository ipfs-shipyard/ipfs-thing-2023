---

name: "IPFS on the Web"
date: '2023-04-16'
days: 1
venueName: 'Radisson Grand Place, Brussels'
venueAddress: ''
difficulty: All Welcome
description: >-
  The world wide web is both the biggest deployment vector and least tractable surface for IPFS. There are opportunities and major challenges to bringing IPFS support in web rendering engines and browsers, to web content served through gateways, to IPFS network access from HTTP web apps and browser extensions. This track will have talks on: current and future browser implementations, approaches to managing and publishing IPFS content on the web, building apps that connect to the IPFS from within HTTP contexts, culminating in planning for group working sessions around on specific IPFS+Web challenges on day 4 & 5 of IPFS Thing.
priority: 2
attendees: 50
org: ''
times: '10:00 AM - 6:00 PM'

timeslots:
  - time: '10:00 - 10:30'
    speakers: 'Dietrich Ayala'
    title: "WELCOME + OPENING"
    description: ""

  - time: '10:30 - 11:00'
    speakers: 'Robin Berjon'
    title: "What Is The Web?"
    description: "What is the Web? Interestingly, that question has never been answered before. This talk proposes that the Web is about user agency, and Web technology is the set of technology that increases user agency. I'll explain the reasons for taking this view, and show how that maps to technical architecture and gives us a sense of where to take the web next."

  - time: '11:00 - 11:30'
    speakers: 'Ian Preston'
    title: "A better web: secure, private, p2p apps with user-owned data and identity"
    description: "Want to write p2p apps, without worrying about identity, storage, encryption or access control? We'll describe how to write an app on Peergos using standard HTML5, and how they work in existing browsers and how users and their data are protected."

  - time: '11:30 - 12:00'
    speakers: 'Philipp Krüger'
    title: "WNFS: Versioned and Encrypted Data on IPFS"
    description: "The WebNative File System (WNFS) empowers users with extensible metadata, file and directory history, conflict resolution, and encryption with fine-grained access levels.
We show a rough outline of what its design goals are, how it works, our roadmap, and possibly a demo of our new rust implementation."

  - time: '12:00 - 12:30'
    speakers: 'Fabrice Desré'
    title: "Improving the Web security model with content based addressing"
    description: "The web security model relies on a combination of mechanisms to provide origin isolation and prevent some classes of attacks: the Same Origin Policy and Content Security Policies. While effective for their goals, these mechanisms also have side effects that prevent legitimate applications to be built on the Web.
In this talk we'll explore how content based addressing can be leveraged to build 
different security models that enable a new class of Web apps."

  - time: '12:30 - 13:00'
    speakers: 'undefined '
    title: "LUNCH"
    description: "1 hour"

  - time: '13:30 - 14:00'
    speakers: 'Alex Potsides'
    title: "Hello Helia"
    description: "An introduction to the new IPFS in JS implementation - Helia

What is it, why is it and how to use it!"

  - time: '14:00 - 14:30'
    speakers: 'Alex Potsides'
    title: "JavaScript performance - how to wring the most out of your Helia deployment"
    description: "JS is slow, right?  No!  In this talk I'll show you how you can optimise your Helia deployment for blazing performance."

  - time: '14:30 - 15:00'
    speakers: 'Prithvi Shahi'
    title: "Connecting everything, everywhere, all at once with libp2p"
    description: "In this talk, we'll go over the new browser connectivity transports. We'll also showcase a chat application that takes advantage of universal connectivity."

  - time: '15:00 - 15:30'
    speakers: 'Marten Seemann'
    title: "The Incredible Benefits of libp2p + HTTP: A Match Made in Decentralization Heaven"
    description: "In this talk, we'll go over our proposal for a new libp2p+HTTP protocol."

  - time: '15:30 - 16:00'
    speakers: 'undefined '
    title: "BREAK"
    description: "30 minutes"

  - time: '16:00 - 16:30'
    speakers: 'Blaine Cook'
    title: "The Name Name Service – Discoverable, Verifiable Names for Decentralized Infrastructures"
    description: "NNS is a new approach to providing distributed discovery for human-readable names. NNS builds upon DIDs and UCANs to allow permissionless delegation and service discovery, with an emphasis on improving end-user UX for IPFS and related services. This talk will provide an overview of the approach, discuss use-cases, and explore anticipated challenges."

  - time: '16:30 - 17:00'
    speakers: 'Ryan Shahine'
    title: "Building decentralized websites on IPFS"
    description: "Get to know how Portrait utilizes IPFS to create decentralized websites for your Web3 identity."

  - time: '17:00 - 17:30'
    speakers: 'icidasset'
    title: "ODD.js, a technical overview."
    description: "ODD.js is a toolkit that allows you to build a distributed web application where the user is in full control of their data thanks to WNFS and UCAN. We’ll take a look at which additional layers are built on top of WNFS and how UCAN is utilised throughout this. ODD.js is built by the folks at Fission, but that doesn’t necessarily mean your web application is tied to the Fission infrastructure. This SDK allows various components to be customised and swapped out, as we did with Walletauth, where MetaMask is used as the identity layer."

  - time: '17:30 - 18:00'
    speakers: 'fusionstrings'
    title: "IPFS native frontend development using Importmaps"
    description: "Frontend Development for IPFS can be greatly simplified with use of importmaps, a new web standard. This talk explains challenges on the and how JSPM created tooling and CDN aims to fill the gap."

---