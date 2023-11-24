# ssh相关

## 生成ssh key

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Enter file in which to save the key (/Users/admin/.ssh/id_rsa):
# 输入完整路径，否则会创建在当前目录下
# 如 /Users/admin/.ssh/id_rsa_for_github

# Enter passphrase (empty for no passphrase): 
# 先确认是否要设密码，可以不设置
```

## 复制ssh key

```sh
# macos
pbcopy < ~/.ssh/id_ed25519.pub
```

## 加入 ssh-agent

```sh
ssh-add -K ~/.ssh/id_ed25519
```

## 查看 ssh-agent

```sh
ssh-add -l
```

## 测试

```sh
ssh -T git@github.com
```
