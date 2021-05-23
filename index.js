function distanceFromHqInBlocks(location) {
return location >= 42 ? (location - 42) : (42 - location);
}
function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}
function distanceTravelledInFeet(start, destination) {
  return start > destination ? ((start - destination) * 264) : ((destination - start) * 264); 
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  return distance < 400 ? 0
       : distance < 2000 ? ((distance - 400) * .02)  
       : distance > 2000 && distance <= 2500 ? (25)
       : ('cannot travel that far');
}