import Config from "../constants/Config";
import useScript from "./useScript";

declare global {
    interface Window { BingewaveConnector: any; }
}

window.BingewaveConnector = window.BingewaveConnector || {};

const Widgets = {
    init : (auth_token :string | null ) => {

        if(window.BingewaveConnector && typeof window.BingewaveConnector.init === "function") {
            window.BingewaveConnector.init({auth_token : auth_token});
        }
    },
    loadWidgets : () => {

        if(window.BingewaveConnector && typeof window.BingewaveConnector.parseTags === "function") {
            window.BingewaveConnector.parseTags();
        }
    },
    setAuthToken : (token : string | null) => {

        if(window.BingewaveConnector && typeof window.BingewaveConnector.setAuthToken === "function") {
            window.BingewaveConnector.setAuthToken(token);
        }
    }
}

export default Widgets;