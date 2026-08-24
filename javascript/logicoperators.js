// AND  - all conditions should be true.
// OR - any one condition be true.
// NOT - does the opposite of a condition.
let country = "India";
var channel = "DisneyXD";

if(country != "Japan" && channel != "AniMax")
{
  console.log("not an otaku!");
  
}
else if(country === "Japan" || channel != "AniMax")
{
    console.log(" still otaku");
    
}
else if(country != "Japan" || channel === "AniMax")
{
    console.log("still weeb");
    
}
else
{
    console.log("watch anime.");
    
}