https://github.com/vczero/React-Native-App
# 主要功能
通讯录
消息公告
内容管理

# 页面布局

首页:内容的一个分类--- 列表--拨打电话
公告:列表------详情
关于:类列表----表单

currentSelected:


# 首页
部门
人员
联系电话
邮箱

# 公告
标题：
内容：
时间：
作者：

# 关于
修改密码：
发布公告：
退出登录：

# action
action的定义:用来描述有事情发生
action的作用:用来将数据从应用传到store
# reducer
reducer的作用:根据action和旧的state来更新旧的state


# state:
## 首页
title:
list:[{
  department:""
}]

title:
list:[{
  member:
  department:
  tel:
  email:
}]
## 公告
title:
query:
list:[{
  title:"",
  time:"",
  member:""
}]

title:
content:"",
member:
time:

## 关于
title:
[{
  icon:
  text:
}]

## end
title:
activePage:
isBack:
backItem:{
  text:
  icon:
}


# action
## 首页
changePage:
lookDepartmentMember
## 公告
searchNotice
lookNoticeDetail

## 关于
modifyPassword
addContact
deleteContact
publishNotice

loginout



