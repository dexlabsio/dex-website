import Image from "next/image";

const GoogleAnalytics = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Image
      src="/google-analytics-svgrepo-com.svg"
      alt="Google Analytics"
      width={24}
      height={24}
    />
  </div>
);

export default GoogleAnalytics;