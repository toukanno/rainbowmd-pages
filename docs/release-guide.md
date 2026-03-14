# Release Guide

RainbowMD の Windows アプリリリース手順をまとめたドキュメントです。

---

## 1. GitHub Release 作成手順

### 1-1. ビルド

```bash
npm run build
# または
npm run dist
```

### 1-2. 成果物の確認

`dist` フォルダに `setup.exe` が生成されていることを確認します。

### 1-3. GitHub Releases の作成

1. GitHub リポジトリの **Releases** ページを開く
2. **Draft a new release** をクリック
3. Tag を作成: `vX.X.X`（例: `v2.0.1`）
4. Release title を入力（例: `RainbowMD v2.0.1`）
5. `setup.exe` を **Attach binaries** エリアにドラッグ&ドロップでアップロード
6. リリースノートを記入
7. **Publish release** をクリック

---

## 2. Microsoft Store 用パッケージ URL

Microsoft Store にアプリを登録する際、インストーラーの URL を指定する必要があります。
**GitHub Releases のダウンロード URL** を使用してください。

### 正しい URL 形式

```
https://github.com/{user}/{repo}/releases/download/vX.X.X/setup.exe
```

**具体例:**

```
https://github.com/toukanno/rainbowmd-pages/releases/download/v2.0.1/setup.exe
```

> ポイント: `/releases/download/` を含む直接ダウンロード URL を指定すること。

### ダメな URL 例

| URL | 理由 |
|:--|:--|
| `https://github.com/{repo}/tree/main/...` | リポジトリのツリービュー。ファイルをダウンロードできない |
| `https://github.com/{repo}/blob/main/...` | blob ページ。HTML ページが返される |
| `https://github.com/{repo}/releases/tag/...` | リリースページの HTML。直接ダウンロードではない |

---

## 3. Microsoft Store 設定例

Microsoft Store の Partner Center でパッケージを登録する際の設定値です。

| 項目 | 値 |
|:--|:--|
| Architecture | `x64` |
| Installer parameter | `/S` |

> `/S` はサイレントインストールオプションです（NSIS ベースのインストーラーで使用）。

---

## 4. チェックリスト

リリース前に以下を確認してください。

- [ ] `npm run build` / `npm run dist` が正常に完了した
- [ ] `dist/setup.exe` が存在する
- [ ] GitHub Release の tag が正しいバージョン番号になっている
- [ ] `setup.exe` がリリースにアップロードされている
- [ ] Microsoft Store 用の URL が `/releases/download/` 形式になっている
- [ ] Microsoft Store の Architecture が `x64` に設定されている
- [ ] Microsoft Store の Installer parameter が `/S` に設定されている
