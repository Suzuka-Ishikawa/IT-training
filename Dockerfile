# ベースイメージを指定
FROM ubuntu:20.04

# 作業ディレクトリを/appに設定（/appはコンテナ上の慣例的な作業ディレクトリ）
WORKDIR /app

# 環境変数を表示するスクリプトをコピー
COPY . .

# vimをインストール
RUN apt-get update && \
    apt-get install -y vim

# スクリプトを実行するコマンド
CMD ["./IT-training"]
