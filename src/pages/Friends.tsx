import { PiCopyFill } from "react-icons/pi"

const Friends = () => {
  return (
    <main className="w-full min-h-screen bg-bgMain font-aeonik text-[#878787]">
      <div className="flex flex-col p-5">
        <div className="flex flex-col gap-6 pt-3 text-left pb-9">
          <h3 className="text-base text-[#FCFCFC] text-medium">Referral Statistics</h3>
          <div className="flex flex-col w-full gap-6 p-3 border border-[#FFFFFF14] bg-[#FFFFFF12] rounded-xl">
            <div className="grid grid-cols-3 gap-[5px]">
              <div className="flex flex-col w-full gap-2 p-3 border border-[#262626] rounded-xl bg-[#010101]">
                <span className="text-xs">Total Referrals</span>
                <span className="text-xl font-bold text-[#FFFFFF]">20</span>
              </div>
              <div className="flex flex-col w-full gap-2 p-3 border border-[#262626] rounded-xl bg-[#010101]">
                <span className="text-xs">Total Earned</span>
                <div className="flex items-center justify-start gap-2">
                  <span className="text-xl font-bold text-[#FFFFFF]">2000</span>
                  <img src="/ether.png" className="w-[18px] h-[18px]" />
                </div>
              </div>
              <div className="flex flex-col w-full gap-2 p-3 border border-[#262626] rounded-xl bg-[#010101]">
                <span className="text-xs">Success Rate</span>
                <span className="text-xl font-bold text-[#FFFFFF]">50%</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs">Your referral link</span>
              <div className="flex justify-between items-center gap-2">
                <div className="relative flex-1 ">
                  <input
                    type="text"
                    className="border border-[#FFFFFF36] p-1.5 w-full rounded-lg bg-[#FFFFFF]/15 h-[30px] text-xs text-[#FFFFFF]/50"
                    placeholder="EDITH.com/ref=1234qwerty5678"
                    disabled
                  />
                  <button className="h-[18px] w-[18px] border border-[#FFFFFF1F] bg-[#FFFFFF1F] absolute top-1/2 -translate-y-1/2 right-1.5 flex items-center justify-center rounded-[4px] hover:border-[#FFFFFF1F] focus:outline-none">
                    <PiCopyFill className="text-xs text-[#FFFFFF]" />
                  </button>
                </div>
                <button className="bg-[#FFFFFF] border border-[#FFFFFF]/20 text-[#010101] font-medium text-sm h-7 w-[65px]">
                  Share
                </button>
              </div>
              <div className="flex items-center justify-start text-xs">
                Get&nbsp;
                <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                &nbsp;
                <img src="/ether.png" className="h-[11px] w-[11px]" />
                &nbsp;for each invited user
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-3 mb-20 text-left pb-9">
          <h3 className="text-base text-[#FFFFFF] text-medium">
            My Referrals
          </h3>
          <div className="p-[1px] rounded-[20px] bg-gradient-to-b from-[#202020] to-[#272727]">
            <div className="bg-[#101010] rounded-[19px]">
              <div className="border-b border-[#272727] p-4 flex justify-between items-center">
                <div className="basis-[47%] text-sm text-left">
                  User
                </div>
                <div className="basis-[40%] text-sm text-left">
                  Status
                </div>
                <div className="text-sm text-left flex-1">
                  Rewards
                </div>
              </div>
              <div className="p-4 flex flex-col items-stretch gap-4">
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username1
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username2
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Pending</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#FFA83E]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      -
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username3
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username4
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username5
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Pending</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#FFA83E]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      -
                    </div>
                  </div>
                </div>
                <div className="flex w-full ">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username6
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username7
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username8
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username9
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username10
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Pending</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#FFA83E]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      -
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username11
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username12
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username13
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Pending</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#FFA83E]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      -
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
                    username14
                  </div>
                  <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
                    <div className="flex items-center justify-start gap-1">
                      <p className="text-xs text-[#878787] ">Completed</p>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
                    </div>
                  </div>
                  <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
                    <div className="flex items-center justify-start text-xs gap-1">
                      <span className="text-[#FFFFFF] text-xs font-medium">100</span>
                      <img src="/ether.png" className="h-[11px] w-[11px]" />
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

export default Friends