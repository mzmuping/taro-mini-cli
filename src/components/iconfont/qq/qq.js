Component({
  properties: {
    // bijijilu | xiaoxizhongxin | fensiliebiao | 31wode | tizhong | xiangji1 | roundclose | gou | qushi | fenxiang | duigou | aixin | qitalaji-chongwufenbian | yaowei | jiahao | gou-shi | wancan | wucan | zaocan | shuidi | a-50-62_fuzhi-04 | nvsheng | xingbienan | xiajiantou | guanbi1 | jianpanshanchu | youjiantou | jilu1 | bianji | xiangyoujiantou | record | jilu
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * qq.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    svgSize: 18 / 750 * qq.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
});
