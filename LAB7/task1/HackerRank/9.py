n = int(input())
a = map(int, input().split())
b = sorted(list(set(a)))
print(b[-2])