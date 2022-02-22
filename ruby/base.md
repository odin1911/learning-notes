# ruby基础

## 20分钟体验 Ruby

[link](https://www.ruby-lang.org/zh_cn/documentation/quickstart/)

puts 是 Ruby 语言里用来打印的基本命令

** 是”次方”的意思

Math 是一个自带的数学模块

def h 定义一个函数。它告诉 Ruby 我们的函数名字是 h。下一行是函数的内容， 正是我们前面看到过的那行代码：puts "Hello World!"。最后的一行 end 告诉 Ruby 函数的定义完成了。

如果函数不需要接受参数， 您只要提到它就够了。您可以加一对括号，但不是必需的。

```ruby
irb(main):015:0> def h(name)
irb(main):016:1> puts "Hello #{name}!"
irb(main):017:1> end
```

啥是 #{name} 啊？这是 Ruby 用来往字符串中插入信息的方法。大括号里面的代码会被替换为评估后的字符串 （如果他们还不是字符串的话）然后插入到包含大括号的原始字符串中去

```ruby
h("Matz")
# 同
h "chris"
```

省略了函数的括号。如果我们的命令看起来意图很明显的话， 函数的括号是可以省略的

新的关键字 class！ 这个关键字定义了一个新的类

Greeter.instance_methods(false)

哪些函数作出回应：respond_to?("say_hi")

访问属性。attr_accessor 会自动为我们定义两个新的函数， name 用来读取变量的值， name= 用来给变量赋值

```ruby
irb(main):044:0> class Greeter
irb(main):045:1>   attr_accessor :name
irb(main):046:1> end
```

## Ruby 语言新手教程

[Ruby 语言新手教程](http://saito.im/slide/ruby-new.html)

### Hello World

```ruby
# 标准版:
print "hello world!"

# 太长了:
puts "hello world!"

# 再短一点:
p "hello world!"
```

### Comment

```ruby
# say hello

=begin
  this is a long comment
=end
```

### variables

- local: time or _time
- instance: @time
- class: @@time
- global $time

### data types

- Numeric
- String
- Symbol
- Boolean
- Array
- Hash

### variables tricks

```ruby
"hello #{name}"
a,b = b,a
3.times{ puts "hello"}
"hello" * 3
```

### condition if

```ruby
# 质樸的if:
if(a>5)
  puts a
end

# 一行版:
if a > 5 then puts a end

# 语义不够顺畅:
puts a if a > 5
```

### condition unless

与if语义相反的unless

```ruby
puts "miss it" if !name
puts "miss it" unless name
```

### 三元

```ruby
a > 5 ? puts(a) : "oh no"
```

### condition if else

```ruby
# if elsif else:
if name == "jack"
  "i am rose"
elsif name == "rose"
  "jack i miss u"
else
  "get out from here"
end
  
# switch
case name
  when "jack" then "i am rose"
  when "rose" then "jack i miss u"
  else "get out from here"
end

```

### loop

```ruby
# 循环怎么写:
3.times{ puts "hello world" }

# for呢:
for x in [1,2,3]
  puts x
end

# while:

while i > 5 do
  i -= 1
end

i -= 1 while i > 5

# until:

until i <= 5 do
  i -= 1
end
i -= 1 until i<= 5

# while true太不洋气了:

loop do
  puts "我自豪"
end
  
# 打断罪恶的连锁:
break
next
redo
retry
```

### method

```ruby
# 质樸版:

def plus(x,y)
  z = x + y
  return z
end
plus(3, 4)
    
# 一步到位的:

def plus x,y
  x+y
end
plus 3,4
```

### block

```ruby
# 制造一个带有block的method:

def hello
  yield
end

hello {puts "hello, block"}
    
# 显式的告诉你这是怎么一回事(并不完全相同:

def hello &block
  block.call
end

hello {puts "hello, block"}
```

### lambda and block

```ruby
# lambda 和 Proc:
lambda{}

Proc.new{}

# lambda和Proc的一点点区别:
# Proc中return会跳出当前作用域
# lambda中return不会跳出当前作用域
```

### block example

```ruby
# 一些常用的block的例子:
[1,2,3,4,5].each{|i| puts i}
[1,2,3,4,5].each_with_index{|i, index| puts i, index}
[1,2,3,4,5].map{|i| i**2 }
[1,2,3,4,5].select{|i| i%2==0 }
[1,2,3,4,5].reject{|i| i%2==0 }
[1,2,3,4,5].inject{|sum, i| sum += i}
```

### class

```ruby
# 正常的class实现:

class Bird
  attr_accessor :name, :sex
  def initialize name
    @name = name
  end
  
  def self.fly
    puts "bird can fly"
  end
  
  def say
    puts "i am #{@name}"
  end
end

bird = Bird.new("didi")
bird.sex = "male"
Bird.fly

# 继承怎么实现:

class LittleBird < Bird
  def initialize name
    super(name)
  end
end
    
# 特殊属性访问控制:

attr_reader :name
attr_writer :sex
```

### module

```ruby
# "有逻辑实现的interface":

module Eat
  def eat
    p "i can eat"
  end
end

module Sleep
  def sleep
    p "i can sleep"
  end
end

class Pig
  include Eat
  include Sleep
end

Pig.new.eat
Pig.new.sleep
```

### module constants

```ruby
# module constants访问:

module Math
  PI = 3.14
end

Math::PI

# module namespace:

module Foo
  module Bar
    def self.say
      p "Hi"
    end
  end
end

Foo::Bar.say

# another module namespace:

module Foo
  class Bar
    def say
      p "Hi"
    end
  end
end

Foo::Bar.new.say

# module的特殊用法singleton:

module Item
  extend self
  
  def name
    p "i'm item"
  end
end

Item.name
    
```

### ruby more

```ruby
# monkey patch:

class Fixnum
  def plus n
    self + n
  end
end

1.plus 3
    
```

### more

[Fiber](https://gist.github.com/1050566)
[Class](https://gist.github.com/872171)
[System](https://gist.github.com/822091)
[Proc](https://gist.github.com/874438)

## runoob.com

self: 当前方法的接收器对象。
true: 代表 true 的值。
false: 代表 false 的值。
nil: 代表 undefined 的值。
__FILE__: 当前源文件的名称。
__LINE__: 当前行在源文件中的编号。

defined?

## Pre-defined Variables

如：`$,`

[Ruby : Pre-defined Variables](https://www.w3resource.com/ruby/ruby-variables-constants.php)

[Globalization](https://idiosyncratic-ruby.com/9-globalization.html)

[中文](https://cloud.tencent.com/developer/section/1377807)

## 2022-02-22

ruby语法暂结，rails还没看