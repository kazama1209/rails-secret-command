# rails-secret-command

![マイ-ムービー(7)](https://user-images.githubusercontent.com/51913879/123138008-8fa06f00-d48f-11eb-896b-91dee07c1434.gif)

Railsアプリに隠しコマンドを実装するためのサンプル。

詳細はQiitaにて記載。

https://qiita.com/kazama1209/items/78bd59304c12bd61b771

## セットアップ

```
$ docker-compose build
$ docker-compose up -d
$ docker-compose run web rails webpacker:install
$ docker-compose run web rails db:create
```

[http://localhost:3000/](http://localhost:3000/) にアクセス。
