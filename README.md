This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install node js and npm packages on your system.

```bash
npm install
```

Then, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Testing
This project is configured with Jest for unit and integration testing, and Cypress for end-to-end testing.

To run Jest tests, use the following command:

bash
Copy code
npm run test
# or
yarn test
For end-to-end testing with Cypress:

To open the Cypress test runner:

bash
Copy code
npm run cypress:open
# or
yarn cypress:open
To run Cypress tests headlessly:

bash
Copy code
npm run cypress:run
# or
yarn cypress:run
To run end-to-end tests with a local development server:

bash
Copy code
npm run test:e2e
# or
yarn test:e2e


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

We need to add the environment variables to vercel prior deployment.

OPENAI_API_KEY ='Your API key Value'


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
