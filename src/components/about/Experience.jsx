import React from "react";

const experienceContent = [
  {
    year: "   2023 - Present",
    position: "Full Stack Developer",
    compnayName: "Soft Park.",
    details: `Software Company`,
  },
  {
    year: "2023",
    position: " Software Developer",
    compnayName: "MMIT Soft Ltd.",
    details: `Software Company`,
  },
  {
    year: "2022 - 2023",
    position: "Software Developer",
    compnayName: "IGL Web Ltd.",
    details: `Software/It Company`,
  },
  {
    year: "2018 - 2019",
    position: " Web Developer",
    compnayName: "Felix Tech Ltd.",
    details: `Software Company`,
  },
  {
    year: "2017 - 2018",
    position: "Trainer",
    compnayName: "Engineer Institute",
    details: `Training Institute`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
