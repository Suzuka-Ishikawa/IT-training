# ベースイメージを指定
FROM ubuntu:20.04

# 作業ディレクトリを/appに設定（/appはコンテナ上の慣例的な作業ディレクトリ）
WORKDIR /app

# パッケージリストを更新
RUN apt-get update

# vimをインストール
RUN apt-get update && \
    apt-get install -y vim

# Nginxをインストール
RUN apt-get install -y nginx

# ローカルのファイルをコンテナ内の/appディレクトリにコピー
COPY . /app/

# Nginxのデフォルトの公開ディレクトリを削除
RUN rm -rf /var/www/html

# /appの内容をNginxのデフォルトの公開ディレクトリにシンボリックリンク（nginxが/appのファイルを参照できる）
RUN ln -s /app /var/www/html

# 公開するポートを指定（HTTPのデフォルトポート）
EXPOSE 80

# スクリプトを実行するコマンド（今回はnginxを起動）
CMD ["nginx", "-g", "daemon off;"]
