# git worktree 命令使用

创建工作树
创建一个新目录，但是没有独立的.git 目录
只维护一个 repo，创建多个 worktree
在多分支独立工作的项目中可以用到，比如 kj-usb-2.0 有国内和海外分支。使用这个方式后可以独立到2个目录，相比clone2次，节省了空间。

```sh
# git worktree add -b <新分支名> <新路径> <从此分支创建>
git worktree add -b "hotfix/JIRA234-fix-naming" ../hotfix/JIRA234-fix-naming

# 查看工作树列表
git worktree list

# 删除工作树
git worktree remove hotfix/hotfix/JIRA234-fix-naming

# 清理不再使用的工作树
# 删除时可以删目录，再调用 prune
git worktree prune

```

## refs

[如何不切换 Git 分支，同时在多个分支上工作？ | 程序猿 DD](https://blog.didispace.com/git-work-on-different-branch/)

[Git Worktree 的高级使用介绍 | 程序猿 DD](https://blog.didispace.com/git-worktree-2/)
