# Stage Timer 🎭

Professional countdown timer for theater and live events. Color-coded warnings (green → yellow → red), operator + display split-screen, works across any device over Wi-Fi or internet.

## Live URLs (after deploy)

| Page | URL |
|------|-----|
| Home | `https://your-app.vercel.app/` |
| Operator | `https://your-app.vercel.app/operator` |
| Display | `https://your-app.vercel.app/display` |

## How to use

1. Open `/operator` on your **laptop or tablet** backstage
2. Type a room code (e.g. `show-night-1`) and click **Join / Create room**
3. A **QR code** appears — scan it with your phone or open `/display` on any screen
4. Start the timer — all connected displays sync instantly

## Features

- ⏱ Countdown with large display font
- 🟢🟡🔴 Automatic color warning zones (configurable thresholds)
- 📱 Works on phones, tablets, projectors — any browser
- 💬 Send text messages to the display (INTERMISSION, STAND BY, etc.)
- 🔁 Presets: 30 min down to 1 min
- 🌐 Real-time sync via PieSocket (no server needed)
- ⛶ Fullscreen mode on display (press `F`)

## Deploy to Vercel

### Option A — Vercel dashboard (easiest)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Leave all settings as default → click **Deploy**

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## File structure

```
/
├── public/
│   ├── index.html      # Landing page
│   ├── operator.html   # Operator control panel
│   └── display.html    # Full-screen display for stage/phone
├── vercel.json         # Routing config
└── README.md
```

## Tech

Pure HTML/CSS/JS — no framework, no build step, no dependencies.
Real-time sync: [PieSocket](https://piesocket.com) free WebSocket channel.
