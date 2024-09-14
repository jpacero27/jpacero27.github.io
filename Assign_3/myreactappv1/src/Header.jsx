import React, {useState} from "react";

function findYeartoPermit(userAge,currentYear)
{
    let left= 18-userAge;
    console.log(userAge);
    console.log(left);
    let result=currentYear+left;
    console.log(result);
    return {left, result};
}

function updateStr(userAge,currentYear){
  let str=" ";
  if( userAge>17)
    str="Congratulation, you can apply for a drivers license";
  else
  {
    const{left,result}=findYeartoPermit(userAge, currentYear);
    str= `Sorry, not old enough to apply for a drivers lincense. Try in ${result}, ${left} year from now!`;
  }
  return str;
}

function Header()
{
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => 
  {
    const currentYear = new Date().getFullYear();
    const userAge = currentYear - Number(userInput);
    const resultMessage = updateStr(userAge, currentYear);
    setMessage(resultMessage); // Update the message state
  };
  return(
    <header title="smth here" > 
    <input type="Text" placeholder="Enter your birth year" id="year" value={userInput} onChange={(e) => setUserInput(e.target.value)}></input>
    <button onClick={handleSubmit} >Submit</button>
    <h1 contentEditable='true' style={{ backgroundColor: "lightblue" }}>
      {message}
    </h1>
    </header>

  );
}
export default Header;