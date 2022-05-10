import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";
function Controls() {
    return (

  <div className="flex absolute inset-x-0 bottom-0 h-1/2 w-5/6 bg-gradient-to-r from-neutral-900 to-black">
    <hr className="border-t-[0.1px] border-neutral-400" />
        <h1 className="text-neutral-400 text-center">Controls</h1>
        <div className="flex-column justify-center grow">
        <button className="flex items-center justify-center w-64 h-10 bg-neutral-400 rounded-full">
          <ArrowCircleDownIcon className="h-10 w-10" />
          <p>Rev</p>
        </button>
        <button className=" bottom-14 flex items-center justify-center w-64 h-10 bg-neutral-400 rounded-full">
          <ArrowCircleUpIcon className="h-10 w-10" />
          <p>Fwd</p>
        </button>
        <button className="flex items-center justify-center w-64 h-10 bg-neutral-400 rounded-full">
          <ArrowCircleLeftIcon className="h-10 w-10" />
          <p>Left</p>
        </button>
        <button className="flex items-center justify-center w-64 h-10 bg-neutral-400 rounded-full">
          <ArrowCircleRightIcon className="h-10 w-10" />
          <p>Right</p>
        </button>
        </div>
  </div>

    )
}

export default Controls