import { validateUrl } from "@/lib/utils";
import axios from "axios";
import { useState } from "react";

export default function useUrl() {
  const [url, setUrl] = useState<string>("");
  const [fullUrl, setFullUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  function handleInput(e: string) {
    setUrl(e);
  }

  async function generateLink() {
    const isValidUrl = validateUrl(url);

    if (url !== "" && !isValidUrl) {
      setIsValid(false);
      return;
    }

    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      const shortUrlRes = await axios.post(serverUrl, {
        fullUrl: url,
      });

      const generatedShortUrl = `${import.meta.env.VITE_SERVER_BASE}/${
        shortUrlRes.data.shortUrl
      }`;

      localStorage.setItem(generatedShortUrl, url);
      
      setShortUrl(generatedShortUrl);
      setIsValid(true);
      setFullUrl(url);
      setUrl("");
    } catch (error) {
      setError("Error generating short URL");
      console.error(error);
    }
  }

  function resetUrls() {
    setFullUrl("");
    setShortUrl("");
    setUrl("");
    setIsValid(true);
    setError(null);
  }

  return {
    url,
    fullUrl,
    shortUrl,
    isValid,
    error,
    generateLink,
    handleInput,
    resetUrls,
  };
}
