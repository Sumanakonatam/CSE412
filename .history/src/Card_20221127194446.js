import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Fcard() {
  return (
    <Card style={{ width: '10%', height: '10%', zIndex:1,  position: 'relative', left: "300px", blockSize:'10%' }}>
      <Card.Body>

        <Button variant="primary">Go somewhere</Button>
        
      </Card.Body>
    </Card>
  );
}

export default Fcard;