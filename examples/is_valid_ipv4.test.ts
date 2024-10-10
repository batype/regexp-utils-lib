import { is_valid_ipv4, is_valid_ipv4_mask } from '../src';
// 测试示例
const testIps = [
  '127.0.0.1',
  '192.168.1.1',
  '10.0.0.1',
  '255.255.255.255',
  '0.0.0.0',
  '256.0.0.1',
  '192.168.1',
  '192.168.1.1.1',
  '192.168.1.',
  '192.168.1.a',
];

testIps.forEach((ip) => {
  if (is_valid_ipv4(ip)) {
    console.log(`${ip} 是有效的IPv4地址`);
  } else {
    console.log(`${ip} 是无效的IPv4地址`);
  }
});

const testIpsMask = [
  '192.168.1.0/24',
  '192.168.1.0/16',
  '192.168.1.0/8',
  '192.168.1.0/32',
  '192.168.1.0/0',
  '192.168.1.0/33',
  '192.168.1.0/24.1',
  '192.168.1.0/24.1.1',
];

testIpsMask.forEach((ip) => {
  if (is_valid_ipv4_mask(ip)) {
    console.log(`${ip} 是有效的IPv4/掩码地址`);
  } else {
    console.log(`${ip} 是无效的IPv4/掩码地址`);
  }
});
