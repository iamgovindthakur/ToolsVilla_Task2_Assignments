import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './components/Loader'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
const App = () => {
  const [loadedProduct, setLoadedProduct] = useState([])
  const [color, setColor] = useState('Red')
  const [ram, setRam] = useState('4 GB')
  const [storage, setStorage] = useState('64 GB')
  useEffect(() => {
    // const { data } = axios.get('/api/products')
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products')
        setLoadedProduct(data)
      } catch (err) {}
    }
    fetchProducts()
  }, [])

  console.log(loadedProduct)
  return loadedProduct.length === 0 ? (
    <Loader />
  ) : (
    loadedProduct.map((product) => (
      <div className='container my-5'>
        <h1 className='my-4 text-center'>Welcome to ToolsVilla</h1>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
              <ListGroup.Item>Colour: {color}</ListGroup.Item>
              <ListGroup.Item>Ram: {ram} </ListGroup.Item>
              <ListGroup.Item>Sorage: {storage}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Row>
              <div class='form-group'>
                <label for='sel1'>Color:</label>
                <select
                  className='form-control'
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option>{product.color[0]}</option>
                  <option>{product.color[1]}</option>
                  <option>{product.color[2]}</option>
                </select>
              </div>
            </Row>
            <Row>
              <div class='form-group'>
                <label for='sel1'>Ram:</label>
                <select
                  className='form-control'
                  onChange={(e) => setRam(e.target.value)}
                >
                  <option>{product.ram[0]}</option>
                  <option>{product.ram[1]}</option>
                </select>
              </div>
            </Row>
            <Row>
              <div class='form-group'>
                <label for='sel1'>Storage:</label>
                <select
                  className='form-control'
                  onChange={(e) => setStorage(e.target.value)}
                >
                  <option>{product.storage[0]}</option>
                  <option>{product.storage[1]}</option>
                </select>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    ))
  )
}

export default App
