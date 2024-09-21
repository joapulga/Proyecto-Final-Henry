
import { Table,Button } from 'react-bootstrap';

const AllCredits = () => {
  return (
   
    <Table striped bordered hover variant="dark">
        
    <thead>
      <tr>
        <th>ID</th>
        <th>ID Client</th>
        <th>Date</th>
        <th>Funtions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>123</td>
        <td>12/10/24</td>
        <td><Button>Ver Más</Button></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td><Button>Ver Más</Button></td>
      </tr>
      <tr>
        <td>3</td>
        <td >Larry the Bird</td>
        <td>12/10/24</td>
        <td><Button>Ver Más</Button></td>
      </tr>
    </tbody>
  </Table>
  );
};
export default AllCredits;