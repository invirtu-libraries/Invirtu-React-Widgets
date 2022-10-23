# BingeWave React Widget Library

BingeWave is a Live Media as a Service (LMAAS), which means video, audio and augmented reality solutions are provided with minimal to no coding required. The video, audio and AR interfaces are delivered through widgets, which are embeds that go directly inside a website or mobile app to create the interface for the user. 

After the widget is implemented, the interface can be modified through a no-code builder. This library will cover how to implement those widgets into React. Please visit the React Native repo for a mobile implementation.

## Installation
This library is designed for React projects. To install, on your command line run the following in your React root folder:

`npm install bingewave-react-widgets --save`

## How To Implement The Widgets
For each widget to function properly, an id of a live event is required. Every video, audio and AR session on BingeWave is considered a live event. To obtain an event ID, you must have registered for an [organizer account here](https://developers.bingewave.com/organizers).

Once you have organizer you can either:

 1. Read the documentation to create a live event and return the id
 2. Use one the libraries like the React API to create a live event and retrieve the id.

After the id from the live event is retrieved, you can use it to create a variety of widgets.

### Video Conferencing Widget

The video conferencing widget is when one or more users join a video call. Example use cases can be 1:1 coaching calls, a live shopping session with one or multiple participants, or even virtual classroom settings with a large number of people.

To implement the widget, first it must be imported:

`import { VideoConferencing } from "bingewave-react-widgets";`

Afterwards, the live event id is placed into the widget, which will create the interface on-screen.

`<VideoConferencing id={some_event_id} />`

A more complete pseudo code example of the widget being used in conjuction with [React API](https://www.npmjs.com/package/bingewave-react-api) looks something similar to the below. You will have to have your auth token and organizer id to effectively use.

```
import { VideoConferencing } from  "bingewave-react-widgets";
import { Events, Config } from  "bingewave-react-api";
import  React, { useEffect, useState } from  "react";

export  default  function  ExampleComponent() {

	const [widget, setWidget] = useState(false);
	
	useEffect(() => {
	    createInterface();
	}, []);

	function createInterface() {
		
		Config.setAuthToken('some_auth_token');
		
		let  data = {
			type:  7,
			organizer_id:  'an_organizer_id'
		};
	
		Events.createEvent(data).then(response  => {
			if (response.status == "success") {
				setWidget(<VideoConferencing  id={response.data.id}  />);
			}
		}).catch(error  => {
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
### Broadcasting Widget

The broadcasting widget is used to take a video conferencing session between one or more users, and broadcast to a large group of watchers. These watchers will not be able to be part in the video conferencing but can watch the live experience.

To implement the widget, first it must be imported:

`import { Broadcasting } from "bingewave-react-widgets";`

Afterwards, the live event id is placed into the widget, which will create the interface on-screen.

`<Broadcasting id={some_event_id} />`

A more complete pseudo code example of the widget in use with [React API](https://www.npmjs.com/package/bingewave-react-api) looks something similar to the below. You will have to have your auth token and organizer id to effectively use.

```
import { Broadcasting } from  "bingewave-react-widgets";
import { Events, Config } from  "bingewave-react-api";
import  React, { useEffect, useState } from  "react";

export  default  function  ExampleComponent() {

	const [widget, setWidget] = useState(false);
	
	useEffect(() => {
	    createInterface();
	}, []);

	function createInterface() {
		
		Config.setAuthToken('some_auth_token');
		
		let  data = {
			type:  7,
			organizer_id:  'an_organizer_id'
		};
	
		Events.createEvent(data).then(response  => {
			if (response.status == "success") {
				setWidget(<Broadcasting  id={response.data.id}  />);
			}
		}).catch(error  => {
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

### Live Streaming Widget

The live streaming widget is used to a show live stream of a live event. Live events such as conferences, concerts, sporting events and other types can be an input from an RTMP Stream from various sources such as camera feeds, computer, and even other streaming services. Live events can also showcase pre-recorded video content like a movie or a class.

To implement the widget, first it must be imported:

`import { Livestreaming } from "bingewave-react-widgets";`

Afterwards, the live event id is placed into the widget, which will create the interface on-screen.

`<Livestreaming id={some_event_id} />`

A more complete pseudo code example of the widget in use with[React API](https://www.npmjs.com/package/bingewave-react-api) looks something similar to the below. You will have to have your auth token and organizer id to effectively use.

```
import { Livestreaming } from  "bingewave-react-widgets";
import { Events, Config } from  "bingewave-react-api";
import  React, { useEffect, useState } from  "react";

export  default  function  ExampleComponent() {

	const [widget, setWidget] = useState(false);
	
	useEffect(() => {
	    createInterface();
	}, []);

	function createInterface() {
		
		Config.setAuthToken('some_auth_token');
		
		let  data = {
			type:  7,
			organizer_id:  'an_organizer_id'
		};
	
		Events.createEvent(data).then(response  => {
			if (response.status == "success") {
				setWidget(<Livestreaming  id={response.data.id}  />);
			}
		}).catch(error  => {
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

## Tutorials

To better understand the use of various widgets in different circumstances, the auth tokens and interface design, here are [several tutorials](https://developers.bingewave.com/tutorials) on various topics:

 -  [How To Authenticate With JSON Web Tokens For Interactive Live Streams](https://medium.com/bingewave/how-to-authenticate-with-json-web-tokens-for-interactive-live-streams-61dd2675b3e6)
 - [Creating A Live Broadcast Web and Mobile App With React & React Native](https://medium.com/bingewave/creating-a-live-broadcast-web-and-mobile-app-135e451fec36)
 - [How To Use No Code To Design The Interfaces Once The Widgets Are Embedded](https://medium.com/bingewave/how-to-develop-video-conferencing-live-streaming-app-with-minimal-coding-2458ff1ee7a1)

## Building The Library

If at any point you need to compile the library, you can perform what is known a rollup. If the packages are not installed, be sure to install the development packages.

`npm install --save-dev rollup typescript`

Afterwards in the root directory, run the following commands to perform a rollup, which will compile the code into the dist folder:

`npm run build`

And finally if you have access, you can deploy the code to npm.

`npm publish --access public`


