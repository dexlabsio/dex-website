import Image from "next/image";

const Shopify = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Image
      src="/shopify-color-svgrepo-com.svg"
      alt="Shopify"
      width={24}
      height={24}
    />
  </div>
);

export default Shopify;