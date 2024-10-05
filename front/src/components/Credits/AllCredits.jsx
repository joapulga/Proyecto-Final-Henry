import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { findAllCredits } from "../service/querisCredits";

const AllCredits = () => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    findAllCredits().then((res) => {
      try {
        setCredits(res);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  const onclick=()=>{
    
  }
   const mapeo = () => {
     return credits.map((c) => {
       return (
         <tr key={c.id}>
           <td>{c.id}</td>
           <td>{c.name}</td>
           <td>{c.dni}</td>
           <td>{c.phone}</td>
           <td>
             <Button as={Link} to="/admin/credit" >
               Ver Más
             </Button>
           </td>
         </tr>
       );
     });
   };

  return (
    <Container>
      <h1 className="text-center">Credits</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Client</th>
            <th>Date</th>
            <th>Funtions</th>
          </tr>
        </thead>
        <tbody>{mapeo()}</tbody>
      </Table>
    </Container>
  );
};
export default AllCredits;
