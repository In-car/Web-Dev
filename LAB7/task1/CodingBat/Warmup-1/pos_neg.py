def pos_neg(a, b, c):
  if c:
    return a < 0 and b < 0
  return (a < 0 and b > 0) or (a > 0 and b < 0)