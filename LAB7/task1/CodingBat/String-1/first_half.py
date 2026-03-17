def first_half(str):
    length = len(str)
    return str[:(int(length/2))]

print(first_half('WooHoo'))
print(first_half('HelloThere'))
print(first_half('abcdef'))