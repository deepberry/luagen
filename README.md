# LuaGen v1

## 导入数据

在左侧拖拽或点击导入表格文件。
表格应包含一个表头，代表各项控制参数、条件参数、返回参数。

-   控制参数：用于分组，映射名称使用$作为开头
-   条件参数：作为条件分支判断
-   返回参数：作为函数返回值，映射名称使用\_作为开头

## 调整参数

### 参数类型

#### A.句柄

默认会自动将第一个列作为句柄，最后一个列作为返回值。  
通常：
例如像`设备`、`判断开始时间（时）`、`判断终止时间（时）`应作为句柄

#### B.返回

例如`动作（百分比%）`、`动作（秒）`应作为返回值

#### C.条件

其它作为条件参数。

### 参数排序

可在优先级区域进行拖拽排序，以改变条件参数的判断优先级。

## 生成代码

点击生成代码进行生成  
点击一键复制按钮复制当前 tab 的内容  
当修改了参数名或调整了排序时，需自行点击【重新生成】按钮。
