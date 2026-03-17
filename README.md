# 🚀 Playwright E2E Automation

## 📌 Description
This project contains end-to-end test automation using Playwright with TypeScript.  
It covers UI testing scenarios and generates professional test reports using Allure.

## 🛠 Tech Stack
- 🎭 Playwright  
- 🟦 TypeScript  
- 📊 Allure Report  
- 🟢 Node.js  

## 📁 Project Structure
- `tests/` → test cases  
- `pages/` → page object model  
- `playwright.config.ts` → configuration  
- `package.json` → dependencies and scripts  

## ✅ Test Coverage
- TC001 Login with valid credentials  
- TC002 Login with invalid username  
- TC003 Login with invalid password  

## ⚙️ How to Install
1. Install dependencies  
```bash
    npm install
```
2. Install Playwright browsers
  ```bash
    npx playwrigth install
```
## ▶️ How to Run Test
```bash
npx playwright test
```
## 📊 Allure Report
1. Run Test
  ```bash
npx playwright test
```
3. Generate Report
  ```bash
npx allure generate ./allure-results --clean
```
5. Open Report
```bash
npx allure open
```

## ✨ Features
- 📦 Page Object Model structure  
- 🧩 Step-by-step reporting with Allure  
- 🎥 Screenshot, video, and trace on failure  
- 🧼 Clean and scalable test structure

## 👤 Author
Ryan Daffa Pratama ||
Software Quality Engineer
