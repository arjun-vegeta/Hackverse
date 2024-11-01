import { HoverEffect } from "../../src/components/ui/card-hover-effect";

export function SpeakersJudges() {
  return (
    <div className="bg-black w-full pt-16">
    <div className="text-white text-center">
      <h1 className="font-bold text-4xl">SPEAKERS & <span className="bg-[#7B181D] p-2">JUDGES</span></h1>
    </div>
    <div className="w-full px-8">
      <HoverEffect />
    </div>
    </div>
  );
}