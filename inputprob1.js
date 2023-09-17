process.stdin.resume();
    var input_stdin = "";
    var input_stdin_array = "";
    var input_currentline = 0;

process.stdin.on('data', function (data) 
{input_stdin += data;
});

 process.stdin.on('end', function () {
 input_stdin_array = input_stdin.split("\n");
main();
});

function readLine() {
 return input_stdin_array[input_currentline++]; }
 function main() {
let num = Number(readLine()) ;
console.log(num);
 }