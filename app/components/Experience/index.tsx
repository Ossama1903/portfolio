"use client";

import { useState } from "react";
import ActiveExperience from "./ActiveExperience";
import { Experience as ExperienceType } from "@/app/types";
import fonts from "../../fonts";

const workExperience: ExperienceType[] = [
  {
    workPlace: "Musketeers Tech",
    designation: "Backend Developer",
    timePeriodWorked: "Dec 2023 - Present",
    bullets: [
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
    ],
  },
  {
    workPlace: "Devsinc",
    designation: "Associated Software Engineer",
    timePeriodWorked: "Dec 2023 - Present",
    bullets: [
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
    ],
  },
  {
    workPlace: "Devclub",
    designation: "Co-founder",
    timePeriodWorked: "March 2021 - Dec 2023",
    bullets: [
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
    ],
  },
];

const Experience = () => {
  const [activeWorkExperience, setActiveWorkExperience] = useState(
    workExperience[0]
  );

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 grid grid-cols-12 h-fit">
        {workExperience.map((experience: ExperienceType, index) => (
          <button
            key={index}
            onClick={() =>
              setActiveWorkExperience(
                workExperience.filter(
                  (nestedExperience) =>
                    nestedExperience.workPlace === experience.workPlace
                )[0]
              )
            }
            className={`${fonts.chilanka} text-base text-purple-400 border-none col-span-12 my-1 bg-transparent`}
            style={{
              borderLeft:
                activeWorkExperience.workPlace === experience.workPlace
                  ? "2px solid #C084FC"
                  : "none",
            }}
          >
            {experience.workPlace}
          </button>
        ))}
      </div>
      <div className="col-span-9">
        <ActiveExperience activeWorkExperience={activeWorkExperience} />
      </div>
    </div>
  );
};

export default Experience;
