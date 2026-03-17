def parrot_trouble(talking, hour):
  if talking:
    if hour>=7 and hour<=20: return False
    else: return True
  else: return False

print(parrot_trouble(True,6))