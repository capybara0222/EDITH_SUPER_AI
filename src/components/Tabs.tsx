import { useNavigate } from "react-router-dom"

const Tabs = () => {
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center h-20 font-aeonik">
      <div className="w-full max-w-screen-md px-5 border-t-2 border-borderMain bg-[#131313] flex items-center justify-between">
        <div className="relative">
          <button className="flex flex-col items-center justify-center gap-1 p-5 border-none outline-none focus:outline-none group" onClick={() => navigate('/dashboard')}>
            <img
              src="/dashboard.png"
              className="w-auto h-[18px]"
            />
            <span className="text-[#93969D] text-xs group-hover:text-white bg-transparent">
              Dashboard
            </span>
          </button>
          <img src="/button.svg" className="absolute w-full h-full top-1/2" />
        </div>
        <button className="flex flex-col items-center justify-center gap-1 px-5 border-none outline-none focus:outline-none group" onClick={() => navigate('/friends')}>
          <img src="/friends.png" className="" />
          <span className="text-[#93969D] text-xs group-hover:text-white">Friends</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 px-5 border-none outline-none focus:outline-none group" onClick={() => navigate('/tasks')}>
          <img src="/task.png" className="" />
          <span className="text-[#93969D] text-xs group-hover:text-white">Tasks & Earn</span>
        </button>
      </div>
    </footer>
  )
}

export default Tabs