def sum67(a):
  b = 0
  c = True
  for i in a:
    if i == 6:
      c = False
    if c:
      b += i
    if i == 7:
      c = True
  return b