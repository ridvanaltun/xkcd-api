import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, res: NowResponse) => {
  const url =
    req.headers['x-forwarded-proto'] +
    '://' +
    req.headers['x-forwarded-host'] + '/api'

  return res.json({
    status: 200,
    message: 'It is alive!',
    endpoints: [`${url}/comics/1`, `${url}/comics/latest`],
  })
}
