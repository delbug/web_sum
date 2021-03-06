---
title: 05-mobileweb-响应式布局
date: 2020-06-15
tags: 
- 移动web
categories: 
- 移动web
description: true
publish: true

---

# 响应式布局

## 布局类别介绍

> ### 固定网页布局
>
> ```
> 通常设置一个固定的宽度,以px为单位,常见与PC端页面
> ```
>
> ### 流式布局
>
> ```
> 为网页设置一个相对宽度,通常以百分比为单位.
> ```
>
> ### 响应式布局
>
> ```
> 通过检测设备信息,决定布局方式,一般通过检测设备的宽度.
> ```
>
> ### 栅格化布局
>
> ```
> 将网页人为的划分为均等的长度,然后排版布局,通常以百分比为单位
> ```

## 响应式布局

> ### 实现方式
>
> ```
> 一个网页,需要在不同设备上正常显示,可以利用媒体查询的方式,检测不同设备,设置不同的CSS代码实现.
> ```
>
> ### 响应式布局核心
>
> ```
> 检测不同设备宽度
> ```
>
> ### 设备屏幕大小一般尺寸
>
> ```
> 大屏幕:  大于等于1200px(min-width: 1200px)   PC端
> 
> 默认:	   小于等于980px(max-width: 980px)
> 
> 平板:    大于等于768px(min-width: 768px) 
> 
> 手机:    小于等于480px(max-width: 414px)
> ```
>
> ### 响应式布局对应的条件设置
>
> ```css
> @media only screen and (min-width: 1200px) {}
> 
> @media only screen and (max-width: 980px) {}
> 
> @media only screen and (min-width: 768px) {}
> 
> @media only screen and (max-width: 480px) {}
> ```

## 微金所案例

## CSS框架

```css
随着Web应用变的越来越复杂，在大量的开发过程中我们发现有许多功能模块非常相似，
比如轮播图、分页、选项卡、导航栏等，开发中往往会把这些具有通用性的功能模块进行一系列封装，
使之成为一个个组件应用到项目中，可以极大的节约开发成本，将这些通用的组件缩合到一起就形成了前端框架.

总结:
	CSS框架就是对CSS相同功能的整体封装.方便使用.
```

## 框架介绍

> #### Amaze UI(了解)[ 妹子UI ]
>
> ```
> http://amazeui.org/
> ```
>
> #### Framework7(了解) 
>
> ```
> http://framework7.taobao.org/
> ```
>
> #### Bootstrap[后天讲]
>
> - ##### 介绍
>
> - ##### 下载
>
> - ##### 使用

```
easy UI
MinNi UI
```

