import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id:1,
          title:'Відеокарта Gigabyte GeForce RTX 3060 WindForce OC 12228MB (GV-N3060WF2OC-12GD 2.0)',
          img:'rtx3060.jpg',
          desc:'Гарантія на продукт:1 рік',
          category:'videocards',
          price:'7000'
        },
        {
          id:2,
          title:'Відеокарта MSI GeForce RTX 4060 VENTUS 2X BLACK OC 8192MB (RTX 4060 VENTUS 2X BLACK 8G OC)',
          img:'rtx4060.jpeg',
          desc:'Гарантія на продукт:2 роки',
          category:'videocards',
          price:'8000'
        },
        {
          id:3,
          title:'Відеокарта Asus ROG Strix GeForce RTX 4090 OC 24576MB (ROG-STRIX-RTX4090-O24G-GAMING)',
          img:'rtx4090.jpg',
          desc:'Гарантія на продукт:2 роки',
          category:'videocards',
          price:'25000'
        },
        {
          id:4,
          title:'Відеокарта Gigabyte GeForce RTX 4070 SUPER WINDFORCE OC 12288MB (GV-N407SWF3OC-12GD)',
          img:'rtx4070.jpeg',
          desc:'Гарантія на продукт:1 рік',
          category:'videocards',
          price:'15000'
        },
        {
          id:5,
          title:'Корпус NZXT H9 Elite Edition ATX Mid Tower White (CM-H91EW-01) ',
          img:'corpus.jpg',
          desc:'Гарантія на продукт:3 рік',
          category:'videocards',
          price:'5000'
        },
        {
          id:6,
          title:'Монітор ASUS TUF Gaming VG249Q1A (90LM06J0-B01370)',
          img:'monitor.jpg',
          desc:'Гарантія на продукт:5 рік',
          category:'monitors',
          price:'6000'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
  );
 }

  addToOrder(item){
    this.setState({orders: [...this.state.orders, item] })

  }
}

export default App;
