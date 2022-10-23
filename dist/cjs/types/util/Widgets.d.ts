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
export default Widgets;
