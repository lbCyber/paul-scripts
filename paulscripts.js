String.prototype.capitalize=function(aggressive) {
  let input = (aggressive) ?
    this.valueOf().split(" ") :
    this.valueOf().replace(/([\.\:\?\!])(\s+)/gi,"$1%space%").split("%space%")
  return input.map(a=>{
    a=a.split("")
    a[0]=a[0].toUpperCase()
    return a.join("")
  }).join(" ")
}

//  String.capitalize() function to easily capitalize the first letter of sentences (default unaggressive behaviour) in large strings. Does not manipulate original string. Providing boolean argument (.capitalize(true)) results in aggressive capitalization, where the first letter of every word is capitalized regardless of punctuation. (aka Jaden Smith case)
//  Usage:
//  let exampleString = "this is a test sentence. good grammar is important.";
//  exampleString.capitalize();
//    ( Returns: "This is a test sentence. Good grammar is important." )
//  exampleString.capitalize(true);
//    ( Returns: "This Is A Test Sentence. Good Grammar Is Important." )