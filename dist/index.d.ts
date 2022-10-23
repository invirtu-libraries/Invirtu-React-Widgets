/// <reference types="react" />
interface WidgetOptions {
    id: string;
    auth_token: string | null;
}

declare const VideoConferencing: ({ id, auth_token }: WidgetOptions) => JSX.Element;

declare const Livestreaming: ({ id, auth_token }: WidgetOptions) => JSX.Element;

declare const Broadcasting: ({ id, auth_token }: WidgetOptions) => JSX.Element;

declare const Join: ({ id, auth_token }: WidgetOptions) => JSX.Element;

declare const Popup: ({ id, auth_token }: WidgetOptions) => JSX.Element;

declare const Ticketing: ({ id, auth_token }: WidgetOptions) => JSX.Element;

declare const Paywall: ({ id, auth_token }: WidgetOptions) => JSX.Element;

declare global {
    interface Window {
        BingewaveConnector: any;
    }
}
declare const Widgets: {
    init: (auth_token: string | null) => void;
    loadWidgets: () => void;
    setAuthToken: (token: string | null) => void;
};

export { Broadcasting, Popup as Join, Livestreaming, Paywall, Join as Popup, Ticketing, VideoConferencing, Widgets };
