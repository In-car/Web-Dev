def count_code(str):
    count = 0
    i=0
    while i<=len(str)-4:
        if str[i:i+2] == "co" and str[i+3] == "e":
            count = count+1
        i=i+1
    return count

print(count_code("abbacodcodeeee"))