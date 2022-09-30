# 初步了解 mongodb

2022-01-29 **菜鸟上的教程老了，要看 4.2 的**

## 安装

macos 上通过 brew 安装

## 概念

数据库-集合-文档

### 数据库 database

show dbs : 显示所有数据的列表

db : 显示当前数据库对象或集合

use local : 连接到一个指定的数据库

### 文档 document

key-value 对

[BSON](https://blog.csdn.net/z69183787/article/details/26709505)

文档中的键/值对是有序的

### 集合 collection

capped collections : 固定大小的 collection

### 元数据

`<dbnname>.system.*`

### 数据类型

ObjectId : 对象 ID

String : UTF-8 string

Data : UNIX 时间格式

## 使用

### 连接 mongodb 服务

`mongodb://localhost`

### 创建数据库

`use DATABASE_NAME` 如果不存在会创建

### 删除数据库

`db.dropDatabase` 删除当前数据库

### 创建集合

`db.createCollection(name,options)`

### 删除集合

`db.COLLECTION_NAME.drop()`

### 插入文档

`db.COLLECTION_NAME.insert(document)`

`db.COLLECTION_NAME.save(document)`

insertOne

insertMany

### 更新文档

update

save

### 删除文档

remove

deleteOne

deleteMany

### 查询文档

find

finde().pretty() : 以格式化的方式来显示所有文档

### 条件操作符

- `$lt`
- `$lte`
- `$gt`
- `$gte`
- `ne`

AND 条件： 传入多个 key，逗号隔开

OR 条件：`$or`关键字

### $type 操作符

### limit 和 skip

limit : 读取指定数量的数据记录

skip : 路过指定数量的数据记录

### 排序

sort

### 索引

createIndex

getIndexes

totalIndexSize

dropIndexes

dropIndex

### 聚合

aggregate

聚合管道

### 副本集

### 分片

## nodejs mongodb
