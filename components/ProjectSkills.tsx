
import React, { Fragment } from "react";
import { UncontrolledTooltip } from "reactstrap";
import { PSkillType } from "../types/sections";
import { Icon } from "@iconify/react";

const ProjectSkills = ({ skills }: PSkillType) => {
  return (
    <div className="d-flex flex-wrap mb-3">
      {skills.length &&
        skills.map((skill, i) => {
          const { name, iconifyTag } = skill;
          return (
            <Fragment key={i}>
              <div
                className="icon icon-md icon-shape rounded-circle m-1 primary project-skills"
                id={name.replace(/\s/g, "")}
              >
                <Icon icon={iconifyTag} data-inline="false"></Icon>
              </div>
              <UncontrolledTooltip delay={0} placement="bottom" target={name.replace(/\s/g, "")}>
                {skill.name}
              </UncontrolledTooltip>
            </Fragment>
          );
        })}
    </div>
  );
};

export default ProjectSkills;
