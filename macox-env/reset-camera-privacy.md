# 清理服务权限

命令格式：

tccutil reset service [Bundle identifier]

举例：

tccutil reset Camera

重置摄像头权限，执行命令后，系统下所有的应用软件都会清除掉摄像头权限

tccutil reset Camera xxx

重置指定应用程序的摄像头权限，其中xxx为应用程序的Bundle identifier，可在应用程序中的Info.plist文件中查看Bundle identifier

