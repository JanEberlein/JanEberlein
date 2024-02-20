# project setup cheat sheet

## vue setup

`npm create vue@latest`  
`cd <project-name>`

## tailwind setup

`npm install -D tailwindcss postcss autoprefixer`  
`npx tailwindcss init`

In **src\assets\main.css**:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In **tailwind.config.js**:

```js
export default {
  content: ['./src/**/*.{html,js,vue}']
}
```

**postcss.config.js**:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

## For touch gestures

`npm install vue3-touch-events`

In **src\main.js**:

```js
const app = createApp(App)
app.use(Vue3TouchEvents)
```

## For github pages deployment

**.github\workflows\deploy.yml**:

```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

[Source](https://vitejs.dev/guide/static-deploy.html#github-pages)
