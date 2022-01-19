import { useEffect, useState } from "react";

const useFetch = (url: string) => {

    const production = process.env.NODE_ENV === "production";
    const baseUrl = production ? "https://www.yoursite.com" : "http://localhost:1337";

    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState(true);

    
    useEffect(()=> {
    //writing another function inside so i can make it async
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(baseUrl + url);
                const json = await res.json();
                setData(json);
                setLoading(false);

            } catch (error) {
                setError(error);
                console.log("error: " + error);
                setLoading(false);
            }
        }
        fetchData();
    }, [url, baseUrl])

    return {
        data, error, loading
    }
}

export default useFetch;
