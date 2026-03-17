def string_match(a, b):
  c = min(len(a), len(b))
  d = 0
  for i in range(c - 1):
    if a[i:i+2] == b[i:i+2]:
      d += 1
  return d