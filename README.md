# Cypress OrangeHRM QA

Suite de tests end-to-end Cypress, organisée en Page Object Model (POM), contre la démo publique [OrangeHRM](https://opensource-demo.orangehrmlive.com).

## Structure

```
cypress/
├── e2e/
│   ├── auth/           → login, logout
│   ├── dashboard/      → vérification des widgets
│   ├── employees/      → CRUD employés (PIM)
│   ├── leave/          → gestion des congés
│   └── search/         → recherche d'employés (PIM)
├── fixtures/
│   ├── users.json
│   └── employees.json
├── support/
│   ├── pages/           → Page Objects
│   │   ├── BasePage.js
│   │   ├── LoginPage.js
│   │   ├── DashboardPage.js
│   │   ├── EmployeePage.js
│   │   └── LeavePage.js
│   ├── commands.js
│   └── e2e.js
docker/
└── Dockerfile
docker-compose.yml
.github/workflows/ci.yml
```

> Note : la démo OrangeHRM ne propose pas de barre de recherche globale ; le dossier `search/` couvre donc la recherche d'employés dans le module PIM, qui est la fonctionnalité de recherche réelle et stable de l'application.

## Installation

```bash
npm ci
cp .env.example .env
```

`.env` contient les identifiants utilisés par les tests (`ADMIN_USERNAME`, `ADMIN_PASSWORD`). Les valeurs par défaut correspondent au compte admin public de la démo OrangeHRM.

## Lancer les tests

```bash
npm run cy:open   # mode interactif
npm run cy:run    # mode headless
```

Un rapport HTML (mochawesome) est généré dans `cypress/reports` après chaque exécution.

## Lancer les tests avec Docker

```bash
npm run cy:run:docker
# équivaut à :
docker compose up --build --abort-on-container-exit --exit-code-from cypress
```

Le conteneur utilise l'image officielle `cypress/included`, avec le code monté en volume pour ne pas avoir à reconstruire l'image à chaque modification.

## Intégration continue

Le workflow [`.github/workflows/ci.yml`](.github/workflows/ci.yml) exécute la suite complète dans Docker à chaque push/PR sur `main`, puis publie le rapport mochawesome (et les captures d'écran en cas d'échec) comme artefacts du build.
