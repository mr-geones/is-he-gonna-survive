function hero(bullets, dragons){
  
  const bulletsNeeded = dragons * 2;
  
  if(bullets >= bulletsNeeded) {
    return true;
  }
  else {
    return false;
  }
}
