import sympy

def simplify_expression(expression):
    expr = sympy.parse_expr(expression)
    simplified_expr = sympy.simplify(expr)
    simplified_expr = sympy.factor(expr)
    return simplified_expr

expr = "2+2+π+cos(2x/)"
print(simplify_expression(expr))