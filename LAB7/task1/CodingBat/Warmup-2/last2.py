def last2(a):
  if len(a) < 2:
    return 0
  b = a[-2:]
  c = 0
  for i in range(len(a) - 2):
    if a[i:i+2] == b:
      c += 1
  return c