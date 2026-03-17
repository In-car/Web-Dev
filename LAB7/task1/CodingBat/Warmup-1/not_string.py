def not_string(a):
  if a[:3] == "not":
    return a
  return "not " + a