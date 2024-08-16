import { FileRoute } from "@/constants";
import { NavigateBackButton } from "./navigate-back-btns";

type NotFoundProps = {
  href: FileRoute;
  label: string;
  buttonLabel: string;
};

export const NotFound = ({ href, label, buttonLabel }: NotFoundProps) => {
  return (
    <div className='notFound'>
      <h1 className=''>{label}</h1>
      <NavigateBackButton href={href} label={buttonLabel} />
    </div>
  );
};
