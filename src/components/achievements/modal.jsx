/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Modal = ({ images, closeModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('right') // to track swipe direction

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      } else if (event.key === 'ArrowLeft') {
        handlePrevious()
      } else if (event.key === 'ArrowRight') {
        handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeModal])

  const handlePrevious = () => {
    setDirection('left') // Set direction to left for previous
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }

  const handleNext = () => {
    setDirection('right') // Set direction to right for next
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-[90%] max-w-4xl bg-background rounded-xl shadow-2xl overflow-visible"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[80vh]">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="absolute w-full h-full object-contain"
                initial={{ opacity: 0, x: direction === 'right' ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 'right' ? -300 : 300 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          {images.length !== 1 && (
            <div className="absolute top-[50%] left-4 right-4 flex justify-between items-center">
              <button
                className="p-2 rounded-full bg-black backdrop-blur-sm hover:bg-black/90 transition-colors duration-200"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                className="p-2 rounded-full bg-black backdrop-blur-sm hover:bg-black/90 transition-colors duration-200"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          )}
          <button
            className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
            aria-label="Close Modal"
          >
            <X className="h-6 w-6" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal
