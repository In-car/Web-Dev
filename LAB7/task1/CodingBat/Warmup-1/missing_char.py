def missing_char(str, n):
  return str[:n]+str[n+1:]

a = missing_char('kitten', 1)
print(a)