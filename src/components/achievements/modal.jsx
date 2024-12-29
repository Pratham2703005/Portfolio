/* eslint-disable react/prop-types */


const Modal = ({selectedImage, closeModal}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="relative w-[80%] h-[80%]">
      <img
        src={selectedImage}
        alt="Enlarged"
        className="w-full h-full object-contain rounded-lg relative"
      />
      <button
        className="absolute top-0 right-40 text-white rounded-full p-2 hover:text-white/90"
        onClick={closeModal}
      >
        &#10005;
      </button>
    </div>
  </div>
  )
}

export default Modal
