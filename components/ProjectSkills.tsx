import React, { Fragment } from "react";
import { UncontrolledTooltip } from "reactstrap";
import { ProjectSkillsType } from "../types/sections";
import { Icon } from "@iconify/react";

type Props = {
  skills: ProjectSkillsType[];
  projectName?: string;
};

const ProjectSkills = ({ skills, projectName = "project" }: Props) => {
  return (
    <div className="d-flex flex-wrap align-items-center">
      {skills &&
        skills.length > 0 &&
        skills.map((skill, i) => {
          const { name, iconifyTag } = skill;
          const cleanProject = projectName.replace(/[^a-zA-Z0-9]/g, "");
          const cleanSkill = name.replace(/[^a-zA-Z0-9]/g, "");
          const targetId = `${cleanProject}-${cleanSkill}-${i}`;
          return (
            <Fragment key={i}>
              <div
                className="icon icon-sm icon-shape rounded-circle m-1 shadow-sm bg-white"
                id={targetId}
                style={{
                  width: "2.3rem",
                  height: "2.3rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon icon={iconifyTag} data-inline="false" width="18" height="18" />
              </div>
              <UncontrolledTooltip delay={0} placement="bottom" target={targetId}>
                {name}
              </UncontrolledTooltip>
            </Fragment>
          );
        })}
    </div>
  );
};

export default ProjectSkills;
