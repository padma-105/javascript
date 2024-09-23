//task-1
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
// output:
/**
 * 
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 * 10
 */
//task-2
for (var i = 1; i <= 10; i++) {
    console.log("5" + "*" + i + "=" + (5 * i));
}
//output:
/**
 *  5*1=5
 *  5*2=10
 *  5*3=15
 *  5*4=20
 *  5*5=25
 *  5*6=30
 *  5*7=35
 *  5*8=40
 *  5*9=45
 *  5*10=50
 */
//task-2
var x = 0;
for (var i = 1; i <= 10; i++) {
    x = x + i;
//output:
    /**
     * sum of first 10 natural numbers: 55
     */
}
console.log("sum of first 10 natural numbers: " + x);

//task-4
for (var i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
// output:
/**
 *
 * 3
 * 6
 * 9
 * 12
 * 15
 * 18
 * 24
 * 17
 * 30
 */
//task-5
for (var i = 1; i <= 10; i++) {
    console.log(`square of ${i}=${i * i}`);
}
//output:
/**
 * square of 1=1
 * square of 2=4
 * square of 3=9
 * square of 4=16
 * square of 5=25
 * square of 6=36
 * square of 7=49
 * square of 8=64
 * square of 9=81;
 * square of 10=100
 */