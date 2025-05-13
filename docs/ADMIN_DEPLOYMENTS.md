# Administrator-Only Manual Deployments

This document explains how to configure your GitHub repository to ensure that only administrators can trigger manual deployments.

## Repository Settings Configuration

To restrict the manual deployment workflows to administrators only, follow these steps:

1. Go to your GitHub repository: https://github.com/OchiengPaul442/airqo-icon-library-min
2. Click on "Settings" in the top navigation bar
3. In the left sidebar, click on "Actions" under "Code and automation"
4. Scroll down to "Workflow permissions"
5. Configure the following settings:

   - Set "Workflow permissions" to "Restrict permissions for all workflows"
   - Check "Allow GitHub Actions to create and approve pull requests"
   - Under "Required approvals", select "Require approvals for all outside collaborators"
   - Set "Required reviewers/approvers" to include only repository administrators

6. Next, go to "Environments" in the left sidebar
7. Create the "github-pages" environment
8. Configure the environment:
   - Click on the environment name
   - Enable "Required reviewers" and add repository administrators
   - Enable "Wait timer" and set it to 10 minutes to provide time to cancel accidental deployments
   - Enable "Deployment branches" and select "Protected branches only"

## Workflow Security Configuration

The GitHub Actions workflows have been updated with appropriate security settings:

1. The Manual Release workflow is restricted to administrators through repository settings
2. The Deploy Documentation Website workflow uses the "github-pages" environment for deploying to GitHub Pages

With these settings in place, only administrators can approve and run the manual deployment workflows.

## Branch Protection Rules

To further secure the deployment process, set up branch protection rules for the main branch:

1. Go to "Branches" in the repository settings
2. Add a rule for the "main" branch
3. Configure the following settings:
   - Check "Require a pull request before merging"
   - Check "Require approvals"
   - Set required number of approvals to at least 1
   - Check "Require review from Code Owners"
   - Check "Restrict who can push to matching branches" and add only administrators

## Secret Management

Ensure all necessary secrets for npm publishing are configured:

1. Go to "Secrets and variables" > "Actions" in the repository settings
2. Add the following secrets:
   - `NPM_TOKEN`: Your npm authentication token

## Testing the Deployment Process

After configuring all settings:

1. Only administrators should be able to manually trigger workflows
2. When triggered, deployments should require approval by an administrator
3. The deployment process will have a wait time before executing
4. All changes to workflows require administrator approval

This setup ensures that package publishing and website deployments are secure and only performed by authorized administrators.
