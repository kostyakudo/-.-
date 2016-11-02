var Sal = {

    'vasya': 220,
    'jenya': 340,
    'gena': 5340
};
var sum = 0;
var max = 0;
for (var ind in Sal) {
    sum += Sal[ind];
    if (max < Sal[ind]) {
        max = Sal[ind];
        var name = ind;
    }
    else{name='pysto'}
}
document.write(sum);
document.write(name);