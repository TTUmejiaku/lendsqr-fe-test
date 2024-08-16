import { longArrowIcon } from "@/assets/svgs";
import { FileRoute } from "@/constants";
import { Link } from "@tanstack/react-router";

type NavigateBackProps = {
  href: FileRoute;
  label: string;
};

export function NavigateBack({ href, label }: NavigateBackProps) {
  return (
    <Link to={href} className='navigateBack'>
      <img src={longArrowIcon} alt={label} />
      <p>{label}</p>
    </Link>
  );
}

export function NavigateBackButton({ href, label }: NavigateBackProps) {
  return (
    <Link to={href} className='navigateBackButton'>
      {label}
    </Link>
  );
}
