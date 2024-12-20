import { NavLink } from "react-router-dom"

const Tabs = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center h-20 font-aeonik">
      <div className="w-full max-w-screen-md px-5 border-t-2 border-borderMain bg-[#131313] flex items-center justify-between">
        <NavLink to={'/dashboard'}>
          {({ isActive }) => (
            <button className="flex flex-col items-center justify-center gap-2 border-none focus:outline-none relative group px-5">
              <div className={`${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} bg-[#FFFFFF] blur-md w-4 h-4 transition-opacity duration-200`}></div>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                className={`${isActive ? 'fill-[#FFFFFF] stroke-[#FFFFFF]' : 'fill-transparent group-hover:fill-[#FFFFFF] group-hover:stroke-[#FFFFFF] stroke-[#93969D]'} transition-colors duration-200 absolute left-1/2 -translate-x-1/2 top-2 -translate-y-1/2`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.39564 1.42025C7.39178 0.859918 8.60809 0.859917 9.60423 1.42025L13.6946 3.7211C14.725 4.30069 15.3627 5.39097 15.3627 6.57318V13.7277C15.3627 15.5349 13.8976 17 12.0903 17H3.90953C2.10228 17 0.637207 15.5349 0.637207 13.7277V6.57318C0.637207 5.39098 1.27486 4.30069 2.30524 3.7211L6.39564 1.42025ZM5.13665 9.63729C5.13665 8.05594 6.41859 6.774 7.99994 6.774C9.58129 6.774 10.8632 8.05594 10.8632 9.63729C10.8632 11.2186 9.58129 12.5006 7.99994 12.5006C6.41859 12.5006 5.13665 11.2186 5.13665 9.63729Z"
                />
              </svg>
              <span
                className={`${isActive ? 'text-[#FFFFFF]' : 'text-[#93969D] group-hover:text-[#FFFFFF]'} text-xs transition-colors duration-200`}>
                Dashboard
              </span>
              <div className={`${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} absolute -bottom-3 translate-y-full left-0 w-full h-2 bg-[#FFFFFF] blur-lg`}></div>
            </button>
          )}
        </NavLink>
        <NavLink to={'/friends'}>
          {({ isActive }) => (
            <button className="flex flex-col items-center justify-center gap-2 border-none focus:outline-none relative group px-5">
              <div className={`${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} bg-[#FFFFFF] blur-md w-4 h-4 transition-opacity duration-200`}></div>
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                className={`${isActive ? 'fill-[#FFFFFF] stroke-[#FFFFFF]' : 'fill-transparent group-hover:fill-[#FFFFFF] group-hover:stroke-[#FFFFFF] stroke-[#93969D]'} transition-colors duration-200 absolute left-1/2 -translate-x-1/2 top-2 -translate-y-1/2`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2861 4.15152C10.2861 5.89205 8.87371 7.30303 7.13138 7.30303C5.38905 7.30303 3.97662 5.89205 3.97662 4.15152C3.97662 2.41098 5.38905 1 7.13138 1C8.87371 1 10.2861 2.41098 10.2861 4.15152Z"
                />
                <path
                  d="M19.0224 4.15152C19.0224 5.89205 17.61 7.30303 15.8677 7.30303C14.1253 7.30303 12.7129 5.89205 12.7129 4.15152C12.7129 2.41098 14.1253 1 15.8677 1C17.61 1 19.0224 2.41098 19.0224 4.15152Z"
                />
                <path d="M1.15313 14.9429C0.867107 16.0308 1.77896 17 2.90492 17H11.2192C12.3451 17 13.257 16.0308 12.971 14.9429C11.1426 7.98874 2.98147 7.98874 1.15313 14.9429Z"
                />
                <path d="M21.8473 14.9478C20.676 10.4834 16.8959 8.88232 13.8535 10.1446C14.819 11.4298 16.5249 14.6 15.625 17H20.0942C21.2202 17 22.1327 16.0358 21.8473 14.9478Z"
                />
              </svg>
              <span className={`${isActive ? 'text-[#FFFFFF]' : 'text-[#93969D] group-hover:text-[#FFFFFF]'} text-xs transition-colors duration-200`}>
                Friends
              </span>
              <div className={`${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} absolute -bottom-3 translate-y-full left-0 w-full h-2 bg-[#FFFFFF] blur-lg`}></div>
            </button>
          )}
        </NavLink>
        <NavLink to={'/tasks'}>
          {({ isActive }) => (
            <button className="flex flex-col items-center justify-center gap-2 border-none focus:outline-none relative group px-5">
              <div className={`${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} bg-[#FFFFFF] blur-md w-4 h-4 transition-opacity duration-200`}></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className={`${isActive ? 'fill-[#FFFFFF] stroke-[#FFFFFF]' : 'fill-transparent group-hover:fill-[#FFFFFF] group-hover:stroke-[#FFFFFF] stroke-[#93969D]'} transition-colors duration-200 absolute left-1/2 -translate-x-1/2 top-2 -translate-y-1/2`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path d="M2.49954 9H21.4995M9.99954 3L7.99954 9L11.9995 20.5L15.9995 9L13.9995 3M12.6141 20.2625L21.5727 9.51215C21.7246 9.32995 21.8005 9.23885 21.8295 9.13717C21.8551 9.04751 21.8551 8.95249 21.8295 8.86283C21.8005 8.76114 21.7246 8.67005 21.5727 8.48785L17.2394 3.28785C17.1512 3.18204 17.1072 3.12914 17.0531 3.09111C17.0052 3.05741 16.9518 3.03238 16.8953 3.01717C16.8314 3 16.7626 3 16.6248 3H7.37424C7.2365 3 7.16764 3 7.10382 3.01717C7.04728 3.03238 6.99385 3.05741 6.94596 3.09111C6.89192 3.12914 6.84783 3.18204 6.75966 3.28785L2.42633 8.48785C2.2745 8.67004 2.19858 8.76114 2.16957 8.86283C2.144 8.95249 2.144 9.04751 2.16957 9.13716C2.19858 9.23885 2.2745 9.32995 2.42633 9.51215L11.385 20.2625C11.596 20.5158 11.7015 20.6424 11.8279 20.6886C11.9387 20.7291 12.0603 20.7291 12.1712 20.6886C12.2975 20.6424 12.4031 20.5158 12.6141 20.2625Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <span className={`${isActive ? 'text-[#FFFFFF]' : 'text-[#93969D] group-hover:text-[#FFFFFF]'} text-xs transition-colors duration-200 text-nowrap`}>
                Tasks & Earn
              </span>
              <div className={`${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} absolute -bottom-3 translate-y-full left-0 w-full h-2 bg-[#FFFFFF] blur-lg`}></div>
            </button>
          )}
        </NavLink>

      </div>
    </footer>
  )
}

export default Tabs