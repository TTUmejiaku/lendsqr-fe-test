import { FileRoute } from "@/constants";
import { Link } from "@tanstack/react-router";

type NavLinkProps = {
  name: string;
  icon: string;
  linkClasses?: string;
  url: FileRoute;
  toggleSidebar: () => void;
};

export function NavLink({
  name,
  icon,
  linkClasses,
  url,
  toggleSidebar,
}: NavLinkProps) {
  return (
    <Link
      to={url}
      className={`nav-link ${linkClasses}`}
      onClick={toggleSidebar}
    >
      <img src={icon} alt='' />
      <p>{name}</p>
    </Link>
  );
}
