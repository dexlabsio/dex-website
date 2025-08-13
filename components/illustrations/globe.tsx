import Image from "next/image";

export default function GlobeIllustration() {
  return (
    <Image
      src="/globe.svg"
      alt="Globe"
      width={200}
      height={200}
      className="w-full h-auto"
    />
  );
}