# 🚀 Playwright E2E Automation

## 📌 Description
This project contains end-to-end test automation using Playwright with TypeScript.  
It covers UI testing scenarios and generates professional test reports using Allure.

## 🔗 Test Scenario Reference
[View Test Scenarios](https://docs.google.com/spreadsheets/d/1sTjOi1oZEUVMcN2Bnfgl77US8evlAPPHvl83JH2HvHY/edit?usp=sharing)

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
- TC004 Sort product by Name A-Z  
- TC005 Sort product by Name Z-A  
- TC006 Sort product by Price Low-High  
- TC007 Sort product by Price High-Low  
- TC008 User can add product to cart  
- TC009 User can remove product from inventory page  
- TC010 User can remove product from cart page  
- TC011 User can checkout item  

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
