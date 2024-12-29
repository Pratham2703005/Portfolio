/* eslint-disable react/prop-types */
import './GlitchButton.css';
const GlitchButton = ({children, className, onClick}) => {
  return (
    <button className={className} onClick={onClick} id="glitch" >
    {children}
    </button>
  )
}

export default GlitchButton
