import { useState } from "react";
import SectionHeader from "../SectionHeader";
import css from "./index.module.css";

type ExperienceType = {
  companyName: string;
  bulletPoints: string[];
};

const pastRoles: ExperienceType[] = [
  {
    companyName: "Dolthub",
    bulletPoints: [
      "Built numerous full-stack projects with a GoLang stack from Schema to UI including adding a teams feature",
      "Took on UI projects including redesign of the homepage and pricing page for HostedDolt",
      "Responsible for multiple improvements to SEO including: Robots and Sitemap files, implementation of Featured images and Cards on Dolthub’s Blog site, and Homepage speed up",
      "Worked with TS, Tailwind, GraphQL/Apollo, NextJS, Go",
    ],
  },
  {
    companyName: "Amgen",
    bulletPoints: [
      "Supported and delivered features on multiple in house web-app",
      "Built and delivered a new in house web-app to visualize and manage a internal business practice",
      "Built data-driven reusable React components in multiple applications",
      "Worked with TS, ReactJS, Redux, Bootstrap, Python, Django",
    ],
  },
  {
    companyName: "HelloAdvisr",
    bulletPoints: [
      "Built a business financial advisor web app from scratch.",
      "Took part in designing the database, UI, screens, and features.",
      "Identified and fixed use-case issues to make the app accessible regardless of the user’s financial literacy.",
      "Worked with JS, ReactJS, Redux, Bootstrap, Firebase",
    ],
  },
];

const Experience = (): JSX.Element => {
  const [selectedRole, setSelectedRole] = useState<ExperienceType>(
    pastRoles[0]
  );

  return (
    <div className={css.container}>
      <SectionHeader num={"02"} title={"Places I worked at"} />

      <div className={css.workHistory}>
        <div className={css.roles}>
          {pastRoles.map((role) => (
            <button
              key={role.companyName}
              onClick={() => setSelectedRole(role)}
            >
              {role.companyName}
            </button>
          ))}
        </div>

        <div className={css.currentRole}>
          {selectedRole.bulletPoints.map((bulletPoint) => (
            <div className={css.bulletPoint} key={bulletPoint}>
              {bulletPoint}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
