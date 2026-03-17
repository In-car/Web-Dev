a = []
for _ in range(int(input())):
    b = input()
    c = float(input())
    a.append([b, c])

d = sorted(list(set([x[1] for x in a])))[1]
e = sorted([x[0] for x in a if x[1] == d])

for i in e:
    print(i)