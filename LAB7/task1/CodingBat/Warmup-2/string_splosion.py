def string_splosion(a):
  b = ""
  for i in range(len(a) + 1):
    b += a[:i]
  return b