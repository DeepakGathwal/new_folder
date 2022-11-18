import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function App() {
  const [searchPolki, setSearchPoki] = useState([])


  const data = [
    {
      src:"./images/spiderman-4k-ps4.jpg",
      value:"Spider_Man"
    },
    {
      src:"./images/spiderman-artwork.jpg",
      value:"Spider_Man"
    },
    {
      src:"./images/symbiote.jpg",
      value:"Venom"
    },
    {
      src:"./images/venom-new.jpg",
      value:"Venom"
    },
    {
      src:"./images/venom-taking-over-spiderman.jpg",
      value:"Spider_Man"
    },
    {
      src:"./images/venom-vs-carnage.jpg",
      value:"Venom"
    },
    {
      src:"./images/wonder-woman-coming.jpg",
      value:"Wonder_Woman"
    },
    {
      src:"./images/wonder-woman.jpg",
      value:"Wonder_Woman"
    },
    {
      src:"./images/gal-gadot.jpg",
      value:"Wonder_Woman"
    },
    {
      src:"./images/gal_gadot_wonder_woman.jpg",
      value:"Wonder_Woman"
    },
    {
      src:"./images/gal_gadot_wonder_woman_justice_league.jpg",
      value:"Wonder_Woman"
    },
    {
      src:"./images/venom-vs-spider.jpg",
      value:"Venom"
    },
    {
      src:"./images/iron-man-4k.jpg",
      value:"Iron_Man"
    },
    {
      src:"./images/ironman.jpg",
      value:"Iron_Man"
    },
    {
      src:"./images/iron-man-avengers.jpg",
      value:"Iron_Man"
    },
    {
      src:"./images/iron_man_action.jpg",
      value:"Iron_Man"
    },
    {
      src:"./images/iron man glass.jpg",
      value:"Iron_Man"
    },
    {
      src:"./images/spider_man.jpg",
      value:"Spider_Man"
    },
    {
      src:"./images/marvels_spiderman.jpg",
      value:"Spider_Man"
    },
    {
      src:"./images/deadpool-superhero.jpg",
      value:"DeadPool"
    },
    {
      src:"./images/deadpool-superhero-ur.jpg",
      value:"DeadPool"
    },
    {
      src:"./images/deadpool.jpg",
      value:"DeadPool"
    },
    {
      src:"./images/deadpool_beau.jpg",
      value:"DeadPool"
    },
    {
      src:"./images/deadpool_enjoy.jpg",
      value:"DeadPool"
    },
  ]
const filterMenu = (category) =>{
  const uploadcategory = data.filter((curElem) => {
    if(!category){
      return uploadcategory
    }else{

      return curElem.value === category 
    }
  })
  setSearchPoki(uploadcategory)
}
useEffect(() =>{
  setSearchPoki(data)
},[])

  return (
   <>
    <div className='container-fluid'>
      <h1 className='p-2 text-center'>All Super Hero</h1>
    <div className='d-flex justify-content-around p-2'>
      <button className='btn border-0 hero bg-primary'  onClick={() => setSearchPoki(data)}>All</button>
      <button className='btn border-0 hero' onClick={() => filterMenu('DeadPool')}>Deadpool</button>
      <button className='btn border-0 hero' onClick={() => filterMenu('Spider_Man')}>Spider_Man</button>
      <button className='btn border-0 hero' onClick={() => filterMenu('Iron_Man')}>Iron_Man</button>
      <button className='btn border-0 hero' onClick={() => filterMenu('Wonder_Woman')}>Wonder_Woman</button>
      <button className='btn border-0 hero' onClick={() => filterMenu('Venom')}>Venom</button>
    </div>
        <Row xs={1} md={4} className="g-4">
            <>
            {searchPolki.map((el,i) =>(
        <Col className='p-2'>
        <Card>
          <Card.Img className=' image-fluid p-1' variant="top" src={el.src} />
          <Card.Body>
            <Card.Title>{el.value}</Card.Title>
            <Card.Text>
              <h6>Id Card No. {i+1}</h6>
              <h5> Address {el.src}</h5> 
              <h4>Name {el.value} Hero</h4>  
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
       ))}
     </>
    </Row>
    </div>
         </>
  );
}

export default App;
