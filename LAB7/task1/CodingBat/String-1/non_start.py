def non_start(a, b):
    return a[1:len(a)] + b[1:len(b)]

print(non_start('Hello', 'There'))
print(non_start('java', 'code'))
print(non_start('shotl', 'java'))