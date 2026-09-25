---
name: bug-triage-investigate
description: Analyzes crash logs, stack traces, compile failures, runtime exceptions, and Flutter framework diagnostics (including RenderFlex overflow, RenderBox constraints, infinite height/width errors, Flutter widget build/layout errors, assertion failures, red/blue debug console output, Gradle/Xcode build issues, React/Next.js, and React Native) whenever the user pastes any error log, console output, or stack trace.
---

# Procedural Steps for Bug Investigation

1. **Log Parsing**:
   - Ekstrak baris file dan nomor baris spesifik tempat exception terjadi dari stack trace.
2. **Root Cause Analysis**:
   - Periksa apakah error disebabkan oleh: null/undefined value, masalah permission, tipe data tidak cocok, atau dependensi network.
3. **Impact Scope**:
   - Tentukan apakah bug memengaruhi fungsionalitas lain di sekitarnya.
4. **Actionable Fix**:
   - Tampilkan potongan kode sebelum dan sesudah perbaikan tanpa mengubah arsitektur modul yang tidak terkait.