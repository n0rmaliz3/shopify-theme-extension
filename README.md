# Shopify Theme Extension

A Shopify theme extension starter template powered by **Vite** with **Rollup obfuscation**.

## 🚀 Getting Started

To use this template, install the required dependencies first:

```sh
npm install vite rollup-plugin-terser rollup-plugin-obfuscator --save-dev
```

### 📦 Clone the Template

Use **kitty-cli** to clone the template into your project:

```sh
npx @anikghosh256/kitty-cli@latest clone @n0rmaliz3/shopify-theme-extension --as extension
```

### 🛠 Create a New Extension

Run the following command to create a new Shopify theme extension:

```sh
npx @anikghosh256/kitty-cli@latest create extension --name [extension-name]
```

Replace `[extension-name]` with your desired

### ⚡ Add Build Script

Add the following script to your `package.json` to easily build your extension:

```json
"scripts": {
  "ex:dev": "vite build --config extensions/[extension-name]/vite.config.js"
}
```

Then, you can run:

```sh
npm run ex:dev
```

This will build the output JavaScript.

## 📌 Features

- Uses **Vite** for fast development
- Minifies code with **rollup-plugin-terser**
- Protects source code using **rollup-plugin-obfuscator**

## 🎯 Requirements

- **Node.js** (latest LTS recommended)
- **Shopify Partner Account**
- **Shopify CLI** (for deploying theme extensions)

## 📜 License

MIT License

---

For any issues, feel free to open an **issue** or contribute! 🚀
