/* eslint-disable react/prop-types */
import { useState } from 'react'
import CrazyButton from "../ui/CrazyButton"
import CoolMode from "../ui/CoolMode"
import Modal from './modal'

const Achievement = ({
  title,
  description,
  image,
  links,
  linktexts,
  reverse = false,
  galleryImages
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center p-6 rounded-lg mb-12`}>
      <img
        src={image}
        alt={title}
        className={`w-full md:w-1/3 h-[18rem] object-contain rounded-lg mb-6 md:mb-0 ${reverse ? 'md:ml-6' : 'md:mr-6'} transform hover:scale-105 transition-transform`}
        onClick={openModal}
      />
      <div className="md:w-2/3">
        <CoolMode>
          <h3 className="text-3xl font-semibold text-cyan-400 mb-3 hover:text-cyan-500 transition-colors">
            {title}
          </h3>
        </CoolMode>
        <p className="text-gray-200 text-lg mb-6 w-full" dangerouslySetInnerHTML={{ __html: description }} />
        {links.map((link, index) => (
            <CrazyButton key={index} href={link} className={"mx-0 sm:mx-2 my-1 !w-full sm:!w-auto text-center "}>
                {linktexts[index]}
            </CrazyButton>
            ))}
        
      </div>
      {isModalOpen && galleryImages.length !== 0 && (
        <Modal images={galleryImages} closeModal={closeModal} />
      )}
    </div>
  )
}

export default Achievement

