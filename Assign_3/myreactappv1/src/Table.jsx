
function createTable(){
    const header=['Month','Day','Time','Dmv Staff'];
    const data = [
        { Month: "January", Day: "Monday", Time: "10:00 AM", Staff: "John" },
        { Month: "February", Day: "Tuesday", Time: "11:00 AM", Staff: "Doe" }
      ];
    
    return(
        <div className="tablecontainer">
        <table border="1" className="tb"> 
        <thead>
          <tr>
          {header.map((header,index)=>(
            <th key={index}>{header}</th>))}
          </tr>
        </thead>
        <tbody>
        {data.map((row,rowIndex)=>(
            <tr key={rowIndex}>
            <td>{row.Month}</td>
            <td>{row.Day}</td>
            <td>{row.Time}</td>
            <td>{row.Staff}</td>
            </tr>
            ))} 
        </tbody>
      </table>
      </div>
      
    );
  }
  export default createTable;