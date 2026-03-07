# markdown-electron

リアルタイムプレビュー付きMarkdownエディタ（Electron製）

![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Mac%20%7C%20Linux-blue)
![Built with](https://img.shields.io/badge/built%20with-Electron-47848F)

---

## 概要

左ペインでMarkdownを書くと、右ペインにリアルタイムでHTMLプレビューが表示されるデスクトップエディタです。

## 機能

- リアルタイムプレビュー
- ツールバーによる書式挿入（見出し・太字・斜体・コードブロックなど）
- ワード数・文字数カウント
- HTMLとしてコピー
- Tabキーによるインデント対応
- ステータスバーに行・カラム番号を表示

## 使い方

```bash
git clone https://github.com/toukanno/markdown-electron.git
cd markdown-electron
npm install
npm start
```

## 技術スタック

- [Electron](https://www.electronjs.org/)
- [marked.js](https://marked.js.org/) — Markdownパーサー
- HTML / CSS / JavaScript

## ライセンス

MIT
