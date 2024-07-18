import ResUrls from "./components/res-urls";
import UrlInput from "./components/url-input";
import useUrl from "./hooks/use-url";

function App() {
  const {
    url,
    fullUrl,
    shortUrl,
    isValid,
    handleInput,
    generateLink,
    resetUrls,
  } = useUrl();
  return (
    <div className="flex flex-col justify-center items-center w-full h-svh">
      <div className="mx-10">
        <h1>Url Shortener</h1>
        <h2>Paste the URL you want to shorten</h2>
        {fullUrl === "" && (
          <UrlInput
            url={url}
            isValid={isValid}
            generateLink={generateLink}
            handleInput={handleInput}
          />
        )}
        {shortUrl !== "" && (
          <ResUrls
            fullUrl={fullUrl}
            shortUrl={shortUrl}
            resetUrls={resetUrls}
          />
        )}
      </div>
    </div>
  );
}

export default App;
