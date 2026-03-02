import Link from "next/link";
import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type Props = {
  href: string;
  icon: ReactNode;
  tooltip: string;
}

const ProjectLink = (props: Props) => {
  return (
    <Link href={props.href}>
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="w-17.5 h-17.5 rounded-full bg-white/5 flex justify-center items-center group">
                    {props.icon}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{props.tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </Link>
  )
}

export default ProjectLink