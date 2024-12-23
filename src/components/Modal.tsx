const Modal = ({ closeModal }: { closeModal: () => void }) => {


  return (
    <div
      className="fixed top-0 left-0 bg-[#000000b3] w-full h-screen flex items-center justify-center z-[51]"
      onClick={closeModal} // Close modal on click anywhere
    >
      <div
        className="rounded-lg text-center"
        onClick={(e) => {
          e.stopPropagation()
          closeModal()
        }} // Prevent click inside modal from closing it
      >
        <div className="relative">
          <img src="/lightning.png" className="h-[500px] min-w-[500px] max-w-[500px] overflow-hidden" />
          <img src="/bigcoin.png" className="w-[170px] h-[170px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[10px_10px_50px_-10px_#000000] rounded-full" alt="Big Coin" />
          <span className="block mt-4 text-2xl font-bold font-aeonik text-[#FFE047] absolute bottom-16 left-1/2 -translate-x-1/2 -translate-y-full">
            Earned 50 Points
          </span>
        </div>
      </div>
    </div>
  )
}

export default Modal