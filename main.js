var faqData = [
  {
    title: '前端是什么？',
    content: '前端包含但不止于：PC 网站、手机网站、手机 App、微信公众号、游戏、VR 内容等；心若大，前端岂止大。'
  },
  {
    title: '前端编程最容易学习？',
    content: 'HTML 易懂，CSS 次之，Javascript 深入，循序渐进学习；前端为可视化编程，编写代码即可见效果。'
  },
  {
    title: '课程适合人群？',
    content: '想进入 IT 编程工作的，或许您还在迷茫中的，或许此课程能帮到您；已在 IT 中，想学前端技术或尝试独立开发，或许此课程能让您熟悉。'
  },
  {
    title: '我英语不好，能学会吗？',
    content: '英语好固然能帮助学习，但不好也不能代表就学不了。编程大都使用的是编程专业英语，即使英语再好的人都是要把英语学习一番。词汇量不大，反复进行代码编写，自然会将这些英语记牢。'
  },
  {
    title: '课程多久学完？',
    content: '大概三个月左右。需要您上课专心学习，课下至少三倍时间的勤加练习；编程路上是需要不断学习前行的，本课程目的是让你踏足此行，掌握学习方法。'
  },
  {
    title: '学习中途落课了怎么办？',
    content: '中途耽误几天的话可以通过看视频同步完成老师的作业弥补进度，不会的可以随时问老师。'
  },
  {
    title: '是否可以免费重修呢？',
    content: '因学习中途落课或者学习效果不扎实等原因可以向教务老师申请重修或降级，本期学不会下期免费再学，直到学会为止！'
  },
  {
    title: '课程优势是什么？',
    content: '精心指导您打牢前端基础，掌握学习 IT 技能的方法；受予鱼，愿授以渔。模拟工作岗位，开展实战项目，课下作业督促指导；问题群内解答，针对个人情况单独指导; '
  },
  {
    title: '包推荐工作吗？',
    content: '原则：不推荐工作，不承诺待遇；始终相信好的工作是自己努力得来的。我会给你底气，我会给你自信。'
  }
];

var courseData = [
  {
    icon: 'icon-reshen',
    title:　'课前预热',
    content:　'个人资料介绍，IT 行业简析，前端岗位了解，网页示例预热'
  },
  {
    icon: 'icon-html',
    title:　'HTML',
    content:　'HTML 标签学习，学会如何查询手册'
  },
  {
    icon: 'icon-css',
    title:　'CSS',
    content:　'CSS 样式学习，各种常用布局，示例解析学习'
  },
  {
    icon: 'icon-js',
    title:　'Javascript',
    content:　'学会编程思想，掌握一门真正的编程语言；做一款小游戏。'
  },
  {
    icon:'icon-dom',
    title:　'Dom ',
    content:　'DOM 对象解析，结合 Javascript 语言完成'
  },
  {
    icon: 'icon-jquery',
    title:　'jQuery 与 JS 进阶',
    content:　'jQuery 为前端必学的库，包含了 Dom 操作、 Ajax、异步等众多知识点'
  },
  {
    icon: 'icon-bootstrap',
    title:　'Bootstrap',
    content:　'框架如其名，通过它的指引你会很容易做出一个漂亮的网站'
  },
  {
    icon: 'icon-gongju',
    title:　'前端技巧与工具',
    content:　'涉及与前端相关的更多技术知识，主要有 PS、Git、Node、Webpack、VSCode '
  },
  {
    icon: 'icon-mobile',
    title:　'移动项目实战',
    content:　'让你明白移动网站与 PC 网站的区别，一探微信公众号网站的究竟'
  },
  {
    icon: 'icon-pc',
    title:　'PC 项目',
    content:　'运用所学知识，团队协作完成一个真实的项目'
  },
  {
  icon:　'icon-work',
    title:　'工作相关',
    content:　'面试题讲解，如何应对人事的面试追问，offer 的挑选经验'
  },
  {
    icon: 'icon-xuexi',
    title:　'扩展学习',
    content:　'学习方法论，如何去上手前端最流行框架 Vue、React、React Native、小程序等；我们会带你了解服务端技术、数据库技术，让你在工作中能沟通无碍'
  }
];

function renderList(id, data) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var liEle = document.createElement('li');

    if (item.icon) {
      var iEle = document.createElement('i');
      iEle.setAttribute('class', 'iconfont ' + item.icon);
      liEle.appendChild(iEle);
    }

    var h3Ele = document.createElement('h3');
    h3Ele.appendChild(document.createTextNode(item.title));
    liEle.appendChild(h3Ele);

    var pEle = document.createElement('p');
    pEle.appendChild(document.createTextNode(item.content));
    liEle.appendChild(pEle);

    document.getElementById(id).appendChild(liEle);
  }
}

window.onload = function() {
  renderList('faqList', faqData);
  renderList('courseList', courseData);
}
