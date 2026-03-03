import { ScrollArea } from "../ui/scroll-area";

type Props = {
    title: string;
    description: string;
    items: {
        duration: string;
        position?: string | null;
        company?: string | null;
        degree?: string | null;
        institution?: string | null;
     }[];
    type: "experiences" | "educations";
}

const TabResumeContent = (props: Props) => {
  return (
    <>
        <div className="flex flex-col gap-7.5 text-center xl:text-left">
            <h3 className="text-4xl font-bold">{props.title}</h3>
            <p className="max-w-180 text-white/60 mx-auto xl:mx-0 text-justify">{props.description}</p>
            <div className="py-1"></div>
        </div>
        <ScrollArea className="h-100">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">
            {props.items.map((item, index) => (
                <li
                key={index}
                className="bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-65 min-h-15 text-center lg:text-left">
                    {props.type === "experiences" ? item.position : item.degree}
                </h3>
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <p className="text-white/60">
                    {props.type === "experiences" ? item.company : item.institution}
                    </p>
                </div>
                </li>
            ))}
            </ul>
        </ScrollArea>
    </>
  )
}

export default TabResumeContent