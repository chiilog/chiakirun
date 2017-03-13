# chiakirun
npm-scriptsを使ったタスクランナーを作る練習。名前思いつかなくて適当にチアキラン。  
ゆくゆくはビルドとか色々足したいけど少しずつやっていきます。  
お仕事で使うので余計な機能はつけません。

`npm start` を叩けばウォッチが走ります。

## 機能
* postcssのコンパイル（ビルドも`npm run css:build`を叩けばできるけど、html関連まだ）
* postcssでメディアクエリ
* ブラウザシンク

## 履歴
* 2017.03.13 ejs削除。postcss-color-function 追加
* 2017.02.25 postcss-custom-media 追加、リポジトリ移動、postcss-cli v3-betaに対応
* 2017.01.17 first commit
