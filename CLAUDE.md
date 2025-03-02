# CLAUDE.md - Minha Landing Development Guide

## Build Commands
- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run all tests
- `npm test -- --testPathPattern=path/to/file.test.js` - Run specific test file
- `npm run eject` - Eject from Create React App (use with caution)

## Code Style Guidelines
- **React Components**: Use functional components with hooks
- **File Extensions**: `.jsx` for React components, `.js` for utilities
- **Styling**: Utilize Tailwind CSS classes for styling (avoid custom CSS when possible)
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Imports**: Group imports by: 1) React, 2) Third-party packages, 3) Local components, 4) Assets
- **Error Handling**: Use try/catch for async operations, provide user feedback on errors
- **State Management**: Use React's useState/useContext for state, minimize prop drilling
- **Responsive Design**: Always implement mobile-first designs using Tailwind breakpoints
- **A11y**: Ensure semantic HTML and proper ARIA attributes for accessibility

## Code Formatting
- Follow ESLint configuration (`react-app` preset)
- Component structure: imports → component function → helper functions → exports
- Limit line length to 100 characters
- Add JSDoc comments for non-obvious functionality