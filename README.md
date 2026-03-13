# RainbowMD

リアルタイムプレビュー付き Markdown エディタ

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue)](#ダウンロード)
[![Built with Electron](https://img.shields.io/badge/built%20with-Electron-47848F)](https://www.electronjs.org/)
[![Latest Release](https://img.shields.io/github/v/release/toukanno/rainbowmd-pages?label=latest)](https://github.com/toukanno/rainbowmd-pages/releases/latest)

---

## 概要

RainbowMD は、左ペインで Markdown を書くと右ペインにリアルタイムで HTML プレビューが表示されるデスクトップエディタです。
Electron ベースで Windows / macOS / Linux に対応しています。

## 機能

- リアルタイムプレビュー（左右分割ビュー）
- ツールバーによる書式挿入（見出し・太字・斜体・コードブロックなど）
- ワード数・文字数カウント
- HTML としてコピー
- Tab キーによるインデント対応
- ステータスバーに行・カラム番号を表示

## ダウンロード

### Windows

| 配布形式 | リンク |
|:--|:--|
| インストーラー (.exe) | [Releases ページ](https://github.com/toukanno/rainbowmd-pages/releases/latest) |
| Microsoft Store | *準備中* |

> **Microsoft Store 向けパッケージ**
> Microsoft Store への提出には `.msix` または `.appx` 形式のパッケージが必要です。
> 現在は `.exe` インストーラーのみ提供しています。

### macOS / Linux

現在はビルド済みバイナリの配布を準備中です。
ソースコードから直接ビルドして利用できます（下記「開発」セクションを参照）。

## 開発

```bash
git clone https://github.com/toukanno/rainbowmd-pages.git
cd rainbowmd-pages
npm install
npm start
```

## リリース手順

1. `package.json` のバージョンを更新
2. `npm run build` でインストーラーを生成
3. GitHub Releases にアップロードし、リリースノートを記載

## 技術スタック

- [Electron](https://www.electronjs.org/)
- [marked.js](https://marked.js.org/) — Markdown パーサー
- HTML / CSS / JavaScript

## プライバシーポリシー

[プライバシーポリシー](https://toukanno.github.io/rainbowmd-pages/privacy-policy.html)を参照してください。

## ライセンス

[MIT](LICENSE)

## お問い合わせ

バグ報告・機能要望は [Issues](https://github.com/toukanno/rainbowmd-pages/issues) からお願いします。
