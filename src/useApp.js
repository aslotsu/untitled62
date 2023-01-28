import { useEffect, useState } from "react";
import * as Realm from "realm-web";

export function useApp() {
    const id = "byte-resident-whmyr"
    const [app, setApp] = useState(null);

    // Run in useEffect so that App is not created in server-side environment

    useEffect(() => {

        setApp(Realm.getApp(id));

    }, []);

    return app;

}

