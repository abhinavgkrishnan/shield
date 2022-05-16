import { useEffect, useState } from 'react'
function Sidebar() {
  const [data, setData] = useState([] as string[])

  useEffect(() => {
    setInterval(() => {
      fetch('/api/data')
        .then((res) => res.json())
        .then((data) => {
          const pir = data.pir
          const mq5 = data.mq5
          const sortedData = [...pir, ...mq5].sort((a, b) => a.time - b.time)

          setData(
            sortedData
              .filter((item: Item) => item.detected)
              .map((item: Item) => {
                const dateTime = new Date(
                  Math.round(item.time * 1000)
                ).toLocaleString()
                if (item.sensorType == 'pir') {
                  return `Human detected at ${dateTime}`
                } else {
                  return `MQ5 detected at ${dateTime}`
                }
              })
          )
        })
    }, 1000)
  }, [])
  return (
    <div className="absolute inset-y-0 right-0 h-full w-1/6 bg-gradient-to-r from-neutral-900 to-neutral-900">
      <h1 className="text-center text-neutral-400">Sensor Log</h1>
      {data.map((item) => (
        <p className="text-center text-xs text-neutral-400">{item}</p>
      ))}
    </div>
  )
}
interface Item {
  time: number
  detected: boolean
  sensorType: string
}
export default Sidebar
