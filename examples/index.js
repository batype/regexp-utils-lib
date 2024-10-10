import reg from '../src/regex';

const test = (str, reg) => {
  return new RegExp(reg).test(str);
};
console.log('-----邮箱-----');
console.log('test', test('test', reg.mail));
console.log('test@batype.com', test('test@batype.com', reg.mail));
console.log('test@batype', test('test@batype', reg.mail));
console.log('');
console.log('-----手机号-----');
console.log('123', test('123', reg.phone));
console.log('12345678910', test('12345678910', reg.phone));
console.log('123456789120', test('123456789120', reg.phone));
console.log('18309151367', test('18309151367', reg.phone));
console.log('');
console.log('-----验证码-----');
console.log('123456', test('123456', reg.code));
console.log('1234567', test('1234567', reg.code));
console.log('abc4567', test('abc4567', reg.code));
console.log('abc456', test('abc456', reg.code));
console.log('');
console.log('-----昵称-----');
console.log('123456', test('123456', reg.nickname));
console.log('abc456', test('abc456', reg.nickname));
console.log('昵称', test('昵称', reg.nickname));
console.log('昵称_abc123', test('昵称_abc123', reg.nickname));
console.log('昵称——_abc123', test('昵称——_abc123', reg.nickname));
console.log('昵称—；’！#', test('昵称—；’！#', reg.nickname));
console.log('');
console.log('-----身份证-----');
console.log('123456789', test('123456789', reg.idCard));
console.log('6105281991010130251', test('6105281991010130251', reg.idCard));
console.log('610528199101013025', test('610528199101013025', reg.idCard));
console.log('610528199121415025', test('610528199121415025', reg.idCard));
console.log('61052819910101302X', test('61052819910101302X', reg.idCard));
console.log('');
console.log('-----域名-----');
console.log('http://www.baidu.com', test('http://www.baidu.com', reg.domain));
console.log('https://www.baidu.com', test('https://www.baidu.com', reg.domain));
console.log('www.baidu.com', test('www.baidu.com', reg.domain));
console.log('baidu.com', test('baidu.com', reg.domain));
console.log('baidu', test('baidu', reg.domain));
console.log('');

function is_valid_url(url) {
  // 匹配结果
  const match = url.match(reg.domain);

  if (match) {
    // 如果匹配成功，返回匹配的协议和域名部分
    const protocol = match[1]; // 可能为空
    const domain = match[2];
    return { valid: true, protocol, domain };
  } else {
    return { valid: false };
  }
}

// 测试示例
const testUrls = [
  'http://example.com',
  'https://subdomain.example.com',
  'http://my-domain.com/path/to/resource',
  'https://xn--bcher-kva.de',
  'example.com',
  'http:///example.com',
  'http://example..com',
  'http://-example.com',
  'http://example-.com',
  'http://example.c',
];

testUrls.forEach((url) => {
  const result = is_valid_url(url);
  if (result.valid) {
    console.log(`${url} 是有效的URL`);
    if (result.protocol) {
      console.log(`  协议: ${result.protocol}`);
    }
    console.log(`  域名: ${result.domain}`);
  } else {
    console.log(`${url} 是无效的URL`);
  }
});
