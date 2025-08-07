import Image from "next/image";

const HubSpot = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Image
      src="/hubspot-svgrepo-com.svg"
      alt="HubSpot"
      width={24}
      height={24}
    />
  </div>
);

export default HubSpot;