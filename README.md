# Masaya Kaneda — Portfolio

GitHub Pages向けの静的ポートフォリオです。ビルド処理はありません。フォントはGoogle FontsからLibre Franklinを読み込みます。

## ローカル確認

```sh
python3 -m http.server 8000 --directory 260706_portfolio/code
```

`http://localhost:8000` を開いて確認します。

## 公開

GitHubリポジトリの Pages 設定で、このディレクトリを公開元に指定してください。リポジトリ直下から公開する場合は、内容を `docs/` または公開対象ブランチのルートへ移します。

作品画像は `assets/images/` にローカル保存済みです。Project Qutai、Whole-Zip、flexibib の画像は指定された掲載元からWeb配信用サイズを取得しています。

作品一覧は `index.html`、各作品は `project-qutai.html`、`whole-zip.html`、`flexibib.html` です。研究と略歴は `research.html`、`about.html` に分けています。
