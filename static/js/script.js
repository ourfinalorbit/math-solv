function compute(input) {

    input = "e^(2+2)(2)+2";

    /* render */
    function render() {

        render = input;

        /* replace operators */
        const replace = [
            ['*(', '('], 
        ];
        counter_1 = 0;
        while (counter_1 < 1) {
            if (render.includes(replace[counter_1][0])) {
                occurences = render.split(replace[counter_1][0]).length - 1;
                counter_2 = 0;
                while (counter_2 < occurences) {
                    render = render.replace(replace[counter_1][0], replace[counter_1][1]);
                    counter_2 = counter_2 + 1;
                }
            }
            counter_1 = counter_1 + 1;
        }            

        /* create fractions */
        if (render.includes('/')) {
            const array = render.split("/", 2);
            top = array[0];
            bot = array[1];
            render = "\\frac{" + array[0] + "}{" + array[1] + "}";
        }
        
    }
    
    /* evaluate expression */
    function evaluate() {

        evaluate = input;

        /* form exponent */
        check = "^";
        if (evaluate.includes(check)) {
            occurences = evaluate.split(check).length - 1;
            counter_2 = 0;
            split = evaluate.split(check);
            
            
            while (counter_2 < occurences) {
                base = bracketfinder_backward(split[counter_2]);
                exponent = bracketfinder_forward(split[counter_2 + 1]);
                split = evaluate.split(check);
                counter_2 = counter_2 + 1;
            }
        }
        /* replace operators with real values */
        check = "ln(";
        if (evaluate.includes(check)) {
            occurences = evaluate.split(check).length - 1;
            counter_2 = 0;
            split = evaluate.split(check);
            while (counter_2 < occurences) {
                interal_value = split[counter_2 + 1].split(")")[0];
                real_value = Math.log(interal_value);
                evaluate = evaluate.replace("ln(" + interal_value + ")", real_value);
                counter_2 = counter_2 + 1;
                console.log("ln()");
            }
        }
        check = "e";
        e = "2.71828182845904523536028747135266249775724709369995";
        if (evaluate.includes(check)) {
            occurences = evaluate.split(check).length - 1;
            counter_2 = 0;
            split = evaluate.split(check);
            while (counter_2 < occurences) {
                evaluate = evaluate.replace("e", e);
                counter_2 = counter_2 + 1;
                console.log("e");
            }
        }
        

        /* final calculation */
        console.log(evaluate);
        output = eval(evaluate);
        console.log(output);

    }

    function bracketfinder_forward(input) {
        console.log(input);

        length = input.length;
        counter_1 = 0;
        bracketnet = 0;
        output = "";
        while (counter_1 < length) {
            if (input[counter_1]=="(") {
                bracketnet = bracketnet + 1;
                output = output.concat(input[counter_1]);
            } else if (input[counter_1]==")") {
                bracketnet = bracketnet - 1;
                output = output.concat(input[counter_1]);
            } else if (bracketnet==0) {
                counter_1 = length;
            } else {
                output = output.concat(input[counter_1]);
            }
            counter_1 = counter_1 + 1;
        }

        console.log("bracket output: "+ output);

        return output;
    }

    function bracketfinder_backward(input) {

    }
    
    /* call render function */
    render.call();

    const latex = katex.renderToString(render, {
        throwOnError: false,
    });

     /* call evaluation function */
    evaluate.call();

    const rendered = katex.renderToString(input, {
        throwOnError: false,
    });

    

}
