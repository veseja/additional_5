module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 == 1) return false;
    else 
    {
        var check = [];
        for (var i = 0; i < bracketsConfig.length; i++)
        {
            var pair = bracketsConfig[i];
            var near = pair[0] + pair[1];
            check[i] = near;
        }
        for (var i = 0; i < (str.length * 18) ; i++)
        {
            for (var j = 0; j < check.length; j++)
            {
                str = str.replace(check[j], "")
            }
        }
        if (str.length > 0) return false;
        else return true;
    }

}
