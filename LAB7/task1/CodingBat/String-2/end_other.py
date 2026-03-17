def end_other(a, b):
    if len(a)>len(b):
        return b.lower() in a.lower() and a[-1].lower() == b[-1].lower()
    else: return a.lower() in b.lower() and a[-1].lower() == b[-1].lower()


print(end_other("AbC","HiaBc"))