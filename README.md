# XKCD API

> A CORS enabled API for the [XKCD](https://xkcd.com) comics.

# Usage

```markdown
# api overview
https://xkcd-api.ridvanaltun.vercel.app/api

# latest comics
https://xkcd-api.ridvanaltun.vercel.app/api/comics/latest

# random comics
https://xkcd-api.ridvanaltun.vercel.app/api/comics/random

# 1000th comics
https://xkcd-api.ridvanaltun.vercel.app/api/comics/1000
```

# Example Response (comics #2364)

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

# Show Comics Image Directly

Just add `?img=true` end of url, like:

```markdown
# latest comics image
https://xkcd-api.ridvanaltun.vercel.app/api/comics/latest?img=true

# random comics image
https://xkcd-api.ridvanaltun.vercel.app/api/comics/random?img=true

# 1000th comics image
https://xkcd-api.ridvanaltun.vercel.app/api/comics/1000?img=true
```

## Example: Latest Comics

![Image of Yaktocat](https://xkcd-api.ridvanaltun.vercel.app/api/comics/latest?img=true)

***How works?***

```markdown
![Image of Latest Comics](https://xkcd-api.ridvanaltun.vercel.app/api/comics/latest?img=true)
```