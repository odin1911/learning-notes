# core data

[初识CoreData · CoreData从入门到精通](https://lionjohn.gitbooks.io/coredatacookbook/content/CHAPTER1/FirstLesson.html)

存对象
需要托管对象上下文`NSManagedObjectContext`

取对象
用`NSFetchRequest`实例
`NSSortDescriptor`排序
`NSPredicate`定义谓词

删除对象
`deleteObject`
`deleteObjects`

## gpt

1. 基本概念

- Managed Object: Core Data 使用 NSManagedObject 来表示数据模型对象，通常对应于你定义的数据模型。
- Managed Object Context: NSManagedObjectContext 是用于管理和操作 NSManagedObject 的上下文。它保存所有被修改的对象，并可以将这些修改保存到持久化存储中。
- Persistent Store: 数据最终保存在 persistent store 中，通常是 SQLite 数据库，但也可以是文件、内存等其他类型。
- Model (数据模型): Core Data 通过 .xcdatamodeld 文件来定义数据模型和实体之间的关系。这是通过图形界面来完成的，类似数据库的表结构。

## MagicalRecord

[magicalpanda/MagicalRecord: Super Awesome Easy Fetching for Core Data!](https://github.com/magicalpanda/MagicalRecord)

MagicalRecord降低了CoreData的使用门槛，不用去手动管理之前的PSC、MOC等对象。

`MR_*` 的一些方法
