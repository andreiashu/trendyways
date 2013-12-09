/**
 * @description Returns a vector containing the difference of the parameters.
 * @param {array} series1 first values array
 * @param {array} series2 second values array
 * @return {array} series1 - series2
 */
diffVectors = function (series1, series2)
{
  var size = max([series1.length, series2.length])
  var result = [];
  var s1Size = series1.length;
  var s2Size = series2.length;
  for (var i = 0; i < size; i++)
  {
    var itemS1 = 0;
    var itemS2 = 0;
    if (s1Size > i)
    {
      itemS1 = series1[i];
    }
    if (s2Size > i)
    {
      itemS2 = series2[i];
    }
    result.push (itemS1 - itemS2);
  }
  return result;
}

////////////////////////////////////////////////////////

/**
 * @description Returns a vector to the 2nd power
 * @param {array} serie values array
 * @return {array} values array ^ 2
 */
powVector = function (serie) 
{
  var result = [];
  pow = function (x) { 
    result.push (Math.pow(x, 2)); 
  };
  serie.forEach (pow);
  return result;
}

////////////////////////////////////////////////////////

/**
 * @description Returns the sum of all elements in a vector
 * @param {array} vector values array
 * @returns {value} the sum of all elements
 */
sumVector = function (vector)
{
  var result = 0;
  sum = function (x) { result += x; }
  vector.forEach (sum);
  return result;
}

////////////////////////////////////////////////////////

/**
 * @description Returns the average of the sum of all vector elements
 * @param {array} vector values array
 * @returns {value} the average of the all elements
 */
avgVector = function (vector)
{
  var result = sumVector (vector);
  if (!vector.length)
    return 0;
  else
    return result / vector.length;
}

////////////////////////////////////////////////////////

/**
 * @description Returns the vector containing absolutes values of the input
 * @param {array} vector values array
 * @return {array} the absolute values of the given array
 */
absVector = function (vector)
{
  var result = [];
  vector.forEach (function ab(x) 
  {
    result.push(Math.abs(x));
  });
  return result;
}

////////////////////////////////////////////////////////

/**
 * @description Returns the values of the first vector divided by the second
 * @param {array} v1 values array
 * @param {array} v2 values array
 * @return {array} v1 / v2
 */
divVector = function (v1, v2)
{
  var result = [];
  for (var i = 0; i < v1.length; i++)
  {
    result.push (v1[i] / v2[i]);
  }
  return result;
}
