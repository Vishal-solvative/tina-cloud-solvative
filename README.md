# Solvative-com

This is a solvative-com project built with [Next.js](https://nextjs.org/) and integrated with [TinaCMS](https://tina.io/) for easy content management.
# URL: https://solvative-com.pages.dev/
## Table of Contents

-   [Getting Started](#getting-started)
-   [Running the Project](#running-the-project)
-   [Accessing the Admin Interface](#accessing-the-admin-interface)
-   [Environment Variables](#environment-variables)
-   [License](#license)

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (version 16.x or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

    \`\`\`bash
    git clone https://github.com/Solvative/solvative-com.git
    \`\`\`

2. Navigate to the project directory:

    \`\`\`bash
    cd solvative-com
    \`\`\`

3. Install the dependencies:

    Using \`npm\`:

    \`\`\`bash
    npm install
    \`\`\`

    Or using \`yarn\`:

    \`\`\`bash
    yarn install
    \`\`\`

## Running the Project

To start the development server:

\`\`\`bash
npm run dev
\`\`\`

Or, using yarn:

\`\`\`bash
yarn dev
\`\`\`

This will start the server and make the site available at [http://localhost:3000](http://localhost:3000).

## Accessing the Admin Interface

To access the TinaCMS admin interface:

1. Start the development server.
2. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin).
3. You will need to authenticate with username and password.
4. Once authenticated, you can use the TinaCMS sidebar to manage and edit your content.

### Environment Variables

You need to set up environment variables to enable TinaCMS functionality. Copy the example \`.env\` file and configure it for your local environment:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Ensure that variables such as \`GITHUB_PERSONAL_ACCESS_TOKEN\`,
\`GITHUB_OWNER\`,
\`GITHUB_REPO\`,
\`TINA_PUBLIC_IS_LOCAL\`,
\`NEXT_PUBLIC_TINA_CLIENT_ID\`, and \`TINA_TOKEN\` are properly set up.

## License

This project is private and is not intended for public distribution.
