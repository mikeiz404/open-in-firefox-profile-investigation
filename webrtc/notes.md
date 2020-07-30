# Signalling
Used to setup the peer connections.
* WebRTC does _not_ specify how the signalling should be done, only that it happens and the data necessary to initate a webRTC session is obtained by the peers.

# ICE - Interactive Connectivity Establishment
"Framework" for detecting and passing through firewalls between two peers.

![](https://media.prod.mdn.mozit.cloud/attachments/2013/09/18/6119/91ea87281f81d948058e2c9c74634814/webrtc-complete-diagram.png)

## Direct
* If both peers are not behind a firewall then they can talk directly without any setup.

## STUN - Session Traversal Utilities for NAT
* A technique used to bypass `endpoint-independent` mapping of internernal IP:PORT to external IP:PORT See [NAT Methods of Translation](https://en.wikipedia.org/wiki/Network_address_translation#Methods_of_translation) and [STUN Limitations](https://en.wikipedia.org/wiki/STUN#Limitations).
* If the mapping is consistent across all endpoints a third party, a STUN server, can observe the external IP:PORT address used to connect and tell the other peer what IP:PORT to connect with.
    * Note: UDP NAT routes will stay active in the firewall for a [certain period of time](https://docs.skyswitch.com/en/articles/579-what-does-udp-timeout-mean).
    * Note: TCP connections require a port and address to be shared by two sockets so that an outgoing connection can be estanlished to the STUN server _and_ an incoming connection can be received from the peer.

## TURN - Traveersal Using Relays around NAT
* Uses an intermediary to relay communication between two peers.
* This is needed when `Address and Port Dependent` mapping NAT is used by both peers.
    * [This article](https://www.frozenmountain.com/developers/blog/webrtc-nat-traversal-methods-a-case-for-embedded-turn) under _Symmetric NATs – A case for TURN_ has a table showing when a TURN server is required.

### Stats
* [2016 Metrics for callstats.io](https://www.callstats.io/hubfs/pdf/industry%20reports/webrtc-metrics-report-2016-01-by-callstatsio.pdf): 23% relayed
* [2017 Metrics for Whereby](https://medium.com/the-making-of-whereby/what-kind-of-turn-server-is-being-used-d67dbfc2ff5d) 17.7% relayed

# SDP - Session Descriptor Protocol
Used to negotiate media transfer (codecs, encryption, format, ...).

# Data Channels
* Two channel types: `reliable` (TCP like) and `unreliable` (UDP like)
* [Example: Local Data Channel](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample) ([Source](https://github.com/mdn/samples-server/blob/master/s/webrtc-simple-datachannel/main.js))


# Privacy Concerns
* Can be used for fingerprinting through device id enumberation.
    * Some browsers use a unique id across domains but the id is persistent on a per domain basis unless it is reset manually by the user.
* Could be used for fingerprinting through revealing local IP address.
    * Browsers now use a random mDNS name which resolves to the local IP instead.


# Resources
* [MDN WebRTC Overview](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols)
* [MDN WebRTC Signalling](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Connectivity)
* [Peer-to-Peer Communication Across Network Address Translators](https://bford.info/pub/net/p2pnat/index.html)
* [MDN WebRTC Data Channels](https://developer.mozilla.org/en-US/docs/Games/Techniques/WebRTC_data_channels)