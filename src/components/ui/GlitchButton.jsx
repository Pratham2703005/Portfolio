/* eslint-disable react/prop-types */
import './GlitchButton.css';
const GlitchButton = ({children, className, onClick}) => {
  return (
    <button className={`!px-2 sm:px-[50px] ${className}`} onClick={onClick} id="glitch"  >
    {children}
    </button>
  )
}

export default GlitchButton
