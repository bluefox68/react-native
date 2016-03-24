# 参考文章
https://github.com/vczero/React-Native-App
http://www.tuicool.com/articles/7FZreu2

# 主要功能
通讯录
消息公告
内容管理

# 页面布局
首页:内容的一个分类--- 列表--拨打电话
公告:列表------详情
关于:类列表----表单

# 页面详细分析
## 首页
部门
人员
联系电话
邮箱

## 公告
标题：
内容：
时间：
作者：

## 关于
修改密码：
发布公告：
退出登录：

# state结构:
pageVisibilityFilter:"",
backBtnVisibilityFilter:""
backItem:{
  text:''
  icon:''
},
data:[{
  id:"home",
  title:"Home",
  data:[{
    id:"",
    department:"",
    member:[{
      id:""
      author:
      tel:
      email:
    }]
  }]
},{
  id:"notice",
  title:"Notice",
  data:{
    noticeVisibilityFilter:"",
    list:[{
      id:"",
      title:"",
      author:"",
      time:"",
      content:""
    }]
  }
},{
  id:"about",
  title:"About",
  data:[{
    icon:
    text:
  }]
}]

# action内容
## 首页
changePage:
lookDepartmentMember
## 公告
searchNotice
lookNoticeDetail

## 关于
modifyPassword
deleteContact
addContact
publishNotice

loginout

初始化
点击







