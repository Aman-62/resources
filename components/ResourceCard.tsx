import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
  downloadLink: string;
}
const ResourceCard = ({
  id,
  title,
  image,
  downloadNumber,
  downloadLink,
}: Props) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-h-[356px">
      <Link href={downloadLink} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              alt={title}
              width={384}
              height={440}
              className=" rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image src="/downloads.svg" alt="download" width={20} height={20} />
          {downloadNumber}
        </div>
        <Link
          href={`/resource/${id}`}
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Download Now
          <Image src="/arrow-blue.svg" alt="arrow" width={13} height={10} />
        </Link>
      </CardContent>
    </Card>
  );
};
export default ResourceCard;
