import React from "react";

const skillsContent = [
  { skillClass: "p85", skillPercent: "85", skillName: "React Js" },
  { skillClass: "p75", skillPercent: "75", skillName: "Next Js" },
  { skillClass: "p70", skillPercent: "75", skillName: "Tailwind CSS" },
  { skillClass: "p60", skillPercent: "60", skillName: "Vue Js" },
  { skillClass: "p89", skillPercent: "89", skillName: "PHP" },
  { skillClass: "p89", skillPercent: "89", skillName: "Laravel Framework" },
  { skillClass: "p79", skillPercent: "79", skillName: "MySql" },
  { skillClass: "p75", skillPercent: "75", skillName: "Git" },
  { skillClass: "p70", skillPercent: "70", skillName: "Bootstrap" },
  { skillClass: "p89", skillPercent: "89", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "CSS" },
  { skillClass: "p79", skillPercent: "79", skillName: "MySql" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
