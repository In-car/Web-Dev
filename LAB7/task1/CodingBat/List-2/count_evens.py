def count_evens(a):
  b = 0
  for i in a:
    if i % 2 == 0:
      b += 1
  return b