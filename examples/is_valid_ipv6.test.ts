import { is_valid_ipv6, is_valid_ipv6_mask } from '../src';

// 测试示例
const testIpV6s = [
  'fe80::cd95:4a7b:7656:e3e5',
  '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
  '2001:db8:85a3:0:0:8a2e:370:7334',
  '2001:db8:85a3::8a2e:370:7334',
  '::1',
  '::',
  '2001:db8:85a3:0:0:8a2e:192.0.2.128',
  '2001:0db8:85a3:0000:0000:8a2e:0370:733g',
  '2001:0db8:85a3:0000:0000:8a2e:0370',
  '2001:0db8:85a3:0000:0000:8a2e:0370:7334:1234',
  '2001:0db8:85a3:0000:0000:8a2e:0370:7334:1234:5678',
  '2001:0db8:85a3:0000:0000:8a2e:0370:7334:1234:5678:9abc',
];

testIpV6s.forEach((ip) => {
  if (is_valid_ipv6(ip)) {
    console.log(`${ip} 是有效的IPv6地址`);
  } else {
    console.log(`${ip} 是无效的IPv6地址`);
  }
});

const testIpV6Mask = [
  '2001:db8:85a3::/64',
  '2001:db8:85a3::/128',
  '2001:db8:85a3::/0',
  '2001:db8:85a3::/129',
  '2001:db8:85a3::/64.1',
  '2001:db8:85a3::/64.1.1',
];
testIpV6Mask.forEach((ip) => {
  if (is_valid_ipv6_mask(ip)) {
    console.log(`${ip} 是有效的IPv6/掩码地址`);
  } else {
    console.log(`${ip} 是无效的IPv6/掩码地址`);
  }
});
