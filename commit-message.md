# Commit Messages
## Commit Message Format
```
<type>(<scope>): <short description>

[Optional] <detailed explanation>

[Optional] <link to related tickets/issues>
```
## Types of Commit Messages
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (neither fixes a bug nor adds a feature)
- `test`: Adding or updating tests
- `chore`: Changes to the build process or auxiliary tools (no source or test changes)
- `add`: Adding a new file, dependency, or resource
- `remove`: Removing a file, dependency, or resource
## Scopes Examples
- `ui`: Changes related to the user interface
- `api`: Changes related to the API
- `db`: Changes related to the database
- `config`: Changes related to configuration files or settings
- `file`: Changes related to specific files (e.g., renaming, restructuring, or moving files)
## Examples
### Adding a new feature:
```
feat(api): add user authentication endpoint

Implemented JWT-based authentication for users. This includes login, registration, and token validation.
```
### Fixing a bug:
```
fix(ui): correct button alignment on mobile

Fixed an issue where the submit button was misaligned on mobile devices. Adjusted the CSS to ensure consistent layout.
```
### Updating documentation:
```
docs(readme): update installation instructions

Added additional steps for setting up the project on Windows. Clarified prerequisites and potential issues.
```
### Refactoring code:
```
refactor(db): optimize user query performance

Refactored the SQL queries in the user service to reduce response time by 20%.
```