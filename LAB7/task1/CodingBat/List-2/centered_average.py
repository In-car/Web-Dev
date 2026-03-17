def centered_average(a):
  a.sort()
  b = a[1:-1]
  return sum(b) // len(b)