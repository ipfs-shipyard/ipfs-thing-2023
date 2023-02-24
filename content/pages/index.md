---
blocks:
  - style:
      alignment: flex-col items-start gap-12
      padding: pt-36 pb-28 pr-10 pl-10
      featureImage: wpx-450  mr-auto
      featureContent: 'w-1/2 min-h-0 text-left sm:w-full sm:min-h-0 sm:text-left'
      labelStyles: 'text-white mg-headline-medium '
      headlineStyles: 'text-white mg-headline-medium '
      subheadStyles: text-white mg-headline-medium mb-7
      textStyles: text-white mg-copy-medium mb-5
    background:
      fillStyles: from-primary to-accent1 bg-gradient-to-br opacity-100
      ornaments:
        - src: /uploads/dot-ring.svg
          alignment: right
          height: '680'
    image:
      src: /uploads/event-logo.svg
      alt: IPFS Thing Brussels Belgium 2023
    label: ''
    headline: 'April 15th - 19th, 2023'
    subhead: 'Brussels, Belgium'
    body: >
      IPFS þing is a week-long gathering for the IPFS implementors community.
      Everything from talks, workshops, discussion circles, hacking time, and
      more — all focused on advancing IPFS implementations.
    buttons:
      - label: Submit a Track or Talk!
        link: 'https://2023.ipfs-thing.io/submit/'
        buttonStyle: gradient
      - label: Get Tickets Now!
        link: 'https://lu.ma/ipfsthing2023'
        buttonStyle: gradient
        fathomId: ''
    _template: feature
  - style:
      alignment: 'flex-col-reverse items-center '
      padding: pt-20 pb-8 pr-0 pl-0
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: text-gray-light undefined undefined
      headlineStyles: 'text-white mg-headline-large '
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
    background:
      fillStyles: bg-primary opacity-100
    headline: Check out the IPFS þing 2022 recap!
    subhead: ''
    body: ''
    _template: feature
  - style:
      fullWidth: false
      minHeight: min-h-0
      padding: pt-10 pb-24 pr-0 pl-0
    background:
      fillStyles: bg-primary opacity-100
    markup: >-
      <div class="w-full"><div class="max-w-desktop-full px-10 mx-auto"><div
      class="relative w-full h-0 overflow-hidden"
      style="padding-top:42.33%"><iframe class="absolute inset-0" width="100%"
      height="100%" src="https://www.youtube.com/embed/6dojCBJQmqg"
      title="YouTube video player" frameborder="0" allow="accelerometer;
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen=""></iframe></div></div></div>
    _template: embed
  - background:
      fillStyles: bg-gray-light opacity-100
    navigationLabel: Preliminary Schedule
    _template: eventSchedule
  - style:
      alignment: flex-col-reverse items-start gap-6
      padding: pt-20 pb-0 pr-10 pl-10
      featureContent: w-1/2 min-h-0 text-left
      labelStyles: text-black undefined undefined
      headlineStyles: text-black mg-headline-large undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
    cardStyle:
      fillStyles: bg-gray-light opacity-50
      grid: >-
        grid-cols-3 justify-center gap-6 sm:grid-cols-1 sm:justify-center
        sm:gap-6
      alignment: flex-row items-start  text-center
      image: '  object-center object-cover'
      imagePadding: pt-0 pb-0 pr-0 pl-0
      contentPadding: pt-7 pb-7 pr-5 pl-5
      borderStyles: border-gray border-1
      labelStyles: text-black undefined undefined
      headlineStyles: text-black mg-headline-medium mb-1
      subheadStyles: text-black mg-headline-medium mb-5
      textStyles: text-black mg-copy-medium mb-3.5
      buttonType: outline
      buttonLayout: justify-between
      buttonWidth: w-auto
    label: ''
    headline: Tickets
    subhead: ''
    body: ''
    items:
      - headline: Early Bird Ticket
        subhead: $99
        body: |
          Purchase until 24 February.&#x20;

          ​Limited tickets available.
        link: 'https://lu.ma/ipfsthing2023'
        buttonLabel: Purchase Ticket
      - headline: General Ticket
        subhead: $650
        body: >
          ​You are welcome to support the event at this General Ticket price if
          you are able and would like to leave your Early Bird ticket for
          another.
        link: 'https://lu.ma/ipfsthing2023'
        buttonLabel: Purchase Ticket
      - headline: Supporters Ticket
        subhead: $2000
        body: >
          ​Your supporter's ticket covers the cost of your own attendance &
          contributes to the IPFS Scholar's Program for others to attend as
          well. Thank you for your support!
        link: 'https://lu.ma/ipfsthing2023'
        buttonLabel: Purchase Ticket
    navigationLabel: Tickets
    _template: cards
  - style:
      alignment: 'flex-col items-center '
      padding: pt-20 pb-20 pr-10 pl-10
      featureImage: '  mx-auto'
      featureContent: w-full min-h-0 text-center
      labelStyles: text-black undefined undefined
      headlineStyles: text-black  undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-black mg-copy-small undefined
    headline: ''
    subhead: ''
    body: "The IPFS þing Scholars program offers an opportunity for individuals from underrepresented communities or unique circumstances to join this event.\_\n\n[Nominate a Scholar](https://airtable.com/shrCIJoHbEnv0wmhl)\_by March 1, 2023.\n"
    _template: feature
  - style:
      alignment: flex-col-reverse items-start gap-6
      padding: pt-20 pb-20 pr-20 pl-20
      featureContent: w-1/2 min-h-0 text-left
      labelStyles: text-black undefined undefined
      headlineStyles: text-black mg-headline-large undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
    cardStyle:
      fillStyles: bg-gray
      grid: grid-cols-3 items-start gap-6
      imagePadding: pt-0 pr-0 pb-0 pl-0
      contentPadding: pt-2 pr-2 pb-2 pl-2
      labelStyles: text-black
      headlineStyles: text-black
      subheadStyles: text-black
      textStyles: text-black
    label: ''
    headline: Sponsoring Teams
    subhead: ''
    items:
      - headline: Headline
        subhead: Subhead
      - headline: Headline
        subhead: Subhead
      - headline: Headline
        subhead: Subhead
    _template: cards
  - style:
      alignment: flex-col-reverse items-start gap-6
      padding: pt-20 pb-0 pr-10 pl-10
      featureContent: w-1/2 min-h-0 text-left
      labelStyles: text-black undefined undefined
      headlineStyles: text-black mg-headline-large mb-5
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
    cardStyle:
      fillStyles: ' opacity-100'
      grid: >-
        grid-cols-4 justify-center gap-12 sm:grid-cols-2 sm:justify-center
        sm:gap-12
      alignment: flex-row items-start  text-center
      image: '  object-center object-fill'
      imagePadding: pt-0 pb-0 pr-0 pl-0
      contentPadding: pt-2 pb-2 pr-2 pl-2
      borderStyles: border-white border-0
      labelStyles: text-black undefined undefined
      headlineStyles: 'text-black undefined '
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
      buttonLayout: undefined
      buttonWidth: undefined
    label: ''
    headline: Participating Teams
    subhead: ''
    body: ''
    items:
      - image:
          src: /uploads/ipfs-logo.jpg
        body: ''
      - image:
          src: /uploads/number-zero-logo.jpg
        headline: ''
        subhead: ''
        body: ''
      - image:
          src: /uploads/protocollabs.svg
        headline: ''
        subhead: ''
        body: ''
      - image:
          src: /uploads/fission-logo.svg
        headline: ''
        subhead: ''
        body: ''
      - image:
          src: /uploads/imageedit_34_7503593612.png
        label: ''
        body: ''
      - image:
          src: /uploads/logo-long.svg
        body: ''
      - image:
          src: /uploads/imageedit_45_8687816939.png
        body: ''
      - image:
          src: /uploads/1_ycBer-fYaZ1sH9oM51McYA.png
        body: ''
      - image:
          src: /uploads/Screenshot 2023-02-24 at 11.25.27 AM.png
        body: ''
      - image:
          src: /uploads/logo.png
        body: ''
      - image:
          src: /uploads/600b22445b7c725b1c42a93b_logo-ceramic-full.png
        body: ''
      - image:
          src: /uploads/imageedit_70_2493934929.png
      - image:
          src: /uploads/logo.jpg
        body: ''
      - image:
          src: /uploads/download.png
        body: ''
      - image:
          src: /uploads/Ofcom_logo.svg.png
        body: ''
      - image:
          src: /uploads/fleek-footer.png
        body: ''
      - image:
          src: /uploads/imageedit_51_4338072445.png
        body: ''
      - image:
          src: /uploads/imageedit_54_4581600038.png
        body: ''
      - image:
          src: /uploads/imageedit_36_3927922137.jpg
      - image:
          src: /uploads/Screenshot 2023-02-24 at 11.39.27 AM.png
      - image:
          src: /uploads/imageedit_78_6115021011.png
    navigationLabel: Participating Teams
    _template: cards
  - style:
      alignment: flex-col-reverse items-start gap-6
      padding: pt-20 pb-20 pr-10 pl-10
      featureContent: w-full min-h-0 text-left
      labelStyles: text-black undefined undefined
      headlineStyles: text-black mg-headline-large undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined mb-5
    cardStyle:
      fillStyles: bg-white opacity-100
      fillStylesActive: bg-gray-light opacity-100
      padding: pt-4 pb-4 pr-4 pl-4
      borderStyles: border-gray border-1
      headlineStyles: text-gray-dark mg-headline-small undefined
      subheadStyles: text-gray-dark mg-copy-medium undefined
      textStyles: text-gray-dark mg-copy-medium undefined
    label: ''
    headline: FAQ
    subhead: ''
    body: ''
    items:
      - headline: What is IPFS Thing?
        subhead: ''
        text: >
          IPFS þing is a collaborative workshop series for the IPFS implementors
          community. There will be talks, workshops, discussion circles,
          co-working and hacking time, and more — all focused on advancing IPFS
          implementations.
      - headline: Who should attend IPFS þing?
        subhead: ''
        text: >
          This event brings together maintainers or core contributors of an IPFS
          implementation, ranging from production usage to working demos. If
          this describes you, please join! If you are unsure, email
          [ipfs-thing-2023@ipfs.io](mailto:ipfs-thing-2023@ipfs.io).&#x20;


          If you are an IPFS user, tooling developer, collaborator, or curious
          community member, we enthusiastically invite you to [IPFS
          Camp](https://youtube.com/playlist?list=PLuhRWgmPaHtSEv2DM9J7nSvN7dnVFMM6q),
          an epic decentralized event organized by the community, for the
          community.&#x20;


          Details on IPFS Camp 2023 are coming soon and will be announced on
          [Twitter](https://twitter.com/ipfs). Follow to make sure you don't
          miss any updates!
      - headline: How does the track system work?
        subhead: ''
        text: "This is a choose-your-own-adventure event, so please choose the track(s), sessions, arrival and departure dates, and activities that are interesting and relevant to you. We are actively working on putting together an amazing schedule based on your submissions, suggestions, and feedback. Help shape this event by\_[submitting your own talk or track](https://airtable.com/shr2Eq1juLJh0ri3i)!\n"
      - headline: How do I participate in IPFS Thing?
        text: "First, make sure you have registered for IPFS þing. You can **register** directly from our [website](https://2023.ipfs-thing.io/).\_\n\n**Tell a friend** - Let us know if there is someone you think we should invite, or direct them to our [website](https://2023.ipfs-thing.io/).\_\n\n**Lead a Track** - Submit your track in the [schedule section](https://2023.ipfs-thing.io/#schedule) of our website.\n\n**Give a Talk** - Not ready to lead an entire track, but still would like to contribute? Submit your talk in the [schedule section](https://2023.ipfs-thing.io/#schedule) of our website.\n\n**Apply as an IPFS Scholar** - Interested in applying to the IPFS Scholars program, please fill out an application [here](https://airtable.com/shrCIJoHbEnv0wmhl).\_\n\n**Volunteer** - Email [ipfs-thing-2023@ipfs.io](mailto:ipfs-thing-2023@ipfs.io) if you’d like to help make the production of this event a success. We could really use your help!\_\n\n**Sponsor** - Your support helps bring together different implementation teams from around the world to advance IPFS. If you’re interested in sponsorship, please email us at [ipfs-thing-2023@ipfs.io](mailto:ipfs-thing-2023@ipfs.io) for more information.\_\n\n**Keep up the momentum!** - After the event, all of the tracks will be posted to the IPFS Youtube channel. You can check out the playlists from last year [here](https://www.youtube.com/playlist?list=PLuhRWgmPaHtQhyXIhu2P6e-8WlYOf8wyH). After IPFS þing, be sure to share your talk or track videos with the world! Help the broader community see all of the great work that has transpired and get a sense of what they can expect to see more of at IPFS Camp 2023!\n"
      - headline: Is there a cost to participate?
        text: >
          Your ticket price, combined with generous sponsorships, cover the
          costs of convening this fantastic community (including venue, food,
          A/V, recordings, and more).


          * **Early Bird Builders Ticket** | $99 \*Limited availability

          * **General Ticket** | $650

          * **Supporters Ticket** | $2000

          * **Scholars Ticket** | Free (does not include flights or
          accommodations)


          All meals during the event will be covered for participants.
          Participants (or their employers) are responsible for their flights
          and accommodations.&#x20;


          We have a limited hotel block for the dates of 14-20 April at the
          venue, Radisson Grand Place, at a group rate of 229 EUR per night.
          These rooms will be available on a first-come, first-serve basis, and
          you will receive instructions on how to book once requested via event
          registration. You are also free to book your own accommodations
          nearby.
      - headline: 'Can I become a sponsor, what does that include?'
        text: >
          Yes! We offer multiple levels of sponsorship. From Scholars, Node, and
          Cluster, to Network and Interplanetary, there will be a sponsorship
          for you! Please email us at
          [ipfs-thing-2023@ipfs.io](mailto:ipfs-thing-2023@ipfs.io) for more
          information on what is included in each sponsorship and to
          apply.&#x20;
      - headline: How can I lead a track?
        text: "Here's what's involved:&#x20;\n\n* Identify an IPFS-related topic that you know a thing or two about, and think others should care more about.\n* Add your track idea [here.](https://airtable.com/shr2Eq1juLJh0ri3i)\n* Recruit folks you collaborate regularly with to help shape the content of your track.\n\nYou will have total control over the structure of your track. Morning of talks & afternoon of discussion? Go for it! Required reading before attendance? Sounds great.\n\nEvent organizers will work with you to help situate your track in the broader schedule, give feedback, and help to make your event great. We'll get you set up with AV gear, a room, and other logistical support as needed.\_If you have any special requests, please be sure to let us know as soon as you can.\n"
      - headline: Will there be recordings or live virtual sessions I can attend?
        text: >
          Recordings will be uploaded to our [IPFS Youtube
          channel](https://www.youtube.com/@IPFSbot). Please check there for any
          updates. There will not be any live streaming.&#x20;
      - headline: How do I contact the organizers?
        text: >
          You can reach out to us at
          [ipfs-thing-2023@ipfs.io](mailto:ipfs-thing-2023@ipfs.io)
      - headline: Code of Conduct + Covid Policy
        text: >
          We will be following the IPFS [Code of
          Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md),
          and the IPFS Code of Conduct [Events
          Addendum](https://github.com/ipfs/community/blob/master/code-of-conduct-for-events.md)
          as part of the above CoC.


          IPFS þing's Covid Policy:


          * Masks will be provided on-site.

          * Masks and testing are optional and at your discretion.&#x20;

          * If you are presenting any symptoms of being sick or have come in
          contact with someone who has presented symptoms or tested positive in
          the last five days, please do not attend the event for your own and
          all other attendees' health and safety. Rest up and feel better!
    navigationLabel: FAQ
    _template: accordian
  - style:
      alignment: >-
        flex-row-reverse items-start gap-4 sm:flex-col-reverse sm:items-start
        sm:gap-4
      padding: pt-20 pb-20 pr-10 pl-10
      featureContent: w-3/5 min-h-0 text-left
      labelStyles: text-black undefined undefined
      headlineStyles: text-black mg-headline-medium undefined
      subheadStyles: text-black undefined undefined
      textStyles: text-black undefined undefined
    cardStyle:
      fillStyles: ' opacity-100'
      grid: grid-cols-2 items-start gap-2
      alignment: flex-row items-start  undefined
      image: '  undefined undefined'
      imagePadding: pt-0 pb-0 pr-0 pl-0
      contentPadding: pt-0 pb-0 pr-0 pl-0
      borderStyles: border-white border-0
      labelStyles: text-black undefined undefined
      headlineStyles: text-black mg-headline-small mb-1.5
      subheadStyles: text-black undefined undefined
      textStyles: text-black mg-copy-medium undefined
      buttonLayout: undefined
      buttonWidth: undefined
    label: ''
    headline: IPFS þing
    subhead: ''
    body: ''
    items:
      - headline: LINKS
        subhead: ''
        body: |
          [IPFS](https://ipfs.io/)\
          [Event Github](https://github.com/ipfs-shipyard/ipfs-thing-2023)
        link: ''
      - headline: LEGAL
        subhead: ''
        body: |
          [Privacy Policy](https://discuss.ipfs.tech/privacy)\
          [Terms of Use](https://discuss.ipfs.tech/tos)\
          [DMCA Policy](https://ipfs.tech/legal/)
    _template: cards
backgroundColor: white
meta:
  title: IPFS þing
  description: >-
    IPFS þing is a week-long gathering for the IPFS implementors community.
    There will be talks, workshops, discussion circles, hacking time, and more
    focused entirely on the advancement of IPFS implementations.
  ogImage: /uploads/ipfs-things-23-og.jpg
---












































