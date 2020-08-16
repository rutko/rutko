import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

export default () => {
  return (
		<>
			<body>
				<nav>
					<ul class="tabs">
						<li><Link to="/">Top</Link></li>
						<li><Link to="/products">Products</Link></li>
						<li><Link to="https://twitter.com/rutko_">Twitter</Link></li>
						<li><Link to="https://github.com/rutko">Github</Link></li>
						<li><Link to="/osushi">Osushi</Link></li>
					</ul>
				</nav>
			</body>
		</>
	);
}
