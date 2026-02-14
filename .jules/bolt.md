## 2025-02-17 - Performance Analysis
**Implemented:** Route-based Code Splitting using `React.lazy` and `Suspense`. This reduces the initial bundle size by splitting page components into separate chunks.
**Critical Finding:** The main bundle is still large (~1MB) due to `import { fas }` from FontAwesome being used in `main.tsx`. This imports all solid icons. Future optimization should replace this with direct icon imports (e.g., `import { faCog } ...`).
