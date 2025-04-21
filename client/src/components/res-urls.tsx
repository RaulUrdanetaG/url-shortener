import MyUrls from "./my-urls";
import { Button } from "@/components/ui/button";

interface ResUrlsProps {
  fullUrl: string;
  shortUrl: string;
  resetUrls: () => void;
}

export default function ResUrls({
  fullUrl,
  shortUrl,
  resetUrls,
}: ResUrlsProps) {
  return (
    <div className="flex flex-col gap-1 max-w-[300px]">
      <p>{fullUrl}</p>
      <p>{shortUrl}</p>
      <div className="flex gap-1">
        <MyUrls />
        <Button className="flex w-full" onClick={resetUrls}>
          Shorten another
        </Button>
      </div>
    </div>
  );
}
