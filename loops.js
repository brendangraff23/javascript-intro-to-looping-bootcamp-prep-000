function forLoop(array)
{
  for(var i = 0; i < 25; i++)
  {
    if(i===1)
    {
      array[i] = 'I am 1 strange loop';
    } else
    {
      `I am ${i} strange loops`;
    }
  }
}