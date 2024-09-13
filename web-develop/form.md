# 利用表单发送请求

大桥代码里使用表单来发送请求，查了一下，是要通过 POST 方法打开页面

```js
var myForm = function (url) {
  var form = $(
    '<form action="' + url + '" method="post" target="_blank">' + '<form>'
  );
  $('body').append(form);
  $(form).submit();
};
myForm(
  `http://account.alo7.com/api/v3/oauth/login_by_open_auth_token?app_key=${data.appKey}&open_auth_token=${data.token}`
);
```

[从 Form 表单到 Ajax | keqingrong.cn](https://keqingrong.cn/blog/2020-06-27-from-forms-to-ajax/)
