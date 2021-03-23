function findMinMax() {
    let array = [50, 60, 20, 80, 10, 30];
    var minValue = Math.max(...array);
    var maxValue = Math.min(...array);
    document.querySelector('.min').textContent = minValue;
    document.querySelector('.max').textContent = maxValue;

}