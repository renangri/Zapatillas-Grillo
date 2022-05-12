import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Row , Col} from "react-bootstrap";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(10);

  function incrementCount() {
    if (count !== 10) {
      setCount((count) => count + 1);
    }
  }
  function discCount() {
    if (count !== 0) {
      setCount((count) => count - 1);
    }
  }

  function addToCart() {
    if (stock > 0 && stock !== 0) {
      setStock((stock) => stock - count);
    }

    if (stock < 0) {
      setStock((stock) => (stock = 0));
    }

    if (stock > 10) {
      setStock((stock) => (stock = 10));
    }
  }

  function renewStock() {
    setStock((stock) => (stock = 10));
  }

  const { name, price, image } = item;

  return (
    <>
      

      <div className="contenedor">

      <Card style={{ width: "350px" }} className="imagen" border="light">
        
        <Card.Img variant="top" src={image}  />
      
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <p className="precio"> ${price}</p>
        
          <p className="text">{count}</p>
         

          <div>
    <Button variant="primary" size="sm" className="buttons" onClick={discCount}>
      -
    </Button>{' '}
<Button variant="primary" size="sm" className="buttons" onClick={incrementCount}>
     +
    </Button>
  </div>
          <div>
            <Button variant="dark" onClick={addToCart}>
              <h5> Agregar al carrito</h5>
            </Button>
            
          </div>

         

          <div>
            <Button className="r2" variant="dark" onClick={renewStock}>
              Renovar stock
            </Button>
          </div>
        </Card.Body>
        <Card.Footer>
        <p className="text"> stock  : {stock}</p>
    </Card.Footer>
      </Card>
      </div>
 
  


    </>
  );
};

export default ItemCard;
