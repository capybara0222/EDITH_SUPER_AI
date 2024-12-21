import { useEffect } from "react"

const Modal = ({ openModal, closeModal }: { openModal: boolean, closeModal: () => void }) => {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && openModal) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [openModal, closeModal])

  return (
    <div
      onClick={closeModal}
      className={`${openModal ? 'visible' : 'invisible'} fixed top-0 left-0 w-full h-full z-[51] bg-[#000000]/70 flex items-center justify-center transition duration-1000`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center justify-center"
      >
        <div className="relative">

        </div>
        <img src="/bigcoin.png" className="w-[170px] h-[170px]" />
        <span className="text-2xl font-bold font-aeonik text-[#FFE047]">Earned 50 Points</span>
      </div>
    </div>
  )
}

export default Modal