//------Part A----------
console.log('A')
const lucasMass=78 ;
const lucasHeight=1.69;
let lucasBMI=(lucasMass/(lucasHeight*lucasHeight));
//console.log(lucasBMI);

const petterMass=92 ;
const petterHeight=1.95;
let petterBMI=(petterMass/(petterHeight*petterHeight));
//console.log(petterBMI);

let lucasHigherBMI=(lucasBMI>petterBMI)
//console.log(lucasHigherBMI);
let summary=(`The BMI of Petter is ${petterBMI}, The BMI of Lucas is ${lucasBMI}, Petter's BMI is higher than Lucas's BMI that is ${lucasHigherBMI}`);
console.log(summary);


//--------Part B------------
console.log(' ');
console.log('B');

const fahrenTemp=76;
const celsiusTemp=23;
let cToF=(celsiusTemp*9/5)+32
let fToC=(fahrenTemp-32)*5/9

console.log(`${fahrenTemp}°F is ${fToC}°C`);
console.log(`${celsiusTemp}°C is ${cToF}°F`);


//-----------Part C---------
console.log(' ');
console.log('C')
if(petterBMI<lucasBMI)
{
    let result=(`Lucas' BMI ${lucasBMI} is higher than Peter's ${petterBMI}`);
    console.log(result);
}
else
{
    let result=(`Peter's BMI ${petterBMI} is higher than Lucas' ${lucasBMI}`);
    console.log(result);
}



//---------Part D--------------
console.log(' ');
console.log('D')
const CovertCelsiusToFahreheit= function(cTemp){
    let celToF=(cTemp*9/5)+32;
    let result=(`${cTemp}°C is ${celToF}°F`);
    return result
}
console.log(CovertCelsiusToFahreheit(100));
console.log(CovertCelsiusToFahreheit(0));
console.log(CovertCelsiusToFahreheit(10));
console.log(' ');
console.log('F to C')


const  CovertFahrenheitToCelsius= function(fTemp){
    let fahrenToC=(fTemp-32)*5/9
    let result=(`${fTemp}°F is ${fahrenToC}°C`);
    return result
}
console.log(CovertFahrenheitToCelsius(32));
console.log(CovertFahrenheitToCelsius(10));
console.log(CovertFahrenheitToCelsius(102));