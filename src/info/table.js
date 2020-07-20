import React from "react";


class InfoTable  extends React.Component
{
  constructor()
  {
    super();
  }
  render()
  {
    return(
     
     < table className="table">
     <thead>
     <tr>
     <th scope="col">Name</th>
     <th scope="col">City</th>
     <th scope="col">Age </th>
     <th scope="col">Edit</th>
     <th scope="col">Delete</th>

     </tr>
     </thead>
     <tbody>
     {
       this.props.getData.length > 0 ?
       (
       this.props.getData.map(e =>
       <tr key = {e._id}>
       <td>{e.Name}</td>
       <td>{e.City}</td>
       <td>{e.Age}</td>
       <td><button className = "btn btn-primary"
       onClick = { event =>{
        this.props.setData(e)
      }
    }
    >Edit</button></td>
    <td><button className = "btn btn-danger"
    onClick = { event => {
      this.props.del(e)
    }
  }
  >Delete</button></td>
  </tr>
  
  )
  )
  :
  (
  <tr>
  <td> no data </td>
  </tr>
  )
}
</tbody>
</table>
)
}
}

export default InfoTable;