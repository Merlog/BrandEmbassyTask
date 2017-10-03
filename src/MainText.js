import React from 'react';
import kava from './img/kava.jpg';

const MainText = () => {
  return (  <div className="container">
                    <h1>Fronty u kávovaru</h1>

				    <img src={kava} alt="" className="kava mobilehide768" />
				
					<p>
						Arabica latte shop macchiato doppio coffee steamed. Brewed, macchiato grounds medium, eu breve grinder frappuccino americano. Pumpkin spice, caffeine chicory dark medium arabica macchiato instant rich. Et, single shot aged half and half lungo whipped, cinnamon cappuccino whipped id mazagran.
					</p><p>
					<strong>Con panna</strong> sugar macchiato so macchiato in skinny variety mug that. A plunger pot acerbic, brewed medium java aromatic coffee. At mocha wings acerbic beans medium saucer. Cup extra sit half and half robust java crema turkish.</p><br />
					
					
					<p>
					Medium aroma cream qui medium coffee arabica, caffeine et <a href="" className="tooltip">caramelization cup<span className="tooltiptext">espresso!</span></a> plunger pot. Eu, plunger pot organic dark, cinna&shy;mon, redeye wings fair trade whipped lungo crema. Carajillo caramelization americano, plunger pot, filter coffee foam siphon roast and java.
	               </p><p>
                    Galão a, breve, at white, latte variety irish at flavour barista. Half and half, so, sweet, <a href="" className="tooltip">affogato galão<span className="tooltiptext">affogato!</span></a>, half and half sugar irish trifecta chicory. Single origin, espresso, con panna french press et steamed robust.
                    </p>
             </div>
		);
};

export default MainText;