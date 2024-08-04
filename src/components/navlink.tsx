import { FileRoute } from "@/constants";
import { Link } from "@tanstack/react-router";

export function NavLink({
  name,
  icon,
  linkClasses,
  url,
}: {
  name: string;
  icon: string;
  linkClasses?: string;
  url: FileRoute;
}) {
  return (
    <Link to={url} className={`nav-link ${linkClasses}`}>
      <img src={icon} alt='' />
      <p>{name}</p>
    </Link>
  );
}
