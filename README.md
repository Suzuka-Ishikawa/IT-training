# ❶mac環境構築

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

# ❷git初歩とマークダウン

クリックで表示
<details>

## SSH（Secure Shell）
- ネットワークを通じて別のPCと安全に通信するためのプロトコル、SSH鍵ペア（**公開鍵＆秘密鍵**）で認証
- 特徴：暗号化通信、リモートアクセス、トンネリング（他のHTTPなどのプロトコルの通信も安全に）
- **GitHubなど、リモートローカル間でデータをやり取りするにはSSH認証が必要**
- 一般的にHTTPSより安全

**※HTTPS**　ーもう一つの認証方法
- アクセスのたびにユーザー名とパスワード（アクセストークン）を使って認証
- **Web通信**を安全にするために使う

<br/>

### *SSH接続の設定*
#### SSH鍵の作成
1. SShキーを入れるフォルダ（デフォルト）に移動
   ```
   $cd ~/.ssh
    ```
2. コマンドでSSH鍵ペアを生成する
    ```
    ssh-keygen -t rsa
    ```

3. 鍵の保存場所がデフォルトの`~/.ssh/id_rsa `になっていることを確認
4. パスワードの設定（入力が見えないので注意）
5. 任意でパスフレーズを設定（しない場合はエンター）

6. 以下のように生成される

   <img src="https://prog-8.com/shared/images/document/34/165533606243.png" width="50%">
引用 > https://prog-8.com/docs/git-env

7. .sshファイル内に鍵が作成できていることを確認
```
ls ~/.ssh
```

#### SSH公開鍵の登録（GitHub）

1. SShキーのフォルダ（デフォルト）に移動
   ```
   $cd ~/.ssh
    ```
2. 公開鍵ファイル内容の閲覧
    ```
    cat id_rsa.pub
    ```
3. `ssh-rsa`から始まり、メールアドレスで終わる長い文字列が公開鍵
4. GitHubにログインし、「Setting > SSH and GPG keys >  New SSH key」へ

   Keyフィールドに先程の公開鍵をコピペ⇨「Add SSH Key」
5. 接続の確認
   ```
   ssh -T git@github.com
   ```
   接続できていれば以下メッセージが表示
   ```
   Hi <Your GitHub Username>! You've successfully authenticated,...
   ```

<br/>

## リポジトリ
リポジトリ：　Gitで管理するプロジェクト（コード・ファイル・フォルダ・履歴等）の入れ物

### *リポジトリの作成*
- "New repository"を選択
    - Repository name：プロジェクト名
    - Description(任意)：内容の説明
    - Public / Private：公開設定 *（後で変更可能）*
    - **Initialize this repository with "README file"** ：READMEファイル（説明書）を作る場合チェック☑️



## clone
- リモート上のリポジトリをローカルに履歴やブランチごとコピーすること
    - 特徴：　ローカルで編集可、バックアップ、バージョン管理

## commit
- ローカルリポジトリ内で変更を保存する操作
    - ファイルの状態、作成者、タイムスタンプなどの情報をもつ
    - コミットメッセージ：変更点を説明するコメントで、履歴を振り返るときに大事

## push
- commitをリモートリポジトリに送信する操作
    - 共有、バックアップになる

<br/>

### *Clone〜Pushまでの流れ　【GitHub Desktop ver.】*
[コマンドで行う場合はコチラ](#clonepushまでの流れgitコマンドで)

＜はじめに＞
必要に応じて、ローカル上にGitのリポジトリ（履歴を管理する場所）を作成する。
- プロジェクトのフォルダ内で実行すると、”.git”という隠しフォルダが作成される。（これはバージョン管理に必要な情報を記録する）
- コマンドは以下⇩
    ```
    git init
    ```

＜Clone＞

すでにリモート環境にあるリポジトリを履歴ごとローカルにコピー⇩
```
Git clone <repositoryのURL>
```

＜commit＞

1. commitの準備として、記録したい変更を指定する(ステージング)
```
#変更したファイル名を指定
git add <file>

#現在のフォルダとその中のすべての変更をまとめて指定
git add .
```

2. ステージングした変更をリポジトリに記録（＝Commit）
```
git commit -m "<commit message>"
```

＜push＞

1. ローカルとリモートの接続を設定(リモートリポジトリ名の`<name>`は、通常は`origin`)
```
git remote add <name> <remote_repository_url>
```

2. commitをpush（`<branch＿name>`は送信したいブランチ名、mainやmasterなど）

```
git push <remote_name> <branch_name>

#通常は
git push origin main
```

<br/>

### *Clone〜Pushまでの流れ　【Gitコマンドver.】*

＜Clone＞

1. GitHub Desktopを開き、GitHubアカウントでログイン

2. - 既存リポジトリがない場合

     "Clone a repository from the Internet"を選択
   - 他のリポジトリがある場合

        左上のメニューバーからFile >Clone Repositoryを選択

3. タブからGitHub.com　>　リポジトリ一覧からクローンしたいリポジトリを選択
4. ”Local Path”からローカル上でのコピー先を選択
5. クローンが完了するとGitHub Desktopの画面がクローンしたリポジトリの管理画面に切り替わる

＜commit＞

1. 編集したファイルを保存（必須）

2. GitHub Desktopを開き、保存した変更点が表示されていることを確認

3. 画面左下のCommit Massage（Summary）を記入

4. ”Commit to main”をクリックする

＜push＞

1. GitHub Desktopの画面右上にある"Push origin" をクリック

2. GitHub上で変更点が反映されていれば成功

<br/>

</details>