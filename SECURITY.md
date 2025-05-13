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

### NPM Publishing

- NPM publishing is done via GitHub Actions with protected secrets
- NPM tokens are stored as GitHub Secrets and never exposed in logs
- Publishing is always triggered manually, never automatic, to prevent supply chain attacks

### Continuous Integration

- All code changes undergo automated testing via GitHub Actions
- Pull requests are required to pass CI checks before merging
- Dependencies are regularly updated and audited

## Best Practices for Contributors

- Never commit secrets, API keys, or tokens to the repository
- Always verify SVG files for potential security issues before adding them
- Report suspicious behavior or unexpected activity in the repository

## Version Updates and Security Patches

Security updates and patches will be prioritized and released as soon as possible. We follow semantic versioning, where security patches are released as patch versions.

## Questions

For any questions about the security policy or to report a security issue, please contact the maintainers at [security@airqo.net](mailto:security@airqo.net).
