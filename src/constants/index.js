import cookies from 'js-cookie';
import configs from '../config';
import axios from 'axios';
class func{
  static utf16toEntities(str) {
    var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
    str = str.replace(patt, function(char) {
      var H, L, code;
      if (char.length === 2) {
        H = char.charCodeAt(0); // 取出高位
        L = char.charCodeAt(1); // 取出低位
        code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00; // 转换算法
        return '&#' + code + ';';
      } else {
        return char;
      }
    });
    return str;
  }
  static uncodeUtf16(str) {
    var reg = /\&#.*?;/g;
    var result = str.replace(reg, function(char) {
      var H, L, code;
      if (char.length == 9) {
        code = parseInt(char.match(/[0-9]+/g));
        H = Math.floor((code - 0x10000) / 0x400) + 0xd800;
        L = (code - 0x10000) % 0x400 + 0xdc00;
        return unescape('%u' + H.toString(16) + '%u' + L.toString(16));
      } else {
        return char;
      }
    });
    return result;
  }
}
export default func;
