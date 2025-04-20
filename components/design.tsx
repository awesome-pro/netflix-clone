import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Iphone() {
  return (
    <div className="relative flex flex-col items-center">
        <TextGenerateEffect words="Watch on Any Device from anywhere" className="text-gradient-premium"/>
      <Iphone15Pro
        className="w-[90vw] -rotate-90"
        videoSrc="/dog.mp4"
      />
    </div>
  );
}
