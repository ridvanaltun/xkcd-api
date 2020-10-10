import { NowRequest, NowResponse } from '@vercel/node'
import axios from 'axios'
import { allowCors } from '../../utils'

const XKCD_DOMAIN = 'https://xkcd.com'
const XKCD_END_PATH = 'info.0.json'

const random = async (req: NowRequest, res: NowResponse) => {
  try {
    // fetch last comics
    const lastComic = await axios(`${XKCD_DOMAIN}/${XKCD_END_PATH}`)
    const { num: latestId } = lastComic.data

    // generate random number between comics
    const randomNumber = Math.floor(Math.random() * latestId) + 1

    // fetch a random comics
    const randomComic = await axios(`${XKCD_DOMAIN}/${randomNumber}/${XKCD_END_PATH}`)
    const { img: randomComicImg } = randomComic.data

    // show comics directly
    if (req.query.img === 'true') {
      const buffer = await axios.get(randomComicImg, { responseType: 'arraybuffer' })
      const bufferData = Buffer.from(buffer.data, "utf-8")
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': bufferData.length
      });
      res.write(bufferData)
      return res.end();
    }

    if (randomNumber >= 1084) {
      res.status(200).json({
        ...randomComic.data,
        imgRetina: `${randomComicImg.replace('.png', '')}_2x.png`,
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