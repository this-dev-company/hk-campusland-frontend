# hk-campusland-frontend
## Steps to Fork a Repository and run the application

1. **Click the Fork Button**

   In the upper-right corner of the repository page, click the `Fork` button.

2. **Choose a Destination**

   If you belong to multiple organizations or have multiple accounts, you'll be prompted to choose where you want to fork the repository. Select your personal account or the relevant organization.

3. **Clone Your Fork**

   Once the repository is forked, you'll be redirected to your new fork. Clone your forked repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/hk-campusland-frontend.git
   ```
4. **Navigate into the project directory:**

  ```bash
   cd hk-campuslands-frontend
  ```
5. **Add the Original Repository as a Remote:**


Navigate to the directory of your cloned repository and add the original repository as a remote. This allows you to fetch updates from the original project.
  ```bash
   git remote add upstream https://github.com/this-dev-company/hk-campusland-frontend.git
  ```
6. **Install the dependencies:**

  ```bash
   npm install   
  ```

  For more information about tailwind if need it: [Tailwind installation guide](https://tailwindcss.com/docs/guides/vite)

7. To start the development server and view the application in your browser, use:
  ```bash
   npm run dev
  ```

8. Open your browser and navigate to `http://localhost:5173` (or the port number shown in your terminal)
## Contributing to the Project

Follow these steps to contribute to the project:
1. **Switch to the `dev` Branch**
   First, ensure you are on the `dev` branch of your local repository. If you are not, switch to it:
   ```bash
   git checkout dev
   ```
2. **Update Your `dev` Branch with Upstream**
   Make sure your `dev` branch is up-to-date with the upstream `dev` branch. You can do this by using `git pull` to fetch and merge changes in one step:
   ```bash
   git pull upstream dev
   ```
   This command fetches the latest changes from the upstream repository and merges them into your local `dev` branch.
3. **Create a New Branch for Your Changes**
   Create a new branch for your changes. It's good practice to name your branch descriptively based on the feature or bug you are working on:
   ```bash
   git checkout -b my-feature-branch
   ```
   Replace `my-feature-branch` with a descriptive name for your branch.
4. **Make Your Changes**
   Make the necessary changes to the codebase on your new branch.
5. **Commit Your Changes**
   After making changes, stage and commit them:
   ```bash
   git add .
   ```
   ```bash
   git commit -m "Add a descriptive commit message here"
   ```
6. **Ensure Your Branch is Up-to-Date with `dev`**
   Before pushing your branch, ensure it is up-to-date with the `dev` branch to avoid conflicts. Use `git pull` to fetch the latest changes from upstream and rebase your branch:
   ```bash
   git pull --rebase upstream dev
   ```
   This command fetches the latest changes and rebases your branch on top of them. Resolve any conflicts that arise during the rebase process.
7. **Push Your Branch**
   Once everything is up-to-date and conflicts are resolved, push your branch to your forked repository:
   ```bash
   git push origin my-feature-branch
   ```
8. **Create a Pull Request**
   Go to your forked repository on GitHub, and you should see an option to create a pull request. Click on it, and follow the instructions to create a pull request against the `dev` branch of the original repository.

