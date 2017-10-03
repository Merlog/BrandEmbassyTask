import React from 'react';

const Navigace = () => {
  return ( <header>
				<div className="nav-bar">
					<div className="container">
						<h1 className="logo">
							<a href="https://www.etnetera.cz/">Etnetera</a>
						</h1>
						<nav>
						 <ul className="menu navigation">
							<li><a href=""> domů</a></li>
							<li className="selected"><a href="">kdo jsme</a></li>
							<li><a href="">co děláme</a></li>
							<li><a href="">reference</a></li>
							<li><a href="">prace u nás (4)</a></li>
							<li><a href="">kontakt</a></li>
						 </ul>
						</nav>	
					</div>
				</div>
			</header>
	);	
};

export default Navigace;