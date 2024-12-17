import React from "react";
import { useState } from "react";

import apiService from "../../services/api.services";
import { Turnstile } from "@marsidev/react-turnstile";

export default function Homepage() {
    const [urlInput, setUrlInput] = useState("");
    const [cloudflareToken, setCloudflareToken] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");

    const handleUrlInput = (e) => {
        setUrlInput(e.target.value);
    };

    const handleUrlSubmit = async () => {
        const response = await apiService.submitUrl(urlInput, cloudflareToken);
        if (response) {
            setShortenedUrl(response);
        }
    };

    const copyToClipboard = async () => {
        try {
            const permissions = await navigator.permissions.query({
                name: "clipboard-write",
            });
            if (
                permissions.state === "granted" ||
                permissions.state === "prompt"
            ) {
                await navigator.clipboard.writeText(
                    `https://urllinker.bryanc12.net/${shortenedUrl}`
                );
            } else {
                throw new Error(
                    "Can't access the clipboard. Check your browser permissions."
                );
            }
        } catch (error) {}
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen mx-5 text-center">
            <div className="my-12 mx-3 text-3xl font-bold tracking-widest">
                URL Linker
            </div>
            <div className="flex flex-col items-center gap-5">
                <div className="flex gap-5">
                    <input
                        className="text-black p-2 rounded border border-gray-300 focus:outline-none"
                        type="text"
                        placeholder="Enter URL"
                        value={urlInput}
                        onChange={handleUrlInput}
                    />
                    <button
                        className="bg-white/20 hover:bg-white/30 active:bg-white/50 duration-150 text-white py-2 px-4 rounded font-bold disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={handleUrlSubmit}
                        disabled={cloudflareToken === "" || urlInput === ""}
                    >
                        Submit
                    </button>
                </div>
                <Turnstile
                    siteKey={process.env.REACT_APP_CLOUDFLARE_KEY}
                    onSuccess={(token) => setCloudflareToken(token)}
                />
                <div className="flex gap-3 items-center">
                    {shortenedUrl !== "" && (
                        <>
                            <div>Shortened URL:</div>
                            <a
                                href={`https://urllinker.bryanc12.net/${shortenedUrl}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline"
                            >
                                https://urllinker.bryanc12.net/{shortenedUrl}
                            </a>
                            <button
                                className="border-2 border-solid hover:bg-white/30 active:bg-white/50 duration-150 py-0.5 px-1 rounded"
                                onClick={copyToClipboard}
                            >
                                Copy
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center gap-1">
                <div className="flex gap-1">
                    An URL shortener created by
                    <a
                        className="font-bold"
                        href="https://github.com/bryanc12"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Bryan
                    </a>
                    with <i className="fi fi-sr-heart pt-[2px] text-red-500" />{" "}
                    love.
                </div>
                <div className="flex gap-1">
                    <a
                        className="font-bold"
                        href="https://github.com/bryanc12/urlLinker_frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Frontend
                    </a>
                    {" & "}
                    <a
                        className="font-bold"
                        href="https://github.com/bryanc12/urlLinker_backend"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Backend
                    </a>
                    source code available on
                    <i className="fi fi-brands-github pt-[2px]" />
                    Github.
                </div>
            </div>
        </div>
    );
}
