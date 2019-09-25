module.exports = function check(str, bracketsConfig) {
    let code = str.split(''),
        cloneInArr = false,
        stack = [],
        openTag = bracketsConfig.map((cur) => cur[0]),
        closeTag = bracketsConfig.map((cur) => cur[1]);

    code.map((cur, index) => {
        if (openTag.includes(cur)) {

            if (closeTag.includes(cur)) {
                cloneInArr = true;
            }

            if (cloneInArr && closeTag.indexOf(cur) === openTag.indexOf(stack[stack.length-1])) {
                cloneInArr = false;
                stack.pop();
            } else {
                stack.push(cur);
            }

        } else if (closeTag.indexOf(cur) === openTag.indexOf(stack[stack.length-1])){

            stack.pop();

        } else {

            stack.push(cur);

        }
    });

    return !stack.length > 0;
}
