module.exports = function check(str, bracketsConfig) {
    // your solution
    let stack = [];
    let countSticks = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "|") countSticks++;
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0]) {
                if (bracketsConfig[j][0] == "|") {
                    if (countSticks % 2 == 1) stack.push(str[i]);
                }
                else stack.push(str[i]);       
            } else if (str[i] == bracketsConfig[j][1]) {
                if (stack.pop() != bracketsConfig[j][0]) return false;
                else continue;
            }
        }
    }
    return stack.length == 0;
};
