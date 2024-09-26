function calc(n1, n2, op) {
    if (op != "+" && op != "-" && op != "*" && op != "/" && typerof(n1) != number && typerof(n2) != nunber) { return "Não identificado"; }

    switch (op){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 === 0){
                return "Não é possivel divisão por zero";
            } else { return n1/n2; }        
    }}
console.log(calc("8", 12, "+"));