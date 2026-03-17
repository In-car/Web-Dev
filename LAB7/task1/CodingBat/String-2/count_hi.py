def count_hi(str):
    count = 0
    i=0
    while i<=len(str)-2:
        if str[i:i+2] == "hi":
            count = count+1
        i=i+1
    return count


print(count_hi("hihi"))