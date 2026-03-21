# RainbowMD

リアルタイムプレビュー付き Markdown エディタ

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS-blue)](#ダウンロード)
[![Built with Electron](https://img.shields.io/badge/built%20with-Electron-47848F)](https://www.electronjs.org/)
[![Latest Release](https://img.shields.io/github/v/release/toukanno/rainbowmd-pages?label=latest)](https://github.com/toukanno/rainbowmd-pages/releases/latest)

---

## 概要

RainbowMD は、左ペインで Markdown を書くと右ペインにリアルタイムで HTML プレビューが表示されるデスクトップエディタです。
Electron ベースで動作し、Windows / macOS に対応しています。

## 機能

### エディタ
- Markdown リアルタイムプレビュー（左右分割）
- 書式ツールバー（見出し / 太字 / 斜体 / コードブロックなど）
- 行番号・カラム番号表示（ステータスバー）
- Tab キーによるインデント対応
- ワード数・文字数カウント

### 検索
- 検索・置換（Cmd+F / Cmd+H）
- 正規表現検索対応

### AI アシスタント
- 文章の校正・要約・翻訳・改善
- OpenAI / Anthropic API 対応
- 結果をワンクリックでドキュメントに挿入

### エクスポート
- HTML / PDF / JS / JSON エクスポート
- Markdown / HTML クリップボードコピー

### UI・カスタマイズ
- 8種類のカラーテーマ（ダーク / ライト / オーシャン / フォレスト / サンセット / ミッドナイト / ペーパー / 桜）
- ウィンドウ透明度調整（40%〜100%）
- 日本語 / 英語 完全対応
- アウトライン表示

## ダウンロード

### macOS

| 配布形式 | リンク |
|:--|:--|
| Mac App Store | 審査中 |
| DMG (Apple Silicon) | [RainbowMD-2.2.1-arm64.dmg](https://github.com/toukanno/rainbowmd-pages/releases/download/v2.2.1/RainbowMD-2.2.1-arm64.dmg) |
| DMG (Intel) | [RainbowMD-2.2.1-x64.dmg](https://github.com/toukanno/rainbowmd-pages/releases/download/v2.2.1/RainbowMD-2.2.1-x64.dmg) |
| ZIP (Apple Silicon) | [RainbowMD-2.2.1-arm64.zip](https://github.com/toukanno/rainbowmd-pages/releases/download/v2.2.1/RainbowMD-2.2.1-arm64.zip) |
| ZIP (Intel) | [RainbowMD-2.2.1-x64.zip](https://github.com/toukanno/rainbowmd-pages/releases/download/v2.2.1/RainbowMD-2.2.1-x64.zip) |

> macOS 12.0 (Monterey) 以降対応

### Windows

| 配布形式 | リンク |
|:--|:--|
| Microsoft Store | [![Microsoft Store](https://img.shields.io/badge/Microsoft%20Store-Get%20it-blue?logo=microsoft)](https://apps.microsoft.com/store/detail/XP8BVG4DLVCQ3C) |
| インストーラー (.exe) | [RainbowMD.Setup.2.1.2.exe](https://toukanno.github.io/rainbowmd-pages/releases/windows/download/v2.1.2/RainbowMD.Setup.2.1.2.exe) |

> Windows 10 以降対応

## 技術スタック

- [Electron](https://www.electronjs.org/)
- [marked.js](https://marked.js.org/) — Markdown パーサー
- [highlight.js](https://highlightjs.org/) — コードハイライト
- HTML / CSS / JavaScript

## プライバシーポリシー

[プライバシーポリシー](https://landing-tau-woad.vercel.app/#privacy-policy)を参照してください。

## ライセンス

[MIT](LICENSE)

## お問い合わせ

バグ報告・機能要望は [Issues](https://github.com/toukanno/rainbowmd-pages/issues) からお願いします。
