
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";

interface ImageCardProps {
  name: string;
  description: string;
  src: string;
}

export const ImageCard = ({ name, description, src }: ImageCardProps) => {
  return (
    <Card className="min-w-[15rem] bg-background border-foreground color-secondary border-4 text-secondary">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div className="w-[14rem] h-[14rem] relative flex">
          <Image src={src} alt={name} width={500} height={500} />
        </div>
      </CardContent>
      
    </Card>
  );
};
