import React from "react";
import skillsArr from "../../data/iconsData";
import "./Icons.css";

const Icons = () => {
  return (
    <section>
      <div className="Icons">
        {skillsArr.map((skillData) => (
          <img
            className="Icons-icon"
            src={skillData.src}
            alt={skillData.alt}
            key={skillData.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Icons;
