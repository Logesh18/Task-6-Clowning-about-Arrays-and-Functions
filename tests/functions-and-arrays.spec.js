describe('Clowning About Arrays And Functions',()=>{
  describe('Finding Greatest Numbers',()=>
       it('Test case - 1',()=>{
            //arrange
            //act
            //assert
            expect(greatestOfTwoNumbers).toBeDefined();
            expect(greatestOfTwoNumbers(1,2)).toBe(2)
            expect(greatestOfTwoNumbers(1,1)).toBe(1)
            expect(greatestOfTwoNumbers(2,1)).toBe(2)
       })     
  ),
  /********************************/
  describe('Finding Lengthy Word',()=>
       it('Test case - 1',()=>{
            expect(findScaryWord).toBeDefined();
            expect(findScaryWord(['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony','LourdhAntoni'])).toBe('LourdhAntony')
            expect(findScaryWord(['George', 'Alice', 'Alex', 'John', 'Infanta', 'Xavior', 'LourdhAntony'])).toBe('LourdhAntony')
            expect(findScaryWord([])).toBe('Empty Array')
        })
  )
  /********************************/
  describe('Net Price',()=>
        it('Test case - 1',()=>{
            expect(netPrice).toBeDefined();
            expect(netPrice([200, 120, 100, 108, 135, 162, 25, 170, 80, 110])).toBe(1210)
            expect(netPrice([])).toBe(0)
        })
  ),
  /********************************/
  describe('Generic Sum',()=>
        it('Test case - 1',()=>{
            expect(sumOfArray).toBeDefined();
            expect(sumOfArray( [63, 122, 'Audi', 61, true, 'Volvo', '20', 'Lamborghini', 38, 156])).toBe(463)
            expect(sumOfArray([])).toBe(0)
        })
  ),
  /********************************/
  describe('Midpoint',()=>
        it('Test case - 1',()=>{
            expect(midpoint).toBeDefined();
            expect(midpoint( [200, 120, 100, 108, 135, 162, 25, 170, 80, 110])).toBe(121)
        })
  ),
  /********************************/
  describe('Array of numbers',()=>
        it('Test case - 1',()=>{
            expect(midPointOfLevels).toBeDefined();
            expect(midPointOfLevels( [22, 16, 9, 10, 7, 14, 11, 9])).toBe(12.25)
        })
  ),
  /**********************************/
  describe('Array of strings',()=>
        it('Test case - 1',()=>{
            expect(averageWordLength).toBeDefined();
            expect(averageWordLength( [ 'bread','jam','milk', 'egg','flour', 'oil','rice','coffee powder','sugar', 'salt'])).toBe(4.9)
        })
  ),
  /**********************************/
  describe('A Generic Average',()=>
        it('Test case - 1',()=>{
            expect(genericavg).toBeDefined();
            expect(genericavg( [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156])).toBe(46.3)
        })
  ),
  /**********************************/
   describe('Unique arrays ',()=>
   it('Test case - 1',()=>{
       expect(uniqueArray).toBeDefined();
       expect(uniqueArray( [ 'bread', 'jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt','egg', 'flour'])).toEqual(["bread", "jam", "milk", "egg", "flour", "oil", "rice", "coffee powder", "sugar", "salt"])
   })
  ),
  /*********************************/
  describe('Find Element',()=>
      it('Test case - 1',()=>{
          expect(searchElement).toBeDefined();
          expect(searchElement( [ 'door', 'window','ceiling','roof','plinth','tiles','ceiling','flooring'],'tiles')).toBe("true")
      })
  ),
  /******************************* */
  describe('Count repeated elements ',()=>
      it('Test case - 1',()=>{
          expect(howManyTimesElementRepeated).toBeDefined();
          expect(howManyTimesElementRepeated([ 'machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience','matter'],'matter')).toBe(4)
      })
  ),
  /******************************** */
  describe('Product of adjacent numbers',()=>
      it('Test case - 1',()=>{
          expect(maximumProduct).toBeDefined();
          expect(maximumProduct([[ 1, 2, 3, 4, 5] ,[ 1, 25, 3, 4, 5] ,[ 1, 20, 3, 4, 5] ,[ 1, 20, 3, 4, 5] ,[ 1, 4, 3, 4, 5] ])).toBe(40000)
      })
  ),
   /******************************** */
  describe('Product of adjacent numbers',()=>
      it('Test case - 1',()=>{
          expect(maximumProductOfDiagonals).toBeDefined();
          expect(maximumProductOfDiagonals( [[ 1, 2, 3, 4, 5] ,[ 1, 25, 3, 4, 5] ,[ 1, 20, 3, 4, 5] ,[ 1, 20, 3, 4, 5] ,[ 1, 4, 3, 4, 5] ])).toBe(1500)
      })
  )
})
