/**
 * Created by kmenne on 11/14/15.
 */
var validateInput = function(userNumber) {
    if (typeof(userNumber) === "number") {
        return (userNumber >= 1)
    } else {
        return false
    }
};