# mac環境構築

クリックで表示
<details>

## homebrew
### *homebrewとは*
- MacやLinuxで使えるパッケージマネジャー（ソフトウェアをインストール・管理するための便利ツール）

⇨Homebrewを使うと、ターミナル上から簡単にツールを入れたりアップデートしたりできる。

 <br/>

### *インストール*
1.  公式サイトからインストール用のコマンドを入手（以下）

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. terminalに貼り付け実行（パスワードはPCのものを使用）

3. 「Press RETURN to continue or any other key to abort 」が表示されたら、Enterキーで実行

4. 「Installation successful」と出たらインストール完了

5. 以下のコマンドをterminalに入力し、バージョン情報が表示されれば正常
```
brew -v
```

 <br/>

## Git
### *Gitとは*
- コードの変更履歴を記録・管理するためのツール（**ローカル環境**）

    - 特徴：　バージョン管理・履歴・ブランチ機能・共同開発
 <br/>

### *インストール*
Gitは元々インストールされている場合もあるため、まず以下のコマンドで確認する。
```
git -v
```
git versionが表示されればGitは利用可能

*"コマンドラインデベロッパーツールが必要です"と表示された場合はインストールを行う。

完了するとGitが利用できる。

 <br/>

 ## GitHub
 ### *GitHubとは*
- Gitのデータをインターネット上で共有するサービス（**リモート環境**）

    - 特徴：　Gitのリポジトリをクラウド上に・コードの公開・共有

 <br/>

### *Githubアカウント*
Git(hub)の利用にはアカウントの作成が必要
- Github公式サイトにアクセスしてサインアップ⇨
[GitHub](https://github.com/)

<br/>

### *リポジトリの作成*
リポジトリ：　Gitで管理するプロジェクト（コード・ファイル・フォルダ・履歴等）の入れ物

- "New repository"を選択
    - Repository name：プロジェクト名
    - Description(任意)：内容の説明
    - Public / Private：公開設定 *（後で変更可能）*
    - **Initialize this repository with "README file"** ：READMEファイル（説明書）を作る場合チェック☑️



<br/>

## GitHub Desktop
### *GitHub Desktopとは*

- ターミナルを使わなくてもGitを使えるGUIツール

    - 特徴：　管理・コミット（変更記録）・プッシュ・プル・ブランチ切り替え・GitHub接続がカンタンに

<br/>

### *インストール*
1. 公式サイトからアプリをダウンロード⇨[GitHub Desktop](https://github.com/apps/desktop)

2. GitHubアカウントでログイン
3. フォルダやファイルをリポジトリへ登録

<br/>

### *使い方（GitHub Desktop版）*


---
#### push
---
 登録したファイル内容の変更等を保存すると、GitHub Desktop上に反映される

⇨　GitHub Desktop上の"Commit to main"より変更を保存

⇨　"Push origin" でGitHub上にアップロードされる

<br/>

### *使い方（コマンド版）*
ターミナルへのコマンド入力でも同じ操作ができる

git
- clone
- add
- commit
- push
- init
- remote add


<br/>

## Docker
### *Dockerとは*
- アプリと環境設定を丸ごと軽量なパッケージ（＝コンテナ）にすることで、どこでも同じ動作が保証される仕組み
    - イメージ：　コンテナを作るための設計図。OSやソフトウェア、設定が入っている。
    - コンテナ：　実際に動いている実行中の環境＝１つのVM
    - Dokerfile：　イメージを作るためのレシピ。テキストファイルで環境を定義

<br/>

### *インストール*
- Macの場合は**Docker Desktop**を使うとラク

    ⇨DockerはLinuxのVMを使っているため、Desktop版で自動構築してもらうのが簡単

1. 公式サイトからダウンロード⇨[Docker](https://www.docker.com/)

2. アプリケーションフォルダに移動し開く

3. 利用規約に同意、こだわりがなければ推奨設定を利用

4. 動作状況を確認
    - メニューバーに🐳のマークがある場合正常に起動している
    - または、ターミナル上で以下を入力し、バージョン情報が表示されれば正常
    ```
    docker -v
    ```

5. 現在実行中のDockerコンテナを確認

以下のコマンドで起動中のコンテナ一覧が表示される

```
docker ps
```
- `docker ps -a`：すべてのコンテナを表示（停止中含む）
- `docker ps -q`：コンテナIDのみを表示（スクリプトで使うときに便利）

<br/>

## docer-compose
- 複数のDockerコンテナを一括で構成・起動・管理できるツール

- Docker Desktopにcomposeも同梱されており、すぐ使える場合が多い
    - ターミナル上で以下を入力し、バージョン情報が表示されれば正常
    ```
    docker-compose -v
    ```
<br/>

## Visual Studio Code
- 拡張機能が豊富なマルチOSコードエディタ

<br/>

### *インストール*
1. 公式サイトからダウンロード⇨[visuaistudio](https://code.visualstudio.com/)

2. アプリケーションフォルダにインストールして起動
3. 拡張機能でカスタム

    - おすすめカスタム機能⇨[VScodeおすすめカスタム](https://qiita.com/qrrq/items/0e116a59743874d18cb1)

<br/>

### *terminal*
- Macのターミナル（bash,zsh）をVScode内で開いているイメージ

<br/>

## まとめ
以下が確認できればとりあえずOK
- コマンドラインで確認

    - `docker ps`

    - `docker-compose -v`

    - `git -v`

    - `brew -v`

- PCのアプリケーションフォルダで確認

    - github desktop
    - visual studio code

</details>

<br/>

# git初歩
## リポジトリ

## clone