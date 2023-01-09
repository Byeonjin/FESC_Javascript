function rem(pxValue, base = 16){
  if((typeof(pxValue) != 'number' && typeof(pxValue) != 'string') || typeof(base) != 'number'){
    throw new Error('올바르지 않은 자료형의 인수가 입력되었습니다.')
  }

  const px = typeof(pxValue)=='string' ? parseInt(pxValue) : pxValue;

  return (px/base) + 'rem';
}

//rem 
console.assert(rem(20) === '1.25rem')
console.assert(rem('30px') === '1.875rem')
console.assert(rem('56px', 10) === '5.6rem')