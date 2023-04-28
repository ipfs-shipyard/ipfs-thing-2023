---

name: "IPFS Deployments + Operators"
date: '2023-04-15'
days: 1
venueName: 'Radisson Grand Place, Brussels'
venueAddress: ''
difficulty: All Welcome
description: >-
  Room: Royal A+B.
  
  From best practices to the mistakes made along the way, this track is a chance to highlight how members of the community are running IPFS nodes at scale. Let's share what's working well and what implementations can do to make things even better!
priority: 6
attendees: 50
org: ''
dri: 'James Walker'
times: '1:30 PM - 6:00 PM'

timeslots:
  - time: '13:45 - 14:15'
    speakers: 'Gui'
    title: "Enabling More Applications to Join the libp2p DHT Ecosystem"
    description: "At present, DHT implementations primarily revolve around IPFS. However, it's possible for other applications that leverage libp2p to utilize the DHT without the need to participate in the IPFS DHT and store IPFS data. This presentation outlines a strategy to divide the existing DHT into two parts: a lightweight, multipurpose DHT and an IPFS DHT protocol built on top of it. This proposed approach would enable non-IPFS applications to join the lightweight DHT while running their own protocol on top of it. This would promote interoperability with other applications, contribute to the growth of the libp2p DHT, and enhance the security of all its users."

  - time: '14:15 - 14:45'
    speakers: '@galargh'
    title: "Automating Kubo's Development Process"
    description: "Learn how we automated Kubo's release process using kuboreleaser and migrated from CircleCI to GitHub Actions. Discover the benefits of automation and how we use Grafana to monitor our development pipeline. Perfect for developers and DevOps engineers interested in improving the developer experience in their projects."

  - time: '14:45 - 15:15'
    speakers: 'dignifiedquire'
    title: "Iroh - IPFS reimagined (long)"
    description: "Presenting the current and upcoming features of Iroh."

  - time: '15:30 - 16:00'
    speakers: 'Gus Eggert'
    title: "Boxo: Build Your Own IPFS Adventure"
    description: "Boxo has been recently released as a component library for building IPFS applications and implementations in Go. We'll talk about where Boxo came from, where it's going, how you can use Boxo to get stuff done, and how Boxo helps the IPFS community get stuff done. More information can be found at: https://github.com/ipfs/boxo"

  - time: '15:30 - 16:00'
    speakers: 'None '
    title: "BREAK"
    description: "45 minutes"

  - time: '16:30 - 17:00'
    speakers: 'Mohsin Zaidi'
    title: "IPFS War Stories"
    description: "Lessons learned from running IPFS nodes in a production environment.  Ceramic Network's operational burden from IPFS nodes."

  - time: '17:00 - 17:30'
    speakers: 'Anshuman Prasad'
    title: "Game asset loading with IPFS"
    description: "Learn how game devs can use IPFS from within Unreal Engine or Unity to package and distribute modular game files. This has the potential to reduce game download sizes, simplify patching, handle distribution and reduce infra lock-in"

  - time: '17:30 - 18:00'
    speakers: 'Marten Seemann'
    title: "How to build your own compatible libp2p stack from scratch in an afternoon "
    description: "In this talk, we'll go over all you need to compose a modern and minimal libp2p stack."

---