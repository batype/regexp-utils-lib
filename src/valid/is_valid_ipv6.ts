import reg from '../regex';

function is_valid_ipv6(ip: string) {
  const regex = reg.ipv6;
  return regex.test(ip);
}

function is_valid_ipv6_mask(ip: string) {
  const regex = reg.ipv6Mask;
  return regex.test(ip);
}

export { is_valid_ipv6, is_valid_ipv6_mask };
