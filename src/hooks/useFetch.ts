import { useEffect, useState } from "react";
import { ItemModel } from "../models/ItemModel";


const useFetch = (url: string) => {

    const [data, setData] = useState<ItemModel[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    
    useEffect(()=> {
    //writing another function inside so i can make it async
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
                setLoading(false);

            } catch (error: any) {
                setError(error);
                console.log("error: " + error);
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return {
        loading, error, data
    }
}

export default useFetch;
