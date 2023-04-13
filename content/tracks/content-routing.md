---
name: Content Routing
date: '2023-04-16T00:00:00.000Z'
days: 1
venueName: 'Radisson Grand Place, Brussels'
venueAddress: ''
difficulty: All Welcome
description: >-
  Room: Amsterdam / Luxembourg. Approaches and protocols to content routing in
  IPFS, what we've learned so far, and directions for the future. Join this
  track to explore herding CIDs, bringing content providers closer to the
  seekers of content, new advances across content routing systems, and a fresh
  look at the horizon of what's to come.
priority: 2
attendees: 50
org: ''
dri: Masih Derkani
times: '10:00 AM - 6:00 PM'
timeslots:
  - time: '10:00 - 10:15'
    speakers: Masih Derkani
    title: Welcome and Introduction to the Content Routing Track
    description: >-
      Introduction to the Content Routing track and an overview of the talks
      ahead.
  - time: '10:15 - 10:45'
    speakers: Gui
    title: Opening the DHT to large content providers
    description: >-
      This talk introduces a new method for making content publishing in the DHT
      less resource-intensive for large content providers. This technique, named
      Reprovide Sweep reduces the load of content publication by reproviding all
      provider records located in the same keyspace region at once. This
      strategy decreases the number of DHT lookups required for content
      publication, and the number of connections to open by 80x for a content
      provider advertising 100’000 CID. The talk will be of interest to those
      interested in IPFS optimization and improving the efficiency of
      large-scale content publication and discovery on the DHT. 
  - time: '11:00 - 11:15'
    speakers: Masih Derkani
    title: 'IPNI: the InterPlanetary Network Indexer'
    description: 'The current state of IPNI, what’s new and where we are going'
  - time: '11:15 - 11:45'
    speakers: Masih Derkani
    title: 'cid.contact: one year on'
    description: >-
      cid.contact is a service that routes content: given a CID it finds
      providers of it along with metadata on how it can be retrieved. It has
      been almost a year since the launch of cid.contact. a lot has happened
      since. This talk goes over the latest and greatest offered by cid.contact,
      our journey in making it all happen and what's to come
  - time: '11:45 - 12:15'
    speakers: Torfinn Olsen
    title: 'IPFS Content Routing Workgroup, an introduction'
    description: >-
      The IPFS content routing workgroup aims to improve content routing within
      the IPFS network by applying an intentional focus on effectiveness of
      content discovery and delivery mechanisms. We make group decisions around
      the design and implementation of new content routing protocols, optimize
      existing ones, and address the various technical challenges associated
      with decentralized content routing. We'd like to make everyone aware of
      the important work this group is doing and encourage their participation.
  - time: '12:30 - 13:30'
    speakers: 'None '
    title: LUNCH
    description: 1 hour
  - time: '13:30 - 14:00'
    speakers: Yiannis Psaras
    title: DHT Double Hashing Updates & Migration Plan
    description: >-
      Double Hashing for the libp2p DHT has been proposed as an approach to
      improve libp2p's privacy. The approach, which includes breaking changes to
      the current DHT, has been discussed at IPFS Thing and Camp 2022. This talk
      will give a brief update of developments since IPFS Camp and most
      importantly will lay out the migration plan to the new double-hashing DHT.
  - time: '14:15 - 14:45'
    speakers: Ivan Schasny
    title: 'Double Hashing in IPNI: Reader Privacy at scale'
    description: >-
      In this talk I'd like to speak about IPNI's journey to implementing Double
      Hashing at scale. I'll cover: what double hashing is and what benefits it
      gives to the user; IPNI and DHT double hashing compatibility; IPNI dataset
      migration; how we run double hashing in production; issues that we
      encountered. This talk will be interesting to those who already run IPNI
      by themselves (as they will want to implement Reader Privacy at some
      point) as well as to those who are just thinking to participate in the
      IPNI ecosystem.
  - time: '15:00 - 15:30'
    speakers: Ian Preston
    title: 'Private data: state of the art'
    description: >-
      A deep dive into the Peergos architecture and cryptree+ which gives
      post-quantum ciphertext-level access control, better metadata protection
      and better performance. Learn about our fully concurrent GC design, and
      other performance boosts.
  - time: '15:30 - 16:15'
    speakers: 'None '
    title: BREAK
    description: 45 minutes
  - time: '16:15 - 16:45'
    speakers: gammazero
    title: Content Advertisement Mirroring
    description: >-
      Understand how creating alternate sources of content advertisement data is
      needed to unburden advertisement publishers, and start new indexers
      quickly. Discuss ideas that build on this capability, such as distributing
      content advertisement and providing alternate means of publishing it.
      Define basic outline for a protocol that enables interoperability of
      advertisement publishers and indexer operators.
---

