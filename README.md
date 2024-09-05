This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# How It Should Display
![Alt text](/OU_Mapz_TestImage.png?raw=true "Optional Title")


# Technology

All technologies are listed in the requirement.txt and package.json.

# File Layout

- The main web app is in /src.
- The python webscraper is in /webscraper.

# How to use/contribute

## Use

1. Fork the repository
2. Clone Repository

```bash
git clone https://github.com/tuann72/OU-Mapz
```
Download node modules
```bash
npm install
```

If you plan to test the webscraper, you will need to install the requirements for python.

Make sure you are in the webscraper folder.
```bash
cd webscraper
```

For Windows installation.
```bash
pip install -r requirements. txt
```

For Mac installation.
```bash
pip3 install -r requirements. txt
```

## Additional requirements.
You will need a firebase account with a database API.
Additionally for the webscraper, to enable its ability to scrape and store markers you will need a firebase credentials in a json file in the root folder.

## Contribute

Follow steps 1-2 under the Use header.

3. Create a new branch by entering

```bash
git checkout -b <branch_name>
```

4. Staged any changes.

```bash
git add .
```

5. Commit changes to your local repository.

```bash
git commit -m "Changes ... "
```

6. Push to your forked repository.

```bash
git push origin <branch_name>
```

7. Go to forked branch in GIT and click 3 dots and click on "Create Pull Request"

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
