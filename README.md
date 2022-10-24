
# BingeWave React Widget Library

  BingeWave is a Live Media as a Service (LMAAS), which means no-code and low-code tools for building video conferencing, audio conferencing, live streaming, and augmented reality solutions. 

This library will cover how to implement the live media functionality into React website. This repo only covers a React implementation for websites; please visit the React Native repo for a mobile implementation.

## Understanding Widgets
We will briefly review widgets to cover how the live media functionality is implemented. All the video, audio, live streaming, and AR functionality is embedded into another website through an IFrame.

The IFrames have unique capabilities such as the ability to pass JSON Web Tokens for Authentication, automatic resizing, and there are also several different types of IFrames that can be embedded. The implementation process is simplified through what is known as widgets. Widgets are the special tags that will create the correct IFrame, pass the authentication tags, and resize as needed.

## Installation

This library is designed for React projects. To install, on your command line run the following in your React root folder:

`npm install invirtu-react-widgets --save`


## How To Implement The Widgets

On BingeWave, every video conference, audio conference, live stream, and AR session is considered a live event. For each widget to function properly, an id of a live event is required. To obtain an event ID, you must have registered for an [organizer account here](https://developers.bingewave.com/organizers).

Once you have an organizer account, you can either:

1. Read the [documentation](https://developers.bingewave.com/docs/events#create) to create a live event and return the id

2. Use one of the libraries, like the [Invirtu Javascript API Library](https://www.npmjs.com/package/invirtu-javascript-api), to create a live event and retrieve the id.

After the id from the live event is retrieved, you can use it to create a variety of widgets.
 

### Video Conferencing Widget Example

The video conferencing widget is when one or more users join a video call to have a real-time conversation with each other. Example use cases can be 1:1 coaching calls, a live shopping session with one or multiple participants, or even virtual classroom settings with a large number of people.

To implement the widget, first it must be imported:

  
`import { VideoConferencing } from "invirtu-react-widgets";`


Afterwards, the live event id is placed into the widget, which will create the interface on-screen.

`<VideoConferencing id={some_event_id} />`

  A more complete pseudo code example of the widget being used in conjunction with [Javascript API](https://www.npmjs.com/package/invirtu-javascript-api) looks something similar to the below. You will have to have your auth token and organizer id to effectively use.
```

import { VideoConferencing } from "invirtu-react-widgets";
import { Events, Config } from "invirtu-javascript-api";
import React, { useEffect, useState } from "react";

export default function ExampleComponent() {

  const [widget, setWidget] = useState(false);

  useEffect(() => {

    createInterface();

  }, []);

  
function createInterface() {

  Config.setAuthToken('some_auth_token');

  let data = {
    type: 7,
    organizer_id: 'an_organizer_id'
  };

  Events.createEvent(data).then(response => {

    if (response.status == "success") {
      setWidget(<VideoConferencing id={response.data.id} />);
    }

  }).catch(error => {

      console.log(error);

  });
  
}

  return (
    <>
      {widget}
    </>
  );

}
```
### Other Live Event Widgets

There are several other widgets that can be implemented in relation to a live event. They are listed as follows: 

#### Live Streaming
Shows a live stream. Live streams is either when a stream of pre-recorded content or a stream from a live event received via the RTMP is being shown.
```
import { Livestreaming } from  "invirtu-react-widgets";

<Livestreaming  id={id}  />
```

#### Broadcasting
Broadcasting is when a video conference is streamed to an audience that is watching.

```
import { Broadcasting } from  "invirtu-react-widgets";

<Broadcasting  id={id}  />
```

#### Pop-up
When the widgets are not working correctly inside a website because of certain restrictions that exist on that site, a pop-up window can be used to display the widget inside a pop-up window.

```
import { Popup } from  "invirtu-react-widgets";

<Popup  id={id}  />
```

#### Join
Before a user is able to join a session, they can be prompted to set which video and audio source they want to use and be required to enter identify information.

```
import { Join } from  "invirtu-react-widgets";

<Join  id={id}  />
```

#### Ticketing/RSVPing
Some sessions will be guarded by a pay wall or require a user to RSVP. Use this widget to implement ticketing functionality.

```
import { Ticketing } from  "invirtu-react-widgets";

<Ticketing  id={id}  />
```

## Tutorials

  
To better understand the use of various widgets in different circumstances, the auth tokens and interface design, here are [several tutorials](https://developers.bingewave.com/tutorials) on various topics:

  

- [How To Authenticate With JSON Web Tokens For Interactive Live Streams](https://medium.com/bingewave/how-to-authenticate-with-json-web-tokens-for-interactive-live-streams-61dd2675b3e6)

- [Creating A Live Broadcast Web and Mobile App With React & React Native](https://medium.com/bingewave/creating-a-live-broadcast-web-and-mobile-app-135e451fec36)

- [How To Use No Code To Design The Interfaces Once The Widgets Are Embedded](https://medium.com/bingewave/how-to-develop-video-conferencing-live-streaming-app-with-minimal-coding-2458ff1ee7a1)

  

## Building The Library

If at any point you need to compile the library, you can perform what is known a rollup. If the packages are not installed, be sure to install the development packages.
  
`npm install --save-dev rollup typescript`

Afterwards in the root directory, run the following commands to perform a rollup, which will compile the code into the dist folder:

`npm run build`

And finally if you have access, you can deploy the code to npm.

  

`npm publish --access public`