---

# **@albarmo/albarms-ui**

Sebuah **React UI Components Library** hasil racikan tangan Albar Moerhamsa—dibangun dengan cinta, rollup, dan sedikit drama TypeScript. Library ini dirancang buat jadi fondasi UI yang rapi, reusable, dan siap dipakai di berbagai project modern.

---

## ✨ **Features**

* 🚀 Dibuild dengan **Rollup** — ringan dan optimal.
* 🎨 Mendukung **Storybook** buat dokumentasi dan preview komponen.
* 🧪 Unit testing via **Jest** & Testing Library.
* 🔧 Ditulis dengan **TypeScript** untuk lebih aman, lebih elegan.
* 🎭 SCSS & PostCSS support untuk styling fleksibel.

---

## 📦 **Installation**

Karena package ini publish di GitHub Packages, pastikan `.npmrc` kamu sudah terkonfigurasi:

```
@albarmo:registry=https://npm.pkg.github.com
```

Lalu install:

```
npm install @albarmo/albarms-ui
```

---

## 🛠 **Available Scripts**

Berikut script yang bisa kamu jalankan selama development:

### **🔧 Build Library**

Build library menggunakan Rollup:

```
npm run rollup
```

Output akan muncul di folder `dist/` dalam format:

* CommonJS → `dist/cjs/index.js`
* ES Modules → `dist/esm/index.js`
* Types → `dist/index.d.ts`

---

### **📖 Storybook**

Start Storybook secara lokal:

```
npm run storybook
```

Akses di: `http://localhost:6006`

Build versi static Storybook:

```
npm run build-storybook
```

---

### **🧪 Test**

Jalankan seluruh unit test:

```
npm test
```

---

## 📁 **Project Structure**

Struktur umum setelah build:

```
dist/
 ├─ cjs/
 │   └─ index.js
 ├─ esm/
 │   └─ index.js
 └─ index.d.ts
src/
 └─ components/
     └─ ...
```

---

## 🤝 **Peer Dependencies**

Library ini bergantung pada React. Pastikan react sudah terinstall:

```
"react": "^17.0.2" atau lebih tinggi
```

---

## 🧳 **Publish**

Package ini dipublish ke GitHub Packages lewat konfigurasi berikut:

```
"publishConfig": {
  "registry": "https://npm.pkg.github.com/albarmo"
}
```

Gunakan:

```
npm publish
```

---

## 🧑‍💻 **Author**

**Albar Moerhamsa**
Crafting UI with precision, vibes, and a sprinkle of chaos.

---

Kalau mau aku bikinin versi README yang lebih aesthetic, lengkap dengan badges, emoji, atau demo GIF, tinggal bilang aja — kita gaspol. 🚀✨
