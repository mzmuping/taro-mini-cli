const path = require("path");
const ci = require("miniprogram-ci");

const appId = "wx62de9f4eda0a8802";

console.log(process.argv);

/**
 * 编译设置
 * 配置: https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html#%E7%BC%96%E8%AF%91%E8%AE%BE%E7%BD%AE
 */
const settingParams = {
  es6: true,
  es7: true,
  minifyJS: true,
  autoPrefixWXSS: true
};
const privateKeyPath = path.resolve(__dirname, `./key/private.${appId}.key`);
const projectPath = path.resolve(__dirname);
const qrcodeOutputDest = path.resolve(__dirname, "./view_qr/qr.jpg");
//项目对象
const projectParams = {
  appid: appId,
  type: "miniProgram",
  projectPath: projectPath,
  privateKeyPath: privateKeyPath,
  ignores: ["node_modules/**/*", "yarn.lock", "package-lock.json", ".*"]
};

const project = new ci.Project(projectParams);

(async () => {
  const uploadResult = await ci.upload({
    project,
    version: "1.1.1",
    desc: "hello",
    setting: settingParams
    // onProgressUpdate: console.log
  });
  const previewResult = await ci.preview({
    project,
    desc: "hello", // 此备注将显示在“小程序助手”开发版列表中
    setting: settingParams,
    qrcodeFormat: "image",
    qrcodeOutputDest: qrcodeOutputDest,
    // onProgressUpdate: console.log,
    pagePath: "pages/index/index" // 预览页面
    // searchQuery: 'a=1&b=2',  // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`
  });
  console.log(previewResult);
  console.log(uploadResult);
})();
