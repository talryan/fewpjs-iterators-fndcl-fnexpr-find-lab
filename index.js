const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let win = array.find( ({result}) => result === "W")
   if (win){
      return win.year
     }else {
       return undefined
      }

}