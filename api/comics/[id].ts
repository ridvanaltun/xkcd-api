import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'
import { allowCors } from '../../utils'

const XKCD_DOMAIN = 'https://xkcd.com'
const XKCD_END_PATH = 'info.0.json'

const commics = async (req: NowRequest, res: NowResponse) => {
  const { id } = req.query

  try {
    const response = await axios(`${XKCD_DOMAIN}/${id}/${XKCD_END_PATH}`)
    const { img } = response.data

    if (id >= 1084) {
      res.status(200).json({
        ...response.data,
        imgRetina: `${img.replace('.png', '')}_2x.png`,
      })
    } else {
      res.status(200).json({
        ...response.data,
      })
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ detail: 'Not found.' })
    } else {
      // unknown error
      res.status(500).json({
        detail: 'An unknown error occurred.',
        error: error.message,
      })
    }
  }
}

export default allowCors(commics)