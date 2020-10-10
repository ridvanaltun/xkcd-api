import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'
import { allowCors } from '../../utils'

const XKCD_DOMAIN = 'https://xkcd.com'
const XKCD_END_PATH = 'info.0.json'

const random = async (req: NowRequest, res: NowResponse) => {
  try {
    // fetch last comic
    const lastComic = await axios(`${XKCD_DOMAIN}/${XKCD_END_PATH}`)
    const { num: latestId } = lastComic.data

    // generate random number between comics
    const randomNumber = Math.floor(Math.random() * latestId) + 1

    // fetch random comic
    const randomComic = await axios(`${XKCD_DOMAIN}/${randomNumber}/${XKCD_END_PATH}`)
    const { img } = randomComic.data

    if (randomNumber >= 1084) {
      res.status(200).json({
        ...randomComic.data,
        imgRetina: `${img.replace('.png', '')}_2x.png`,
      })
    } else {
      res.status(200).json({
        ...randomComic.data,
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

export default allowCors(random)