# Express TypeScript Starter Template

This is a professional-grade Express.js + TypeScript boilerplate with support for linting, formatting, pre-commit hooks, and structured project organization. It is designed for building scalable Node.js backends with ease.

---

## 🚀 Features

* ⚡ **Express.js** — Fast, unopinionated web framework
* 🔒 **TypeScript** — Static typing for better reliability
* 🧹 **ESLint + Prettier** — Linting and code formatting
* 🪝 **Husky + lint-staged** — Pre-commit hooks to keep your code clean
* 📁 **Modular Project Structure** — Scalable and maintainable codebase
* 🌱 **Dotenv Support** — Environment variable handling

---

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── config/         # Environment configs
│   ├── controllers/    # Route controllers
│   ├── middlewares/    # Express middlewares
│   ├── routes/         # Application routes
│   ├── utils/          # Utility functions
│   └── index.ts        # Entry point
├── .husky/             # Husky hooks
├── .gitignore
├── eslint.config.js    # Flat config ESLint
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone <repo-url> my-app
cd my-app
yarn install
```

### 2. Run the Dev Server

```bash
yarn dev
```

### 3. Build for Production

```bash
yarn build
```

### 4. Run ESLint

```bash
yarn lint
```

---

## 🧪 Scripts

```json
"scripts": {
  "dev": "ts-node src/index.ts",
  "build": "tsc",
  "lint": "eslint . --ext .ts",
  "format": "prettier --write ."
}
```

---

## ✅ Lint & Format

### ESLint (Flat Config for v9+)

* Uses `@typescript-eslint` plugin
* Automatically formats with Prettier

### Prettier

* Opinionated code formatter

### Husky + lint-staged

* Prevent bad commits
* Runs `eslint --fix` and `prettier --write` on staged files

---

## 👥 Contributing

Feel free to fork this project and open a pull request. Suggestions and improvements are always welcome!

---


## 📄 License

This project is licensed under the [MIT License](./LICENSE.md).

