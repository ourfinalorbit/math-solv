import math

def inside(start): # returns the contents a function (such as ln, sin, cos, tan, etc)

    inner = []
    inner.append(start)
    bracket_boo = False 
    bracket_inc = 1
    while bracket_boo == False:

        inner.append(inner[bracket_inc - 1].split("(", 1)[1])

        # input(str(inner) + "  " + str(bracket_inc))

        if "(" in inner[bracket_inc]:

            bracket_inc = bracket_inc + 1 

        else: 

            bracketless = inner[bracket_inc].split(")")[0]

            exponentarray = bracketless.split("^")

            bracket_boo = True

def special_functions(start):
    start 

def exponents(start):
    start = start.replace("^", "**")
    return start

def bracket_mult(start):

    acceptance = ["+","-","/","*","^"]

    start = start.split("(")
    finished = ""

    for item in start[:-1]: 
        if item[-1] not in acceptance: 
            finished = finished + item + "*("

    finished = finished + start[-1]

    return finished 

### RENDER A LATEX ###

### EXECUTE ###

def execute(command,start):

    start = start

    if start.isalnum() == True: 
        if "sin" in start: print("hello")

    # check if contains special functions    
    if start.isalnum() == True: special_functions(start) 

    # check for exponents (a^b)
    if "^" in start: 
        start = exponents(start) 

    print(start)

    # check for values back to back with brackets (not *)
    if "(" in start: 
        start = bracket_mult(start)

    print(start)


    try: 
        end = eval(start)
        # print(end)
    except:
        end = ""
        # print(start)

    return str(end)

# execute("2^(2+2)")