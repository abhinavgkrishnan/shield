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
        <div className="grid gap-4 grid-cols-2 grid-rows-2 justify-content-center h-full first-letter:">
       
        <button className="flex h-10 w-64 items-center justify-center m-auto rounded-full grid-row-2 bg-neutral-400">
          <ArrowCircleUpIcon className="h-10 w-10" />
          <p>Fwd</p>
        </button>
        <button className="flex h-10 w-64 items-center justify-center m-auto rounded-full bg-neutral-400">
          <ArrowCircleLeftIcon className="h-10 w-10" />
          <p>Left</p>
        </button>
          <button className="flex h-10 w-64 items-center justify-center m-auto rounded-full bg-neutral-400">
            <ArrowCircleDownIcon className="h-10 w-10" />
            <p>Rev</p>
          </button>
        <button className="flex h-10 w-64 items-center justify-center m-auto rounded-full bg-neutral-400">
          <ArrowCircleRightIcon className="h-10 w-10" />
          <p>Right</p>
        </button>
      </div>
    </div>
  )
}

export default Controls
