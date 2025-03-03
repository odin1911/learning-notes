# commands note

记录一些不常用的git命令

```shell

# 不删除工作空间改动代码，撤销commit，并且撤销git add . 操作
git reset HEAD^
git reset --mixed HEAD^

# 不删除工作空间改动代码，撤销commit，不撤销git add .
git reset --soft HEAD^

# 删除工作空间改动代码，撤销commit，撤销git add . 
git reset --soft HEAD^ # 第一条没试过
git reset --hard origin/dev # 试过，远程分支被force push后，用于更新本地分支

```

## fixup

[Git使用技巧—保持开发分支上提交日志整洁 fixup rebase - 老码农不上班](https://huangwenwei.com/blogs/use-rebase-and-fixup-keep-dev-branch-clear)

```sh
git commit --fixup <commit> 把commit作为之前某个提交的一个修复
git rebase -i --autosquash <normal commit>
```
