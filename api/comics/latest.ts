import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'

const XKCD_DOMAIN = 'https://xkcd.com'
const XKCD_END_PATH = 'info.0.json'

module.exports = async (req: NowRequest, res: NowResponse) => {
  try {
    const response = await axios(`${XKCD_DOMAIN}/${XKCD_END_PATH}`)
    const { num: id, img } = response.data

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
