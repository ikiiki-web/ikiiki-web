# 株式会社イキイキ（ＩＫ！ＩＫ！）

## 開発環境

- node v18.17.0
- npm v8.2.0

### install

```
$ npm ci
```

### usage

```
$ npm run dev
```

### directory

```
├── public（静的ディレクトリ）
│   ├── img (画像置き場）
│   :
├─── src
:   ├── pages（ページルーティング）
    ├── style（全体のスタイルを配置）
    │   ├── GlobalStyle.ts
    │   ├── components
    │   ├── resetStyle.ts
    │   └── variables.ts
    ├── components
    │   ├── atoms（最小単位のcomponent）
    │   ├── block（atomsを組み合わせたり、atomsでは管理しきれないcomponent
    │   ├── contents（ページcomponent）
    │   └── modules（機能を持ったcomponent）
    ├── types（アプリケーション内で利用する型）
    ├── lib（モジュール化されたロジック）
    └── utils（定数など）
```
