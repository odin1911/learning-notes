# swift5

[README | SwiftGG](https://gitbook.swiftgg.team/swift)
[关于 Swift | Swift 编程语言中文教程（The Swift Programming Language）](https://swift.bootcss.com/)

## Simulator 下载

去
https://developer.apple.com/download/all/?q=ios
找到 Simulator，下载 dmg
放到`/Library/Caches/com.apple.dt.Xcode/Downloads`
根据`developer.apple.com/download`上的安装提示安装

## note

[Swift 初见 | SwiftGG](https://gitbook.swiftgg.team/swift/huan-ying-shi-yong-swift/03_a_swift_tour)

```swift
var myVariable = 42 // 变量声明
myVariable = 50
let myConstant = 42 // 常量声明

let explicitDouble: Double = 70 // 显式类型声明

// 值永远不会被隐式转换为其他类型。
let label = "The width is "
let width = 94
let widthLabel = label + String(width)

// 有一种更简单的把值转换成字符串的方法：把值写到括号中，并且在括号之前写一个反斜杠（\）
let apples = 3
let oranges = 5
let appleSummary = "I have \(apples) apples."
let fruitSummary = "I have \(apples + oranges) pieces of fruit."

// 使用三个双引号（"""）来包含多行字符串内容。
let quotation = """
I said "I have \(apples) apples."
And then I said "I have \(apples + oranges) pieces of fruit."
"""

// 使用方括号 [] 来创建数组和字典，并使用下标或者键（key）来访问元素
var shoppingList = ["catfish", "water", "tulips", "blue paint"]
shoppingList[1] = "bottle of water"

var occupations = [
    "Malcolm": "Captain",
    "Kaylee": "Mechanic",
]
occupations["Jayne"] = "Public Relations"

// 数组在添加元素时会自动变大
shoppingList.append("blue paint")
print(shoppingList)

// 创建一个空数组或者空字典
let emptyArray: [String] = []
let emptyDictionary: [String: Float] = [:]



// 使用 if 和 switch 来进行条件操作，使用 for-in、while 和 repeat-while 来进行循环。包裹条件和循环变量的括号可以省略，但是语句体的大括号是必须的。
let individualScores = [75, 43, 103, 87, 12]
var teamScore = 0
for score in individualScores {
    if score > 50 {
        teamScore += 3
    } else {
        teamScore += 1
    }
}
print(teamScore)

// 一起使用 if 和 let 一起来处理值缺失的情况。
var optionalString: String? = "Hello" // 类型后面加一个问号（?）来标记这个变量的值是可选的
print(optionalString == nil)

var optionalName: String? = "John Appleseed"
var greeting = "Hello!"
if let name = optionalName {
    greeting = "Hello, \(name)"
}

// 简写解包一个值
if let nickname {
	print("Hey, \(nickName)")
}
// 等同于
if let nickname = nickname {
	print("Hey, \(nickname)")
}

// 使用 ?? 操作符来提供一个默认值
let nickName: String? = nil
let fullName: String = "John Appleseed"
let informalGreeting = "Hi \(nickName ?? fullName)"

// switch
let vegetable = "red pepper"
switch vegetable {
case "celery":
    print("Add some raisins and make ants on a log.")
case "cucumber", "watercress":
    print("That would make a good tea sandwich.")
case let x where x.hasSuffix("pepper"):
    print("Is it a spicy \(x)?")
default:
    print("Everything tastes good in soup.")
}
// switch 默认不穿透

// 使用 for-in 来遍历字典，需要一对儿变量来表示每个键值对
let interestingNumbers = [
    "Prime": [2, 3, 5, 7, 11, 13],
    "Fibonacci": [1, 1, 2, 3, 5, 8],
    "Square": [1, 4, 9, 16, 25],
]
var largest = 0
for (_, numbers) in interestingNumbers {
    for number in numbers {
        if number > largest {
            largest = number
        }
    }
}
print(largest)
// 输出 "25"

// while
var n = 2
while n < 100 {
    n *= 2
}
print(n)

var m = 2
repeat {
    m *= 2
} while m < 100
print(m)

// 使用 ..< 来表示下标范围不包含上界
var total = 0
for i in 0..<4 {
	total += i
}
print(total)



// 使用 func 来声明一个函数，使用名字和参数来调用函数。使用 -> 来指定函数返回值的类型
func greet(person: String, day: String) -> String {
    return "Hello \(person), today is \(day)."
}
greet(person:"Bob", day: "Tuesday")

// 默认情况下，函数使用它们的参数名称作为它们参数的标签，在参数名称前可以自定义参数标签，或者使用 _ 表示不使用参数标签
func greet(_ person: String, on day: String) -> String {
    return "Hello \(person), today is \(day)."
}
greet("John", on: "Wednesday")

// 使用元组来生成复合值
func calculateStatistics(scores: [Int]) -> (min: Int, max: Int, sum: Int) {
    var min = scores[0]
    var max = scores[0]
    var sum = 0

    for score in scores {
        if score > max {
            max = score
        } else if score < min {
            min = score
        }
        sum += score
    }

    return (min, max, sum)
}
let statistics = calculateStatistics(scores:[5, 3, 100, 3, 9])
print(statistics.sum)
print(statistics.2)

// 函数可以嵌套
func returnFifteen() -> Int {
    var y = 10
    func add() {
        y += 5
    }
    add()
    return y
}
returnFifteen()

// 函数是第一等类型
// 作为另一个函数的返回值
func makeIncrementer() -> ((Int) -> Int) {
    func addOne(number: Int) -> Int {
        return 1 + number
    }
    return addOne
}
var increment = makeIncrementer()
increment(7)
// 当做参数
func hasAnyMatches(list: [Int], condition: (Int) -> Bool) -> Bool {
    for item in list {
        if condition(item) {
            return true
        }
    }
    return false
}
func lessThanTen(number: Int) -> Bool {
    return number < 10
}
var numbers = [20, 19, 7, 12]
hasAnyMatches(list: numbers, condition: lessThanTen)

// 使用 {} 来创建一个匿名闭包。使用 in 将参数和返回值类型的声明与闭包函数体进行分离
numbers.map({
    (number: Int) -> Int in
    let result = 3 * number
    return result
})

// 忽略参数，返回值。单个语句闭包会把它语句的值当做结果返回
let mappedNumbers = numbers.map({ number in 3 * number })
print(mappedNumbers)
// 通过参数位置而不是参数名字来引用参数
let sortedNumbers = numbers.sorted { $0 > $1 }
print(sortedNumbers)
// 当一个闭包作为最后一个参数传给一个函数的时候，它可以直接跟在圆括号后面
// 当一个闭包是传给函数的唯一参数，你可以完全忽略圆括号



// 使用 class 来创建一个类
class Shape {
    var numberOfSides = 0
    func simpleDescription() -> String {
        return "A shape with \(numberOfSides) sides."
    }
}
var shape = Shape()
shape.numberOfSides = 7
var shapeDescription = shape.simpleDescription()

// 使用 init 来创建一个构造器。
class NamedShape {
    var numberOfSides: Int = 0
    var name: String

    init(name: String) {
        self.name = name
    }

    func simpleDescription() -> String {
        return "A shape with \(numberOfSides) sides."
    }
}
// 使用 deinit 创建一个析构函数
// 子类的定义方法是在它们的类名后面加上父类的名字，用冒号分割
// 使用 override 重写父类方法
class Square: NamedShape {
    var sideLength: Double

    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
        numberOfSides = 4
    }

    func area() ->  Double {
        return sideLength * sideLength
    }

    override func simpleDescription() -> String {
        return "A square with sides of length \(sideLength)."
    }
}
let test = Square(sideLength: 5.2, name: "my test square")
test.area()
test.simpleDescription()

// 使用 getter 和 setter 的计算属性
// setter 中，新值的名字是 newValue，可以在 set 之后的圆括号中显式地设置一个名字
class EquilateralTriangle: NamedShape {
    var sideLength: Double = 0.0

    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
        numberOfSides = 3
    }

    var perimeter: Double {
        get {
            return 3.0 * sideLength
        }
        set {
            sideLength = newValue / 3.0
        }
    }

    override func simpleDescription() -> String {
        return "An equilateral triangle with sides of length \(sideLength)."
    }
}
var triangle = EquilateralTriangle(sideLength: 3.1, name: "a triangle")
print(triangle.perimeter)
triangle.perimeter = 9.9
print(triangle.sideLength)

// 使用 willSet 和 didSet，设置一个新值之前或者之后运行代码
class TriangleAndSquare {
    var triangle: EquilateralTriangle {
        willSet {
            square.sideLength = newValue.sideLength
        }
    }
    var square: Square {
        willSet {
            triangle.sideLength = newValue.sideLength
        }
    }
    init(size: Double, name: String) {
        square = Square(sideLength: size, name: name)
        triangle = EquilateralTriangle(sideLength: size, name: name)
    }
}
var triangleAndSquare = TriangleAndSquare(size: 10, name: "another test shape")
print(triangleAndSquare.square.sideLength)
print(triangleAndSquare.triangle.sideLength)
triangleAndSquare.square = Square(sideLength: 50, name: "larger square")
print(triangleAndSquare.triangle.sideLength)

// 可以在操作（比如方法、属性和子脚本）之前加 ?。如果 ? 之前的值是 nil，? 后面的东西都会被忽略，并且整个表达式返回 nil
let optionalSquare: Square? = Square(sideLength: 2.5, name: "optional square")
let sideLength = optionalSquare?.sideLength



// 使用 enum 来创建一个枚举，枚举可以包含方法
// 默认情况下，按照从 0 开始每次加 1 的方式为原始值进行赋值
// 使用 rawValue 属性来访问一个枚举成员的原始值
enum Rank: Int {
    case ace = 1
    case two, three, four, five, six, seven, eight, nine, ten
    case jack, queen, king
    func simpleDescription() -> String {
        switch self {
        case .ace:
            return "ace"
        case .jack:
            return "jack"
        case .queen:
            return "queen"
        case .king:
            return "king"
        default:
            return String(self.rawValue)
        }
    }
}
let ace = Rank.ace
let aceRawValue = ace.rawValue

// 使用 init?(rawValue:) 初始化构造器来从原始值创建一个枚举实例。如果存在与原始值相应的枚举成员就返回该枚举成员，否则就返回 nil
if let convertedRank = Rank(rawValue: 3) {
    let threeDescription = convertedRank.simpleDescription()
}

// 使用 struct 来创建一个结构体
struct Card {
    var rank: Rank
    var suit: Suit
    func simpleDescription() -> String {
        return "The \(rank.simpleDescription()) of \(suit.simpleDescription())"
    }
}
let threeOfSpades = Card(rank: .three, suit: .spades)
let threeOfSpadesDescription = threeOfSpades.simpleDescription()



// 并发性
// 使用 async 标记异步运行的函数
func fetchUserID(from server: String) async -> Int {
    if server == "primary" {
        return 97
    }
    return 501
}
// await 来标记对异步函数的调用
func fetchUsername(from server: String) async -> String {
    let userID = await fetchUserID(from: server)
    if userID == 501 {
        return "John Appleseed"
    }
    return "Guest"
}

// 使用 async let 来调用异步函数，并让其与其它异步函数并行运行。 使用 await 以使用该异步函数返回的值。
func connectUser(to server: String) async {
    async let userID = fetchUserID(from: server)
    async let username = fetchUsername(from: server)
    let greeting = await "Hello \(username), user ID \(userID)"
    print(greeting)
}
// 使用 Task 从同步代码中调用异步函数且不等待它们返回结果
Task {
	await connectUser(to: "primary")
}
//Prints "Hello Guest, user ID 97"



// 使用 protocol 来声明一个协议
protocol ExampleProtocol {
    var simpleDescription: String { get }
    mutating func adjust()
}
// 类、枚举和结构体都可以遵循协议
class SimpleClass: ExampleProtocol {
    var simpleDescription: String = "A very simple class."
    var anotherProperty: Int = 69105
    func adjust() {
        simpleDescription += "  Now 100% adjusted."
    }
}
var a = SimpleClass()
a.adjust()
let aDescription = a.simpleDescription

struct SimpleStructure: ExampleProtocol {
    var simpleDescription: String = "A simple structure"
    mutating func adjust() {
        simpleDescription += " (adjusted)"
    }
}
var b = SimpleStructure()
b.adjust()
let bDescription = b.simpleDescription
// 声明 SimpleStructure 时候 mutating 关键字用来标记一个会修改结构体的方法
// SimpleClass 的声明不需要标记任何方法，因为类中的方法通常可以修改类属性（类的性质）



// 使用采用 Error 协议的类型来表示错误
enum PrinterError: Error {
	case outOfPaper
	case noToner
	case onFire
}
// 使用 throw 来抛出一个错误
// 使用 throws 来表示一个可以抛出错误的函数
func send(job: Int, toPrinter printerName: String) throws -> String {
    if printerName == "Never Has Toner" {
        throw PrinterError.noToner
    }
    return "Job sent"
}
// 一种方式是使用 do-catch 来进行错误处理。在 do 代码块中，使用 try 来标记可以抛出错误的代码
// 除非你另外命名，否则错误会自动命名为 error
do {
    let printerResponse = try send(job: 1040, toPrinter: "Bi Sheng")
    print(printerResponse)
} catch {
    print(error)
}
// 可以使用多个 catch 块来处理特定的错误。参照 switch 中的 case 风格来写 catch
do {
    let printerResponse = try send(job: 1440, toPrinter: "Gutenberg")
    print(printerResponse)
} catch PrinterError.onFire {
    print("I'll just put this over here, with the rest of the fire.")
} catch let printerError as PrinterError {
    print("Printer error: \(printerError).")
} catch {
    print(error)
}

// 另一种处理错误的方式使用 try? 将结果转换为可选的。如果函数抛出错误，该错误会被抛弃并且结果为 nil
let printerSuccess = try? send(job: 1884, toPrinter: "Mergenthaler")
let printerFailure = try? send(job: 1885, toPrinter: "Never Has Toner")

// 使用 defer 代码块来表示在函数返回前，函数中最后执行的代码。无论函数是否会抛出错误，这段代码都将执行
var fridgeIsOpen = false
let fridgeContent = ["milk", "eggs", "leftovers"]

func fridgeContains(_ food: String) -> Bool {
	fridgeIsOpen = true
	defer {
		fridgeIsOpen = false
	}

	let result = fridgeContent.contains(food)
	return result
}
fridgeContains("banana")
print(fridgeIsOpen)



// 泛型
// 尖括号里写一个名字来创建一个泛型函数或者类型
func makeArray<Item>(repeating item: Item, numberOfTimes: Int) -> [Item] {
    var result: [Item] = []
    for _ in 0..<numberOfTimes {
        result.append(item)
    }
    return result
}
makeArray(repeating: "knock", numberOfTimes: 4)

// 重新实现 Swift 标准库中的可选类型
enum OptionalValue<Wrapped> {
    case none
    case some(Wrapped)
}
var possibleInteger: OptionalValue<Int> = .none
possibleInteger = .some(100)

// 在类型名后面使用 where 来指定对类型的一系列需求
func anyCommonElements<T: Sequence, U: Sequence>(_ lhs: T, _ rhs: U) -> Bool
    where T.Element: Equatable, T.Element == U.Element
{
    for lhsItem in lhs {
        for rhsItem in rhs {
            if lhsItem == rhsItem {
                return true
            }
        }
    }
    return false
}
anyCommonElements([1, 2, 3], [3])
```

[Swift 教程 | SwiftGG](https://gitbook.swiftgg.team/swift/swift-jiao-cheng)

```swift
// 类型别名
typealias AudioSample = UInt16

// 可选绑定
if let constantName = someOptional {
    statements
}

// 可以包含多个可选绑定或多个布尔条件在一个 if 语句中，只要使用逗号分开就行
// 下面的两个 if 语句是等效的
if let firstNumber = Int("4"), let secondNumber = Int("42"), firstNumber < secondNumber && secondNumber < 100 {
    print("\(firstNumber) < \(secondNumber) < 100")
}
// 输出“4 < 42 < 100”
if let firstNumber = Int("4") {
    if let secondNumber = Int("42") {
        if firstNumber < secondNumber && secondNumber < 100 {
            print("\(firstNumber) < \(secondNumber) < 100")
        }
    }
}
// 输出“4 < 42 < 100”

// 错误处理
func makeASandwich() throws {
    // ...
}

do {
    try makeASandwich()
    eatASandwich()
} catch SandwichError.outOfCleanDishes {
    washDishes()
} catch SandwichError.missingIngredients(let ingredients) {
    buyGroceries(ingredients)
}

// 断言
let age = -3
assert(age >= 0, "A person's age cannot be less than zero")
// 因为 age < 0，所以断言会触发

// 先决条件
// 在一个下标的实现里...
precondition(index > 0, "Index must be greater than zero.")

// 求余运算符
// 求余运算符（a % b）是计算 b 的多少倍刚刚好可以容入 a，返回多出来的那部分（余数）。
// 在对负数 b 求余时，b 的符号会被忽略。这意味着 a % b 和 a % -b 的结果是相同的
-9 % 4   // 等于 -1

// 比较运算符
// 两个元组的元素相同，且长度相同的话，元组就可以被比较
// 如果所有的值都相等，那么这一对元组我们就称它们是相等的
(1, "zebra") < (2, "apple")   // true，因为 1 小于 2
(3, "apple") < (3, "bird")    // true，因为 3 等于 3，但是 apple 小于 bird
(4, "dog") == (4, "dog")      // true，因为 4 等于 4，dog 等于 dog
// Swift 标准库只能比较七个以内元素的元组比较函数

// 区间运算符
1...5
1..<5
// 单侧区间
for name in names[2...] {
    print(name)
}
for name in names[..<2] {
    print(name)
}
// 不能遍历省略了初始值的单侧区间
// 可以遍历一个省略最终值的单侧区间；然而，由于这种区间无限延伸的特性，请保证你在循环里有一个结束循环的分支
// 可以查看一个单侧区间是否包含某个特定的值
let range = ...5
range.contains(7)   // false
range.contains(4)   // true
range.contains(-1)  // true

// 字符串
let singleLineString = "These are the same." // 等价
let multilineString = """
These are the same.
"""

// （\）作为续行符
let softWrappedQuotation = """
The White Rabbit put on his spectacles.  "Where shall I begin, \
please your Majesty?" he asked.

"Begin at the beginning," the King said gravely, "and go on \
till you come to the end; then stop."
"""

// 一个多行字符串字面量能够缩进来匹配周围的代码。关闭引号（"""）之前的空白字符串告诉 Swift 编译器其他各行多少空白字符串需要忽略

// 特殊字符：
// 转义字符 \0(空字符)、\\(反斜线)、(水平制表符)、(换行符)、(回车符)、\"(双引号)、\'(单引号)。
// Unicode 标量，写成 \u{n}(u 为小写)，其中 n 为任意一到八位十六进制数且可用的 Unicode 位码。
let wiseWords = "\"Imagination is more important than knowledge\" - Einstein"
// "Imagination is more important than knowledge" - Einstein
let dollarSign = "\u{24}"             // $，Unicode 标量 U+0024
let blackHeart = "\u{2665}"           // ♥，Unicode 标量 U+2665
let sparklingHeart = "\u{1F496}"      // 💖，Unicode 标量 U+1F496

// 由于多行字符串字面量使用了三个双引号，而不是一个，所以你可以在多行字符串字面量里直接使用双引号（"）而不必加上转义符（\）。要在多行字符串字面量中使用 """ 的话，就需要使用至少一个转义符（\）
let threeDoubleQuotes = """
Escaping the first quote \"""
Escaping all three quotes \"\"\"
"""

// 将字符串文字放在扩展分隔符中，这样字符串中的特殊字符将会被直接包含而非转义后的效果。将字符串放在引号（"）中并用数字符号（#）括起来
#"Line 1 \nLine 2"# // 不是给文字换行

// 如果需要字符串文字中字符的特殊效果，请匹配转义字符（\）后面添加与起始位置个数相匹配的 # 符。 例如，如果您的字符串是 #"Line 1 \nLine 2"# 并且您想要换行，则可以使用 #"Line 1 \#nLine 2"# 来代替。 同样，###"Line1 \###nLine2"### 也可以实现换行效果。
#"Line 1 \#nLine 2"# // 给文字换行
###"Line1 \###nLine2"### // 给文字换行
```
