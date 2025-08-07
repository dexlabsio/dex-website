import Image from "next/image";

const Excel = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    <Image
      src="/excel-svgrepo-com.svg"
      alt="Excel"
      width={24}
      height={24}
    />
  </div>
);

export default Excel;