# mac環境構築
## homebrew install
1. 公式サイトからインストール用のコマンドを入手（以下）

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

## Git

Gitは元々インストールされている場合もあるため、まず以下のコマンドで確認する。
```
git -v
```