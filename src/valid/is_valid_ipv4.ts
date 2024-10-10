import reg from '../regex';
export function is_valid_ipv4(ip: string) {
  const regex = reg.ipv4;
  return regex.test(ip);
}

export function is_valid_ipv4_mask(ip: string) {
  const regex = reg.ipv4Mask;
  return regex.test(ip);
}
