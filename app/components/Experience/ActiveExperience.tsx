import { Experience } from "@/app/types";
import React from "react";

interface Props {
  activeWorkExperience: Experience;
}

const ActiveExperience = ({ activeWorkExperience }: Props) => {
  return (
    <>
      <h2 className="mb-2">
        <span>{activeWorkExperience.designation} </span>
        <span className="text-purple-400">@ {activeWorkExperience.workPlace}</span>
      </h2>
      <h4 className="mb-5">{activeWorkExperience.timePeriodWorked}</h4>
      <ul>
        {activeWorkExperience.bullets.map((bullet) => (
          <li className="mb-5">
            <p>{bullet}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ActiveExperience;
