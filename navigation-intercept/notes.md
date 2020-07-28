# CTRL + Click
Overriding click actions appears to only be available via a content script which overrides how click handling is done on a per page basis along with the use of message passing to a background script.

See [mouse click background script for temporary containers](https://github.com/stoically/temporary-containers/blob/cb180f2bb9e5d58e44707437d6f02a8ea62cf5af/src/background/mouseclick.ts#L43).

# Navigation interception
The `webRequests` API can be used to intercept all requests and cancel or redirect.
The `webNavigation` API can be use to intercept navugation before the UI is modified /but/ it cannot cancel the navigation.`