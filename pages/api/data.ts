import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req: any, res: any) {
  const { client, db } = await connectToDatabase()

  const resultPir = db.collection('pir').find()
  const resultMq5 = db.collection('mq5').find()

  const arrayPir = await resultPir.toArray()
  const arrayMq5 = await resultMq5.toArray()

  res.status(200).json({ pir: arrayPir, mq5: arrayMq5 })
}
