import type { Activity } from "../libs/types"

const Activity = ({item}: {item: Activity}) => {
  return (
    <div className="flex w-full">
      <div className="basis-[47%] text-sm text-left font-medium text-[#FFFFFF]">
        {item.rewarded_user_id}
      </div>
      <div className="basis-[40%] text-sm text-left font-medium text-[#FFFFFF]">
        <div className="flex items-center justify-start gap-1">
          <p className="text-xs text-[#878787] ">Completed</p>
          <div className="w-2.5 h-2.5 rounded-full border-2 border-[#07D7C2]"></div>
        </div>
      </div>
      <div className="text-sm text-left font-medium text-[#FFFFFF] flex-1">
        <div className="flex items-center justify-start text-xs gap-1">
          <span className="text-[#FFFFFF] text-xs font-medium">
            {item.points}
          </span>
          <img src="/ether.png" className="h-[11px] w-[11px]" />
        </div>
      </div>
    </div>
  )
}

export default Activity