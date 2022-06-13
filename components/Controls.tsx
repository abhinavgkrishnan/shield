import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline'
function Controls() {
  return (
    <div className="flex-column absolute inset-x-0 bottom-0 h-1/2 w-5/6 bg-gradient-to-r from-neutral-900 to-black">
      {/* <hr className="border-t-[0.1px] border-neutral-400" /> */}
      <h1 className="grow-0 text-center text-neutral-400">Controls</h1>
      <div className="justify-content-center first-letter: grid h-full grid-cols-2 grid-rows-2 gap-4">
        <button className="m-auto flex h-10 w-64 items-center justify-center rounded-full bg-neutral-400 hover:bg-neutral-500">
          <ArrowCircleUpIcon className="h-10 w-10" />
          <p>Fwd</p>
        </button>
        <button className="m-auto flex h-10 w-64 items-center justify-center rounded-full bg-neutral-400 hover:bg-neutral-500">
          <ArrowCircleLeftIcon className="h-10 w-10" />
          <p>Left</p>
        </button>
        <button className="m-auto flex h-10 w-64 items-center justify-center rounded-full bg-neutral-400 hover:bg-neutral-500">
          <ArrowCircleDownIcon className="h-10 w-10" />
          <p>Rev</p>
        </button>
        <button className="m-auto flex h-10 w-64 items-center justify-center rounded-full bg-neutral-400 hover:bg-neutral-500">
          <ArrowCircleRightIcon className="h-10 w-10" />
          <p>Right</p>
        </button>
      </div>
    </div>
  )
}

export default Controls
