---
name: safe-refactor
description: Triggers whenever the user asks to refactor, modularize, extract, or clean up code across any tech stack (Flutter, Next.js/React, React Native, Django/Python, etc., e.g., "refactor file ini", "pecah file ini", "pisahkan widget/komponen", "ekstrak function/service/hook", "jadikan lebih modular", "clean up code"). Guides safe code restructuring and file splitting while strictly preserving 100% existing functionality with zero behavioral regressions.
---

# Procedural Steps for Safe Code Refactoring & Modularization

When this skill is triggered, perform the following steps sequentially to cleanly break down bloated files into modular, maintainable units without altering any application behavior:

1. **Pre-Refactor Audit & Dependency Mapping**:
   - Trace all variables, reactive states, hooks, ORM queries, methods, closures, and side effects within the target block.
   - Map exact interface boundaries:
     - **Inputs**: Props, constructor parameters, function arguments, context, or query parameters.
     - **Outputs**: Callbacks, event emitters, return types, mutations, or emitted state changes.
   - Understand the current behavior completely before moving or deleting any code.

2. **Atomic Extraction & Contract Preservation**:
   - Extract code cleanly with explicit type definitions (Dart types, TypeScript interfaces/types, Python type hints). Avoid fallback to `any` or `dynamic`.
   - Ensure imports and exports are properly linked; avoid circular imports.
   - Preserve existing naming conventions, docstrings, and comments unless explicitly instructed to update them.

3. **Zero-Regression Guardrails (Strict)**:
   - **Do NOT mutate business logic**: Keep conditional checks, calculation algorithms, error handling, and payload schemas identical.
   - **Do NOT introduce unapproved packages**: Do not add new external dependencies to `pubspec.yaml`, `package.json`, or `requirements.txt`/`pyproject.toml` without explicit user permission.

4. **Integrity & Verification**:
   - Verify that all imports (both in the source file and the new module) resolve cleanly.
   - Clean up unused imports left behind in the caller file.
   - Check syntax and static types (e.g., `flutter analyze`, `tsc --noEmit`, `python manage.py check` or linter diagnostics where applicable).
   - Provide a concise summary of changes: what was extracted, destination paths, and confirmation that behavior remains identical.