# RainbowMD

リアルタイムプレビュー付き Markdown エディタ

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows-blue)](#ダウンロード)
[![Built with Electron](https://img.shields.io/badge/built%20with-Electron-47848F)](https://www.electronjs.org/)
[![Latest Release](https://img.shields.io/github/v/release/toukanno/rainbowmd-pages?label=latest)](https://github.com/toukanno/rainbowmd-pages/releases/latest)

---

## 概要

RainbowMD は、左ペインで Markdown を書くと右ペインにリアルタイムで HTML プレビューが表示されるデスクトップエディタです。
Electron ベースで動作し、現在は Windows 向けに提供しています。

## 機能

### エディタ
- Markdown リアルタイムプレビュー（左右分割）
- 書式ツールバー（見出し / 太字 / 斜体 / コードブロックなど）
- 行番号・カラム番号表示（ステータスバー）
- Tab キーによるインデント対応
- ワード数・文字数カウント

### 検索
- 部分一致（デフォルト）
- 前方一致
- 完全一致（行単位）
- 正規表現検索

### AI
- AI 補助入力
- AI による文章補助・文章生成
- AI サジェスト機能

### エクスポート
- HTML へのコピー
- JSON / JS エクスポート

### UI・カスタマイズ
- テーマ切替（ダーク・ライトなど複数対応）
- ウィンドウ透明度調整
- ファイル名生成パターン設定

## ダウンロード

### Windows

| 配布形式 | リンク |
|:--|:--|
| Microsoft Store | [![Microsoft Store](https://img.shields.io/badge/Microsoft%20Store-Get%20it-blue?logo=microsoft)](https://apps.microsoft.com/store/detail/XP8BVG4DLVCQ3C) |
| インストーラー (.exe) | [RainbowMD.Setup.2.0.1.exe](https://toukanno.github.io/rainbowmd-pages/releases/windows/download/v2.0.1/RainbowMD.Setup.2.0.1.exe) |
| 過去バージョン | [RainbowMD.Setup.1.0.0.exe](https://toukanno.github.io/rainbowmd-pages/releases/windows/download/v1.0.0/RainbowMD.Setup.1.0.0.exe) |

> Windows 10 以降対応

#### Microsoft Store リンク

- **Web Store:** https://apps.microsoft.com/store/detail/XP8BVG4DLVCQ3C
- **Store deep link:** `ms-windows-store://pdp/?productid=XP8BVG4DLVCQ3C`

### macOS / Linux

現在は Windows 版のみ提供しています。

## 技術スタック

- [Electron](https://www.electronjs.org/)
- [marked.js](https://marked.js.org/) — Markdown パーサー
- HTML / CSS / JavaScript

## リリースガイド

Windows / Microsoft Store 向けのリリース手順は [docs/release-guide.md](docs/release-guide.md) を参照してください。

## プライバシーポリシー

[プライバシーポリシー](https://toukanno.github.io/rainbowmd-pages/privacy-policy.html)を参照してください。

## ライセンス

[MIT](LICENSE)

## お問い合わせ

バグ報告・機能要望は [Issues](https://github.com/toukanno/rainbowmd-pages/issues) からお願いします。
