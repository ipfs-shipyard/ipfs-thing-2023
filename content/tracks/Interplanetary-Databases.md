---

name: "Interplanetary Databases"
date: '2023-04-15'
days: 1
venueName: 'Radisson Grand Place, Brussels'
venueAddress: ''
difficulty: All Welcome
description: >-
  There’s a new class of distributed database technologies building atop steady advances in IPLD & hash linked data structures in general. In this track we’ll gather those brave enough to take on CAP theorem in a decentralized context, share notes on what’s working, and hear presentations from teams pushing the envelope on what databases can do and where they can exist.
priority: 6
attendees: 50
org: ''
times: '11:00 AM - 6:00 PM'
timeslots:

  - time: '09:00 - 09:30'
    speakers: 'Mauve Signweaver'
    title: "Efficient P2P Databases with IPLD Prolly Trees"
    description: "This talk will go over what IPLD Prolly Trees are and how they can be used to build efficient Peer to Peer Databases which can query large amounts of data using built in indexes."

  - time: '12:15 - 12:45'
    speakers: 'Quinn Wilton'
    title: "Querying Decentralized Data in Rhizomatic Systems"
    description: "Shifting storage and compute toward the far edge reflects an extreme departure from traditional cloud-based architectures, bringing with that shift a new set of challenges for application developers. Rhizome is a decentralized database for InterPlanetary Linked Data that embraces these challenges to open up new ways of thinking about consistency, interoperability, and privacy. 

This talk introduces the ideas underpinning Rhizome, and demonstrates how they come together to empower developers to build and reason about new types of peer-to-peer and decentralized applications."

  - time: '11:30 - 12:00'
    speakers: 'Taosheng Shi'
    title: "Pando: Notarized IPLD Data Network"
    description: "There are a number of emerging streams of data that does not need to meet the same ‘consensus’ bar as what we would expect in a global chain(Filecoin).  Pando is a huge forest of IPLD data structures and aggregate tons and tons and tons of data around Filecoin and then over time. There are nice properties of having this sort of data network more tightly linked to the chain that seem desirable to encourage, and this leads to the goals for the Pando:
* Keep included metadata consistently available
* Provide light-weight, unbiased access to metadata
* Discourage historical revisionism."

  - time: '08:30 - 09:00'
    speakers: 'Aaron Goldman'
    title: "Anchors Away (consistency in an IPFS world)"
    description: "Approaches to building consistent systems of distrusting peers. IPFS is mostly best effort protocols over a best effort DHT. How Ceramic Network uses a timestamp service (e.g ETH) to anchor events in time and produce mutable consistent streams of IPLD data."

  - time: '13:00 - 13:30'
    speakers: 'Alan Shaw'
    title: "Pail - DAG based sharded key/value store using Merkle Clocks and CRDTs"
    description: "Learn about a new a method of key/value storage implemented as an IPLD DAG. It details the format, encoding and mechanisms to mutate the storage as well as how to reconcile mutations made by multiple parties. Hint: Merkle Clocks and CRDTs.

We'll also learn about how you can leverage new web3.storage APIs to leverage decentralized, user controlled authorization for the data using UCANs."

---