# ssh 连接 github

具体可查看 github 帮助

创建 ssh key，不要设密码

```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" # 创建

pbcopy < ~/.ssh/id_ed25519.pub # 复制

ssh-add -K ~/.ssh/id_ed25519 # 加入 ssh-agent

ssh-add -l # 查看

ssh -T git@github.com # 测试
```
