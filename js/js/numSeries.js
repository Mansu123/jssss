function calculate() {
    var values = document.getElementById('box1').value.split(" ");
    var sum = values.reduce(function(a, b) {return parseInt(a) + parseInt(b); });
    document.querySelector('#max').innerHTML = values.max();
    document.querySelector('#min').innerHTML = values.min();
    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#avg').innerHTML = sum / values.length;
    document.querySelector('#rev').innerHTML = values.reverse().join(',');
  }
  
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };