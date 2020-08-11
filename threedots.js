// make it concat object using older version
   const prices = [120,130,125,125];
   const prices2 = [130,150,125,128];
   const allPrices = prices.concat(prices2);
   console.log("Using older Version " + allPrices);
// make it concat using es6 version 
   const allPrices2 = [...prices,...prices2];
   console.log("Using ES6 Version " + allPrices2);

//Find out maximum using older version
    const stuPoint = 850;
    const stuPoint1 = 950;
    const stuPoint2 = 830;
    const allPoints = [850,950,830];
    const maximum = Math.max(...allPoints);
    // const maximum  = Math.max(stuPoint,stuPoint1,stuPoint2);
    console.log(maximum);

//Find out maximum using ES6 version
   console.log(maximum);
