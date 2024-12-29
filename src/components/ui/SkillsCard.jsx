/* eslint-disable react/prop-types */
import './SkillsCard.css';

const SkillsCard = ({ children }) => {
  return (
    <div className="card w-full">
      {children}
    </div>
  );
}

export default SkillsCard;
