function fibonacci(n) {
    var fibonacci = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci
}
var result = fibonacci(15);
console.log(result);