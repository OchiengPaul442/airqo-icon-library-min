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
7. Create two environments: "production" and "npm-publish"
8. For each environment:
   - Click on the environment name
   - Enable "Required reviewers" and add repository administrators
   - Enable "Wait timer" and set it to 10 minutes to provide time to cancel accidental deployments
   - Enable "Deployment branches" and select "Protected branches only"

## Updating Workflows to Use Protected Environments

The GitHub Actions workflows have been updated to use these protected environments:

1. The Manual Release workflow now uses the "npm-publish" environment for releasing to npm
2. The Deploy Documentation Website workflow now uses the "production" environment for deploying to GitHub Pages

With these settings in place, only administrators can approve and run the manual deployment workflows.

## Branch Protection Rules

To further secure the deployment process, set up branch protection rules for the main branch:

1. Go to "Branches" in the repository settings
2. Add a rule for the "main" branch
3. Enable the following settings:
   - "Require pull request reviews before merging"
   - "Require status checks to pass before merging"
   - "Require conversation resolution before merging"
   - "Do not allow bypassing the above settings"

## Verifying Permissions

To verify the correct permission settings are in place:

1. Have a non-administrator collaborator attempt to trigger a manual release
2. The workflow should require explicit administrator approval before running
3. Regularly audit the repository permissions to ensure only trusted users have administrator access

Remember to periodically review and update these security settings as your team and repository needs evolve.
