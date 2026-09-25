---
trigger: always_on
---

# Project Overview & Context
- **Project Name**: Arif Ilham Portfolio
- **Description**: Arif Ilham Portfolio Website untuk menunjukkan siapa arif ilham, apa yang dibisa, dan bukti pekerjaan yang pernah dikerjakan.
- **Primary Tech Stack**: TypeScript, Next.js (App Router), Tailwind CSS.

## Architecture & Folder Structure
- `app/` : Routing, page, dan Route Handlers (`api/`).
- `components/` : Reusable UI components, `modules/` domain-specific components).
- `types/` : Definisi tipe TypeScript.

## Coding & Style Conventions
- Komponen UI: `PascalCase`
- Selain komponen UI `camelCase`
- Folder routes / path: `kebab-case` sesuai struktur URL Next.js.
- File khusus Next.js tetap ikuti standar: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts`.
- Gunakan class utilitas Tailwind CSS. Hindari inline style kecuali untuk dynamic calculation yang rumit.
- Prefix `NEXT_PUBLIC_` hanya untuk variable yang aman diekspos ke browser.
- Selalu sinkronkan variabel baru ke `.env.example`.
- Selalu prioritaskan penanganan error eksplisit (*try-catch* / *error handling* yang rapi).

## Hard Guardrails (Dilarang Keras)
1. **DILARANG** mengubah file `.env`, `.env.local`, atau kredensial rahasia secara sepihak.
2. **DILARANG** menambahkan directive `'use client'` pada root `layout.tsx` atau seluruh `page.tsx` secara membabi buta tanpa kebutuhan spesifik.
3. **DILARANG** menginstal dependency/package npm/pnpm/yarn baru tanpa konfirmasi terlebih dahulu.
4. **DILARANG** menghapus file existing atau mengubah arsitektur folder utama tanpa instruksi eksplisit.
5. **DILARANG** melakukan git commit, checkout branch baru, atau push otomatis.