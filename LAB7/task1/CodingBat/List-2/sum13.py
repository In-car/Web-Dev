def sum13(a):
  b = 0
  i = 0
  while i < len(a):
    if a[i] == 13:
      i += 2
    else:
      b += a[i]
      i += 1
  return b