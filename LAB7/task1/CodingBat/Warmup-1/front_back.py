def front_back(a):
  if len(a) <= 1:
    return a
  b = a[0]
  c = a[-1]
  d = a[1:-1]
  return c + d + b