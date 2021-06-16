# scrapbox-userscript-cursor-stalker

他人のカーソルにストーキングする Scrapbpx UserScript

## 使い方

[cursor-stalker - mizdra](https://scrapbox.io/mizdra/cursor-stalker) を参照。

## ビルド方法 (for contributor)

```console
$ yarn install
$ yarn run build
```

### コマンドリスト

- `yarn run build`: JS のビルドを実行
- `yarn run lint`: lint や format を実行

## リリース方法 (for maintainer)

```console
$ yarn install
$ yarn run build | cat dist/index.js | pbcopy

$ open https://scrapbox.io/mizdra/cursor-stalker
$ # ソースコードコーナーにクリップボードの中身をペースト
```
