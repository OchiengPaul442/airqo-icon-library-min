# Security Policy

## Reporting Security Issues

If you believe you've found a security issue in the AirQo Icon Library, please report it to us by sending an email to [security@airqo.net](mailto:security@airqo.net).

Please include the following information:

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact of the vulnerability
- Any suggestions for mitigating the vulnerability

## Deployment Security

### Authentication & Authorization

- All package releases and website deployments are restricted to repository administrators only
- GitHub Actions workflows that handle releases are protected to require administrator approval
- Authentication is managed through GitHub's permissions system with strict role-based access control

For detailed instructions on configuring administrator-only deployments, see [Administrator Deployments](./ADMIN_DEPLOYMENTS.md).

### NPM Publishing

- NPM publishing is done via GitHub Actions with protected secrets
- NPM tokens are stored as GitHub Secrets and never exposed in logs
- Publishing is always triggered manually, never automatic, to prevent supply chain attacks

### Continuous Integration

- All code changes undergo automated testing via GitHub Actions
- Pull requests are required to pass CI checks before merging

## Vulnerability Management

### Dependencies

- Regular scanning of dependencies for vulnerabilities
- Dependabot alerts are enabled for the repository
- Critical vulnerabilities are addressed as a priority

### Code Security

- Code review process focuses on potential security issues
- No sensitive information is stored in the repository
- SVG assets are sanitized to prevent XSS attacks

## Responsible Disclosure

We appreciate the work of security researchers and are committed to working with you to understand and address any security concerns. We will:

1. Confirm receipt of your report within 48 hours
2. Provide an initial assessment within 7 days
3. Work with you to understand and validate the issue
4. Keep you informed of our progress in addressing the issue
5. Give proper credit for reported issues (if desired)

## Security FAQ

### How are npm tokens protected?

NPM tokens are stored as GitHub repository secrets, which are encrypted and only accessible during workflow runs. They are not visible in logs or to contributors without proper permissions.

### Is automatic publishing of packages enabled?

No, all package publishing is done manually through GitHub Actions workflows that can only be triggered by repository administrators.

### How are SVG files validated for security?

All SVG files undergo optimization and sanitization as part of the build process to remove potentially dangerous content.
