import Image from "next/image";

const PostgreSQL = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Image
      src="/postgresql-logo-svgrepo-com.svg"
      alt="PostgreSQL"
      width={24}
      height={24}
    />
  </div>
);

export default PostgreSQL;