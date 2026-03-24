## [ERR-20260324-005] vite_publish_deleted_source_tree

**Logged**: 2026-03-24T15:20:00+08:00
**Priority**: high
**Status**: fixed
**Area**: tooling

### Summary
While preparing a Vite site for GitHub Pages root publishing, the source tree was mistakenly deleted after copying build artifacts.

### Details
A publish shortcut copied dist/* into the repository root and then removed both dist and src, which would have destroyed maintainable source files. The correct approach is to keep source files and only copy build artifacts or use a dedicated publish branch / action.

### Suggested Action
Never delete source directories during static publish preparation. Prefer a separate deployment branch, GitHub Actions, or keep both source and built files if using root publishing.

### Metadata
- Source: error
- Related Files: package.json, vite.config.js, src/*
- Tags: vite, publish, git, deployment

---
