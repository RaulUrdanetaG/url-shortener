import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UrlInputProps {
  url: string;
  isValid: boolean;
  generateLink: () => void;
  handleInput: (value: string) => void;
}

export default function UrlInput({
  url,
  isValid,
  generateLink,
  handleInput,
}: UrlInputProps) {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Enter link here"
          value={url}
          onChange={(e) => handleInput(e.target.value)}
        />
        <Button disabled={url === ""} onClick={generateLink}>
          Shorten URL
        </Button>
      </div>
      {!isValid && <p className="text-red-500">Please enter a valid url</p>}
    </>
  );
}
