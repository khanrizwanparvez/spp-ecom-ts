# MERN Full Stack Ecommerce App

# Full Stack Ecommerce App FRONTEND

**1. Create React App using Vite**

```
npx create vite@latest project-name
cd project-name
npm install
npm run dev
```

- Clean up the React App

**2. Install SASS for styling**

```
npm i sass
```

**3. Setup Routing**

- Install react-router-dom for routing

```
npm i react-router-dom
```

- Add lazy loading
- Add Suspence for loading state

**4. Create Admin Dashboard**

- Add/Create mixin, pages, components, assets for Admin Dashboard

- Install chart.js react-chartjs-2 react-table react-icons

```
npm i chart.js react-chartjs-2 react-table react-icons
```

**5. Create Header UI**

**6. Home UI & Product Card**

- Hero image is set to cover, but sometimes we need to show it in full size, when use as Carousel

**7. Create Cart Page**

**8. Create Shipping Page**

**9. Create Login Page**

**10. Create Search Page**

**11. Create Orders Page**

# Full Stack Ecommerce App BACKEND

**1. Backend Initial Setup**

- ** Create Backend folder & goto /backend**

```
mkdir project-name
cd /backend
```

- ** Initialize Backend folder**

```
npm init
```

- ** Install typeScript**

- If you want to install it globally, run:

```
npm i -g typescript
```

- If you want to use for current project, run:

```
npm i --save-dev typescript ts-node
```

- ** Initialize typescript**

```
tsc --init
```

- ** Goto tsconfig.json clean and paste the following code**

```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true
  }
}
```

- ** Change initial package.json file**

```
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "",
  "main": "app.ts",
  "type": "module",
  "scripts": {
    "start": "node /dist/app.js",
    "dev": "nodemon /dist/app.js",
    "build": "tsc",
    "watch": "tsc -w"
  },
  "author": "",
  "license": "ISC"
}

```

- ** Create /src folder and app.ts file inside /src**

- ** Install express for server**

```
npm i express
```

- ** Install nodemon**

```
npm i --save-dev nodemon
```

- ** Install types for express, node for checking types**

```
npm i --save-dev @types/express @types/node
```

- ** Listen from Server - code written in app.ts file**

- ** Run the follwing command to build & run server**

```
tsc
npm run dev
```
