const Tasks = () => {
  return (
    <main className="w-full min-h-screen bg-bgMain font-aeonik text-[#878787] homeBackground">
      <div className="flex flex-col p-5">
        <div className="flex flex-col gap-6 pt-3 text-left pb-9">
          <h3 className="text-base text-[#FCFCFC] text-medium">Statistics</h3>
          <div className="flex flex-col w-full gap-6 p-3 border border-[#FFFFFF14] bg-[#FFFFFF12] rounded-xl">
            <div className="grid grid-cols-2 gap-[5px]">
              <div className="flex flex-col w-full gap-2 p-3 border border-[#262626] rounded-xl bg-[#010101] justify-between">
                <span className="text-xs">Tasks Completed</span>
                <span className="text-xl font-bold text-[#FFFFFF] leading-none">20</span>
              </div>
              <div className="flex flex-col w-full gap-3 p-3 border border-[#262626] rounded-xl bg-[#010101] justify-between">
                <span className="text-xs">Success Rate</span>
                <span className="text-xl font-bold text-[#FFFFFF] leading-none">100%</span>
              </div>
              <div className="flex flex-col w-full gap-3 p-3 pr-16 border border-[#262626] rounded-xl bg-[#010101] justify-between relative">
                <span className="text-xs">Total Earned</span>
                <span className="text-xl font-bold text-[#FFFFFF] leading-none">2000</span>
                <img src="/gold-ether.png" className="w-10 h-10 absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
              <div className="flex flex-col w-full gap-3 p-3 pr-16 border border-[#262626] rounded-xl bg-[#010101] justify-between relative">
                <span className="text-xs">Unlockable Points</span>
                <span className="text-xl font-bold text-[#FFFFFF] leading-none">2000</span>
                <img src="/silver-ether.png" className="w-10 h-10 absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-3 mb-20 text-left pb-9">
          <div className="flex items-center justify-between">
            <h3 className="text-base text-[#FFFFFF] text-medium">
              Tasks
            </h3>
            <div className="p-[1px] bg-gradient-to-b from-[#202020] to-[#272727] rounded-full">
              <div className="bg-[#101010] rounded-full p-1 flex items-center justify-between gap-1">
                <div className="p-[1px] bg-gradient-to-b from-[#202020] to-[#272727] rounded-full w-[96px] h-[31px] flex items-center justify-center">
                  <div className="bg-[#FFFFFF] rounded-full text-[#010101] text-base font-medium w-full h-full flex items-center justify-center">
                    One-Time
                  </div>
                </div>
                <div className="p-[1px] bg-gradient-to-b from-[#202020] to-[#272727] rounded-full w-[96px] h-[31px] flex items-center justify-center">
                  <div className="bg-[#FFFFFF1F] rounded-full text-[#FCFCFC] text-base font-medium  w-full h-full flex items-center justify-center">
                    Daily Tasks
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            <div className="bg-gradient-to-b from-[#202020] to-[#272727] p-[1px] rounded-[20px]">
              <div className="rounded-[19px] bg-[#101010] px-4 py-4 flex items-stretch justify-between">
                <div className="flex flex-col justify-between">
                  <p className="text-[#FFFFFF] text-base font-medium">Follow us on Twitter</p>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white text-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#202020] to-[#272727] p-[1px] rounded-[20px]">
              <div className="rounded-[19px] bg-[#101010] px-4 py-4 flex items-stretch justify-between">
                <div className="flex flex-col justify-between">
                  <p className="text-[#FFFFFF] text-base font-medium">Follow us on Twitter</p>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white text-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#202020] to-[#272727] p-[1px] rounded-[20px]">
              <div className="rounded-[19px] bg-[#101010] px-4 py-4 flex items-stretch justify-between">
                <div className="flex flex-col justify-between">
                  <p className="text-[#FFFFFF] text-base font-medium">Follow us on Twitter</p>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white text-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#202020] to-[#272727] p-[1px] rounded-[20px]">
              <div className="rounded-[19px] bg-[#101010] px-4 py-4 flex items-stretch justify-between">
                <div className="flex flex-col justify-between">
                  <p className="text-[#FFFFFF] text-base font-medium">Follow us on Twitter</p>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white text-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#202020] to-[#272727] p-[1px] rounded-[20px]">
              <div className="rounded-[19px] bg-[#101010] px-4 py-4 flex items-stretch justify-between">
                <div className="flex flex-col justify-between">
                  <p className="text-[#FFFFFF] text-base font-medium">Follow us on Twitter</p>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white text-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#202020] to-[#272727] p-[1px] rounded-[20px]">
              <div className="rounded-[19px] bg-[#101010] px-4 py-4 flex items-stretch justify-between">
                <div className="flex flex-col justify-between">
                  <p className="text-[#FFFFFF] text-base font-medium">Follow us on Twitter</p>
                  <div className="flex items-center justify-start gap-1">
                    <p className="text-xs text-[#878787] ">Completed</p>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                  </div>
                </div>
                <div className="p-[1px] bg-gradient-to-t from-white to-transparent rounded-full">
                  <div className="relative p-6 rounded-full bg-gradient-to-t from-[#585858] to-[#101010]">
                    <div className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <span className="font-bold leading-none text-white text-base ">
                        52
                      </span>
                      <span className="font-medium leading-none text-white text-[11px]">
                        Points
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Tasks  