
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
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
        }








        
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
  );
 }
}
export default App;