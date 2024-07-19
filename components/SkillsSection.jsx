import { SKILLS } from "@/Global/Constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold pt-12">{SKILLS.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
          {SKILLS.description}
        </p>
      </div>
      
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-[30px] gap-y-[30px]">
        {SKILLS.skillList.map((skill, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group gap-3 transition-all duration-300 hover:neon-purple">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="group-hover:text-accent transition-all duration-300">
                      {skill.name}
                    </h4>
                  </TooltipTrigger>

                 <TooltipContent>
                  {`Level: ${skill.level}`}
                </TooltipContent>
              
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsSection;
