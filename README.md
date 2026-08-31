# Sudanese American Society Frontend

This is the React + Vite frontend for the Sudanese American Society website.

## Requirements

Before running the app locally, make sure you have:

- Node.js 18 or newer
- npm 9 or newer
- A running backend API for the account/signup flow

## Install dependencies

From the project root:

```bash
npm install
```

## Environment configuration

The app uses the environment variable `VITE_API_BASE_URL` for API requests.

Create a `.env.local` file in the project root with:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

If your backend is running on a different port or domain, replace the value with that URL.

Important:
- The frontend automatically appends `/accounts/createAccount` to this base URL.
- Example: `http://localhost:5000/api` becomes `http://localhost:5000/api/accounts/createAccount`
- If the variable is not set, the app falls back to `http://localhost:5000/api`

## Run the app locally

Start the Vite development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

If you want the app accessible from other devices on the same network:

```bash
npm run dev -- --host 0.0.0.0
```

## Build for production

Create a production build:

```bash
npm run build
```

This generates the `dist/` folder.

## Preview the production build locally

```bash
npm run preview
```

Then open the preview URL shown in the terminal, typically:

```text
http://localhost:4173
```

## Useful scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Notes

- The signup page calls the backend through `src/services/accountService.js`.
- The app expects the backend to be running before testing signup/account creation.
- If the backend is down or the API URL is wrong, signup requests will fail with a clear error message in the UI.
