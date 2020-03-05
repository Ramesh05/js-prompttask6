let a=prompt("enter the name");
let b=prompt("enter the mark 1");
let c=prompt("enter the mark2");
let d=prompt("enter the mark3");

const a={name:a,mark:m1,mark2:m2,mark3:m3}
const b={name:a,total:number(mark1)+number(mark2)+number(mark3)}
const c={name:a,avg:b.total/3}
const d={name:a,mark1:a.mark1,mark2:a.mark2,mark3:a.mark3,total:b.total,avg:c.avg}
if(isNaN(c.avg))
{
  alert("invalid number");
}

console.log(JSON.stringfy(a))
console.log(JSON.stringfy(b))
console.log(JSON.stringfy(c))
console.log(JSON.stringfy(d))