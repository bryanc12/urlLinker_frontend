import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import apiService from "../../services/api.services";

export default function Url() {
    const { url } = useParams();
    const [originalUrl, setOriginalUrl] = React.useState("");

    const getUrl = async () => {
        const response = await apiService.getUrl(url);
        if (response) {
            setOriginalUrl(response);
            window.location.href = response;
        }
    };

    useEffect(() => {
        getUrl();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen mx-5 text-center">
            <div className="my-12 mx-3 text-3xl font-bold tracking-widest">
                {originalUrl !== "" ? (
                    <>
                        <div>Redirecting to Page...</div>
                        <a
                            className="tracking-normal text-base font-normal underline hover:cursor-pointer"
                            href={originalUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Go To Page
                        </a>
                    </>
                ) : (
                    <>
                        <div>{"URL Not Found :("}</div>
                        <a
                            className="tracking-normal text-base font-normal underline hover:cursor-pointer"
                            href="/"
                        >
                            Go To Homepage
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}