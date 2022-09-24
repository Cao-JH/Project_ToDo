Todo
### 2022.9.22 计划
1. 主页美化，加入一定的修饰
2. 新窗口处理顶部与内容排版
3. 解决让同一个文章的窗口只能开一个（尝试着去做）
4. 主页左上角添加功能

#### 2022.9.23 完成
1. 新窗口中的样式大体确定
2. 新窗口处理顶部完成

### 2022.9.23 计划
1. 解决让同一个文章的窗口只能开一个（尝试着去做）
2. 完善todolist
3. 主页美化，加入一定的修饰
4. 主页左上角添加功能

##### 内容处理
> 决定使用 v-md-editor 插件
1. 安装插件 `npm i @kangc/v-md-editor@next -S`
2. 注册组件
```js
    import VueMarkdownEditor from '@kangc/v-md-editor';
    import '@kangc/v-md-editor/lib/style/base-editor.css';
    import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
    import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

    import Prism from 'prismjs';

    VueMarkdownEditor.use(vuepressTheme, {
    Prism,
    });
```
3. 使用组件
`<v-md-editor v-model="text" height="400px"></v-md-editor>`