---
name: code-review
description: Audits code quality, checks for potential security leaks, verifies adherence to project architecture rules, and generates a structured diff report when the user asks to review, audit, or check the health of recent code changes.
---

# Procedural Steps for Code Review

When this skill is triggered, perform the following steps sequentially:

1. **Scope Inspection**:
   - Identify the files that have been modified or specified by the user.
   - Do not scan irrelevant vendor folders, node_modules, or virtual environments.

2. **Check Against Rules**:
   - Verify that no hardcoded credentials, API keys, or raw secrets are present.
   - Ensure the code follows the naming conventions and structure defined in `GEMINI.md`.
   - Check for proper error handling and absence of silent failures.

3. **Generate Audit Summary**:
   - Group findings into three categories: `Critical (Bugs/Security)`, `Warning (Performance/Style)`, and `Suggestions`.
   - Show code snippets or exact diff proposals.

4. **Await User Approval**:
   - Do not automatically apply write operations to the files.
   - Wait for the user to confirm which proposed changes to apply.