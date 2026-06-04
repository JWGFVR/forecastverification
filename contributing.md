# Contributing Guide

> **Note:** This contributor's guide is currently a work in progress.

This repository contains the HTML-based WMO JWGFVR (Joint Working Group on Forecast Verification Research) verification webpage, previously hosted at https://www.cawcr.gov.au/projects/verification/. This document describes the process for contributors who want to make changes to the website.

Two workflows are described below — choose the one that suits you:

- **[Option A](#option-a-editing-via-the-github-online-editor)** — No local setup required; edit files directly in your browser.
- **[Option B](#option-b-editing-locally-using-a-code-editor)** — Clone the repo and edit locally using a code editor such as VS Code or VIM.

---

## Prerequisites

- A GitHub account
- Access to the [JWGFVR/forecastverification](https://github.com/JWGFVR/forecastverification) repository

---

## Step 1: Open a GitHub Issue (Both Options)

Before making any changes, create an issue describing what you want to do:

1. Go to [https://github.com/JWGFVR/forecastverification/issues](https://github.com/JWGFVR/forecastverification/issues).
2. Click **New issue** and describe the change you want to make.
3. If an issue already exists for your change, note its number — you'll reference it later.

---

## Step 2: Fork the Repository (Both Options)

1. Navigate to [https://github.com/JWGFVR/forecastverification](https://github.com/JWGFVR/forecastverification).
2. Click the **Fork** button in the top-right corner.
3. Select your personal account as the destination.
4. GitHub will redirect you to your fork at `github.com/YOUR-USERNAME/forecastverification`.

---

## Option A: Editing via the GitHub Online Editor

### A1: Sync Your Fork

If you've had your fork for a while, sync it before starting work:

1. On your fork's main page, click the **Sync fork** button near the top of the file list.
2. Click **Update branch** if prompted.

### A2: Create a Branch

Working on a branch keeps your fork's `main` clean and lets you manage multiple contributions independently.

1. On your fork's main page, click the branch dropdown (it says **main** by default).
2. Type a descriptive branch name in the text field, for example:
```
   issue-123-add-crps-score
```
3. Click **Create branch: issue-123-add-crps-score from main**.

### A3: Edit a File

1. Make sure your new branch is selected in the branch dropdown.
2. Browse to the file you want to edit and click on it.
3. Click the **pencil icon** (✏️) in the top-right of the file view to open the editor.
   - Alternatively, press **E** as a keyboard shortcut.
4. Make your changes. 

### A4: Commit Your Changes

1. Scroll down to the **Commit changes** section.
2. Write a clear, descriptive commit message, for example:
```
   feat: Added CRPS equation
```
3. Optionally add a longer description in the extended field.
4. Select **Commit directly to the `issue-123-add-crps-score` branch** (your new branch, not `main`).
5. Click **Commit changes**.

### A5: Open a Pull Request

1. Go to your fork's main page. GitHub will show a banner noting your branch is ahead — click **Contribute** → **Open pull request**.
   - If the banner isn't visible, click the **Pull requests** tab → **New pull request**.
2. Confirm the target:
   - **Base repository:** `JWGFVR/forecastverification` — **base:** `main`
   - **Head repository:** `YOUR-USERNAME/forecastverification` — **compare:** `issue-123-add-crps-score`
3. Review the diff to confirm only your intended changes are included.
4. Write a clear title and description. In the description, reference your issue:
```
   Closes #123
```
   and explain what you changed and why.
5. Click **Create pull request**.

### A6: Respond to Review Feedback

1. Maintainers may leave comments or request changes on your pull request.
2. To make further edits, go back to your fork, switch to your branch, navigate to the relevant file, and repeat steps A3–A4. Your pull request will update automatically.
3. To keep your branch up to date with upstream `main` while the PR is open, go to your fork, switch to your branch, and click **Sync branch** if the option appears.
4. Once at least one maintainer approves, a maintainer will merge the pull request.

---

## Option B: Editing Locally Using a Code Editor

### B1: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/forecastverification.git
cd forecastverification
```

### B2: Add the Upstream Remote

This lets you keep your fork in sync with the original repository:

```bash
git remote add upstream https://github.com/JWGFVR/forecastverification.git
```

### B3: Sync with Upstream

Before creating a branch, make sure your local `main` is up to date:

```bash
git fetch upstream
git checkout main
git pull upstream main
```

### B4: Create a Branch

Create a branch with a descriptive name tied to your issue:

```bash
git checkout -b issue-123-add-crps-score
```

### B5: Make Your Changes

Open the repository in your editor of choice and make your changes:

### B6: Preview Locally

Test your changes before committing:

- Open `index.html` directly in your browser, **or**
- Run a local server:
```bash
  python3 -m http.server
```
  then navigate to `http://localhost:8000`.

### B7: Stage and Commit Your Changes

```bash
git add index.html
git commit -m "feat: Added CRPS equation"
```

### B8: Push Your Branch to Your Fork

```bash
git push -u origin issue-123-add-crps-score
```

### B9: Open a Pull Request

1. Go to your fork on GitHub. A banner should appear prompting you to open a pull request — click **Compare & pull request**.
   - If not, go to the **Pull requests** tab → **New pull request**.
2. Confirm the target:
   - **Base repository:** `JWGFVR/forecastverification` — **base:** `main`
   - **Head repository:** `YOUR-USERNAME/forecastverification` — **compare:** `issue-123-add-crps-score`
3. Write a clear title and description. In the description, reference your issue:
```
   Closes #123
```
   and explain what you changed and why.
4. Click **Create pull request**.

### B10: Respond to Review Feedback

1. Maintainers may leave comments or request changes on your pull request.
2. Make any requested edits locally, then stage, commit, and push to the same branch. Your pull request will update automatically:
```bash
   git add <changed-files>
   git commit -m "fix: Address review feedback"
   git push
```
3. Keep your branch up to date with upstream `main` while the PR is open:
```bash
   git fetch upstream
   git checkout issue-123-add-crps-score
   git rebase upstream/main
```
   If there are no conflicts:
```bash
   git push
```
   If there are conflicts, resolve them first, then:
```bash
   git push --force-with-lease
```
4. Once at least one maintainer approves, a maintainer will merge the pull request.

---

## Content Guidelines

TODO. Add some guidelines around what type of content is suitable to add.
