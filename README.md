# XKCD API

> API for the [XKCD](https://xkcd.com) comics.

# Usage

```
# api overview
https://xkcd-api.ridvanaltun.vercel.app/api

# latest comic
https://xkcd-api.ridvanaltun.vercel.app/api/comics/latest

# comic #1000
https://xkcd-api.ridvanaltun.vercel.app/api/comics/1000
```

# Example Response (comic #2364)

This is the same exact response that the official [XKCD API](https://xkcd.com/json.html)

```json
{
  "month": "9",
  "num": 2364,
  "link": "",
  "year": "2020",
  "news": "",
  "safe_title": "Parity Conservation",
  "transcript": "",
  "alt": "Bloody Mary is made of antimatter. It explains so much.",
  "img": "https://imgs.xkcd.com/comics/parity_conservation.png",
  "title": "Parity Conservation",
  "day": "25",
  "imgRetina": "https://imgs.xkcd.com/comics/parity_conservation_2x.png"
}
```
