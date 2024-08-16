import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/primitives/pr-dropdown-menu";
import { eye, userTick, userX } from "@/assets/svgs";
import { Link } from "@tanstack/react-router";
import { FileRoute } from "@/constants";

export default function TableActionsDropdown({ userId }: { userId: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreVertical />
      </DropdownMenuTrigger>

      <DropdownMenuContent className='table-actions-dropdown box-shadow'>
        <DropdownMenuItem className='table-actions-dropdown__item'>
          <Link
            to={FileRoute.UserDetails}
            params={{ userId }}
            className='table-actions-dropdown__link'
          >
            <img src={eye} alt='' className='' />
            <p className=''>View Details</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='table-actions-dropdown__item'>
          <img src={userX} alt='' className='' />
          <p className=''>Blacklist User</p>
        </DropdownMenuItem>
        <DropdownMenuItem className='table-actions-dropdown__item'>
          <img src={userTick} alt='' className='' />
          <p className=''>Activate User</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
