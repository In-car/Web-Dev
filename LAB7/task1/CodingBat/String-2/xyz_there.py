def xyz_there(str):
    count = 0
    i=0
    for i in range(0,len(str)):
        if str[i:i+3] == "xyz":

            count=count+1
        elif str[i:i+4] == ".xyz":

            count=count-1
    return count != 0

