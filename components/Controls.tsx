import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline'
import { useEffect, useRef, useState } from 'react'

// const webSocket = new WebSocket("ws://192.168.1.101:5560")

function Controls() {
  // const [ws, setws] = useState();

  // useEffect(() => {
  //   setws(new WebSocket("ws://192.168.1.101:5660"))
  //   ws.addEventListener('open', function (event) {
  //     console.log('Hello Server!');
  //   });
  // })

  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://192.168.1.101:3000");
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = (e) => {
      console.log(e)
      console.log("ws closed")
      ws.current = new WebSocket("ws://192.168.1.101:3000")
    };
    ws.current.onmessage = () => {
      var server_message = e.data;
      alert(server_message);
      return false;
    }

    const wsCurrent = ws.current;

  }, []);

  const fwd = async () => {
    ws.current.send("UP")
  }

  const left = async () => {
    ws.current.send("LEFT")
  }

  const rev = async () => {
    ws.current.send("DOWN")
  }

  const right = async () => {
    ws.current.send("RIGHT")
  }

  return (
    <div className="flex-column absolute inset-x-0 bottom-0 h-1/2 w-5/6 bg-gradient-to-r from-neutral-900 to-black">
      {/* <hr className="border-t-[0.1px] border-neutral-400" /> */}
      <h1 className="grow-0 text-center text-neutral-400">Controls</h1>
      <div className="grid gap-4 grid-cols-2 grid-rows-2 justify-content-center h-full first-letter:">

        <button className="flex h-10 w-64 items-center justify-center m-auto rounded-full grid-row-2 bg-neutral-400 hover:bg-neutral-500" onClick={fwd}>
          <ArrowCircleUpIcon className="h-10 w-10" />
          <p>Fwd</p>
        </button>
        <button className="flex h-10 w-64 items-center justify-center m-auto rounded-full bg-neutral-400 hover:bg-neutral-500" onClick={left}>
          <ArrowCircleLeftIcon className="h-10 w-10" />
          <p>Left</p>
        </button>
        <button className="flex h-10 w-64 items-center justify-center m-auto rounded-full bg-neutral-400 hover:bg-neutral-500" onClick={rev}>
          <ArrowCircleDownIcon className="h-10 w-10" />
          <p>Rev</p>
        </button>
        <button className="flex h-10 w-64 items-center justify-center m-auto rounded-full bg-neutral-400 hover:bg-neutral-500" onClick={right}>
          <ArrowCircleRightIcon className="h-10 w-10" />
          <p>Right</p>
        </button>
      </div>
    </div>
  )
}

export default Controls
