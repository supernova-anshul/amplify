# Amplify Dashboard

A basic React + Vite dashboard application with dummy JSON data, ready to deploy on **AWS Amplify Hosting**.

## Stack

- React 18
- Vite 5
- Recharts (charts)
- Dummy data loaded from `src/data/dashboardData.json`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

The build output is emitted to `dist/`.

## Deploy to AWS Amplify

### Option 1 — Connect a Git repo (recommended)

1. Push this project to GitHub / GitLab / Bitbucket / CodeCommit.
2. Open the **AWS Amplify Console** → **Host web app** → **Deploy without Git** OR **New app → Host web app**.
3. Select your Git provider and pick the repository + branch.
4. Amplify auto-detects the build settings. If not, it uses the included `amplify.yml`:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Save and deploy**. Amplify will build and host the app on a `*.amplifyapp.com` URL.

### Option 2 — Manual (drag-and-drop) deploy

1. Run `npm run build` locally.
2. In the Amplify console, choose **Host web app → Deploy without Git provider**.
3. Upload the `dist/` folder as a zip. Done.

### SPA routing

The included `public/_redirects` (`/* /index.html 200`) ensures client-side routes resolve correctly on Amplify. If you later add React Router, this avoids 404s on refresh.

### Notes

- `amplify.yml` at the project root controls the Amplify build pipeline.
- No backend / environment variables are required for this demo.
- To swap in real data later, replace `src/data/dashboardData.json` or fetch from an API.

## Project structure

```
amplify/
├── amplify.yml              # Amplify build spec
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── _redirects           # SPA fallback
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── StatCard.jsx
    │   ├── SalesChart.jsx
    │   ├── CategoryChart.jsx
    │   └── OrdersTable.jsx
    └── data/
        └── dashboardData.json
```
"# amplify" 
