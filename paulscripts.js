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

Number.prototype.humanReadable=function(){
  const t=[[31536000000,"millennium",0],[3153600000,"century",0],[31536000,"year",0],[86400,"day",0],[3600,"hour",0],[60,"minute",0],[1,"second",0]]
  let tot=this.valueOf()
  let str=""
  t.forEach((v,k)=>{
    let val=Math.floor(s/v[0])
    v[2]=val
    s-=val*v[0]
    if (val!==1){
      if (k==0){
        v[1]="millennia"
      } else if (k==1){
        v[1]="centuries"
      } else {
        v[1]+="s"
      }
    }
  })
  const filt=t.filter(v=>v[2]!==0)
  filt.forEach((v,k)=>{
    if (k==filt.length - 1){
      str+=`${v[2]} ${v[1]}`
    } else if (k==filt.length - 2){
      str+=`${v[2]} ${v[1]} and `
    } else {
      str+=`${v[2]} ${v[1]}, `
    }
  })
  return tot==0?`now`:str
}
Number.prototype.toRoman=function(){
  const lib=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]]
  let res=[]
  let v=this.valueOf()
  if (Number.isInteger(v)){
    lib.forEach(val=>{
      while (Math.floor(v/val[0])>0){
        res.push(val[1])
        v-=val[0]
      }
    })
    return (res.join(""))
  } else {
    return this.valueOf()
  }
}
String.prototype.fromRoman=function(){
  let v=this.valueOf().toUpperCase()
  if (Number.isInteger(v)===false){
    const lib=[[900,"CM"],[400,"CD"],[90,"LC"],[40,"XL"],[9,"IX"],[4,"IV"],[1000,"M"],[500,"D"],[100,"C"],[50,"L"],[10,"X"],[5,"V"],[1,"I"]]
    let res=0;
    lib.forEach(val=>{
      const checkLoop=()=>{
        let int=v.search(val[1])
        if (int>-1){
          res+=val[0]
          v=v.replace(val[1],"")
          checkLoop()
        }
      }
      checkLoop()
    })
    return res
  } else {
    return this.valueOf()
  }
}