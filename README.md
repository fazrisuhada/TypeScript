# TypeScript

Repo ini berisi dokumentasi pribadi selama proses belajar TypeScript — mulai dari setup environment, eksperimen kode, sampai catatan hal-hal yang pernah bikin bingung (dan cara benerinnya).

## Setup

Tools yang dipakai di project ini:

- [Node.js](https://nodejs.org/) — runtime JavaScript
- [TypeScript](https://www.typescriptlang.org/) (`tsc`) — compiler TypeScript ke JavaScript
- [tsx](https://github.com/privatenumber/tsx) — untuk langsung run file `.ts` tanpa compile manual dulu
- [nodemon](https://github.com/remy/nodemon) — auto-restart saat ada perubahan file

### Instalasi

```bash
npm install -g typescript tsx
```

### Compile TypeScript

```bash
tsc
```

Hasil compile otomatis masuk ke folder `dist/` (sesuai `outDir` di `tsconfig.json`).

### Run langsung tanpa compile

```bash
tsx src/index.ts
```

### Jalankan hasil compile

```bash
npm run dev
```

## Struktur folder

```
.
├── src/            # source code TypeScript
│   └── index.ts
├── dist/           # hasil compile (di-generate otomatis, tidak di-commit)
├── tsconfig.json   # konfigurasi compiler TypeScript
└── package.json
```

## Catatan belajar

- File `.ts` dipakai untuk kode biasa (logic, backend, utils). File `.tsx` khusus untuk file yang mengandung JSX/React component.
- `tsc` tidak menampilkan output apa pun kalau compile berhasil — bukan berarti tidak jalan.
- Pastikan `tsc` dijalankan dari folder yang sama dengan `tsconfig.json`, kalau tidak, compile bisa gagal tanpa error yang jelas.
