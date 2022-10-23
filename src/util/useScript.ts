import { useEffect } from 'react';

function isScriptAlreadyIncluded(src: string) {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++)
        if (scripts[i].getAttribute('src') == src) return true;
    return false;
}

const useScript = (url : string | null, id :string | null) => {

    useEffect(() => {

        if (url && !isScriptAlreadyIncluded(url)){
 
            const script = document.createElement('script');

            script.src = url;
            script.async = true;

            if(id) {
                script.id = id;
            }

            document.body.appendChild(script);

            /*return () => {
                document.body.removeChild(script);
            }*/
        }
    }, [url, id]);

};

export default useScript;