---

name: 'Data Transfer'
date: '2023-04-15'
days: 1
venueName: 'Radisson Grand Place, Brussels'
venueAddress: ''
difficulty: All Welcome
description: >-
  Come join the Protocol Thunderdome as we battle to determine the best way to move content addressed bytes! We'll review recent progress in data transfer, including work coming out of the Move The Bytes Working Group, and explore how we can make IPFS 10x faster at getting your stuff than Web2!
priority: 2
attendees: 50
org: ''
times: '11:00 AM - 6:00 PM'
timeslots:
  - time: '09:50 - 10:20'
    speakers: 'James Walker'
    title: 'CAR Mirror Reflections'
    description: 'CAR Mirror describes a method for efficiently diffing, deduplicating, packaging, and transmitting IPLD data from source to sink.  In this talk I'll give an introduction to the CAR Mirror protocol and then review the current state of the Go implementation.'

  - time: '14:40 - 15:10'
    speakers: 'Floris Bruynooghe'
    title: 'Delta Chat and Iroh'
    description: 'Delta Chat is a messenger using email as transport and with no additional infrastructure.  This talk will discuss how the minimalist Iroh is used by Delta Chat to easily set up a second device by connecting both devices peer-to-peer.'

  - time: '09:25 - 09:55'
    speakers: 'Rüdiger Klaehn'
    title: 'Moving the bytes with bao'
    description: 'At number0 we have chosen to use blake3 verified streaming for data synchronization. I will explain how bao works, what the tradeoffs are, and what higher layers will benefit from lightning fast partial sync of large files.'

  - time: '12:25 - 12:55'
    speakers: 'Philipp Krüger'
    title: 'Data Transfer batching Techniques featuring Blake3, CAR Mirror, and more'
    description: 'Batching block transfer is the main way to optimize DAG exchange compared to bitswap. This talk discusses current proposals for batched data transfer such as blake3 with bao, sending CAR files, CAR mirror, and GraphSync. We’ll look at what use cases they do and don’t solve as well as which techniques from one protocol could be applied in others.'

  - time: '15:00 - 15:30'
    speakers: 'Franz Heinzmann'
    title: 'Repco - Exchanging community media and metadata over IPLD'
    description: 'We present Repco, an open source tool to replicate content from community media publishers. Repco uses IPLD repositories, CAR streams and UCANs to exchange authenticated logs of media content and metadata, which is ingested from different sources (RSS, REST APIs). Repco is developed within a wide network of European community media publishers and builds on long-running discussions on better publishing networks for small-scale media outlets. Future plans include connecting to speech transcription and translation services as well as integrating community features over ActivityPub.'

  - time: '11:30 - 12:00'
    speakers: 'Hannah Howard'
    title: 'Fetch Content Like A Border Collie: Introducing Lassie'
    description: 'Lassie is a new universal IPFS retrieval client, that speaks multiple data transfer protocols to easily find and fetch your data -- no questions asked. Lassie is already operating at scale in the Saturn network. We'll talk about our design goals with Lassie, how we built it, and how Lassie might learn to speak your bespoke data transfer protocol in the future!'

  - time: '12:45 - 13:15'
    speakers: 'undefined undefined'
    title: 'We Moved The Bytes, Where Did They Go?'
    description: 'Over the last few months, we assembled the Move The Bytes Working Group to improve data transfer protocols across the IPFS network. This panel discussion will cover what we discussed, what we think we learned, and where we'd like to take this work from here.'

  - time: '12:50 - 12:35'
    speakers: 'Hugo Valtier'
    title: 'RAPIDE'
    description: 'RAPIDE has been proposed recently as a way to improve the content fetching performance of IPFS. This talk will be a demo of RAPIDE powering ipget 2.0. A brief description of the internals of RAPIDE will also be given to provide context to the audience.'

---
