/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

const App = () => (
	<Router>
		<div className="App">
			<header className="App-header">
				<Link to="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 114 14"
						width="114"
						height="14"
					>
						<use
							fill="#FFF"
							transform="translate(246 135) translate(-141 -133.336)"
							xlinkHref="#path0_fill"
						/>
						<use
							fill="#FFF"
							transform="translate(246 135) translate(-246 -133.337)"
							xlinkHref="#path1_fill"
						/>
						<g
							fill="#FFF"
							transform="translate(246 135) translate(-227.224 -134.85)"
						>
							<use xlinkHref="#path2_fill" />
							<use xlinkHref="#path3_fill" />
							<use xlinkHref="#path4_fill" />
							<use xlinkHref="#path5_fill" />
							<use xlinkHref="#path6_fill" />
						</g>
						<defs>
							<path
								id="path0_fill"
								fillRule="evenodd"
								d="M0 7.62l5.845-2.556L0 2.183V0l8.655 4.51v1.3L0 9.791V7.619z"
							/>
							<path
								id="path1_fill"
								fillRule="evenodd"
								d="M8.654 9.792L0 5.809v-1.3L8.654 0v2.183L2.809 5.064 8.654 7.62v2.173z"
							/>
							<path id="path2_fill" d="M0 12.85V0h2.725v10.6h5.212v2.25H0z" />
							<path
								id="path3_fill"
								d="M23.337 0v8.314c0 .95-.214 1.782-.642 2.496-.422.715-1.034 1.263-1.837 1.644-.803.381-1.752.571-2.848.571-1.652 0-2.935-.421-3.85-1.265-.913-.85-1.37-2.01-1.37-3.48V0h2.716v7.866c0 .99.199 1.717.597 2.18.399.463 1.058.694 1.978.694.89 0 1.535-.231 1.934-.694.404-.469.606-1.201.606-2.197V0h2.716z"
							/>
							<path
								id="path4_fill"
								d="M34.624 12.85L31.53 2.769h-.08c.112 2.05.168 3.418.168 4.104v5.977h-2.435V0h3.71l3.04 9.826h.053L39.212 0h3.708v12.85h-2.54V6.768c0-.288.003-.619.01-.994.011-.375.052-1.37.122-2.988h-.079L37.12 12.85h-2.496z"
							/>
							<path
								id="path5_fill"
								d="M59.525 6.302c0 2.115-.604 3.735-1.81 4.86-1.202 1.125-2.94 1.688-5.213 1.688h-3.638V0h4.034c2.097 0 3.726.554 4.887 1.661 1.16 1.108 1.74 2.654 1.74 4.64zm-2.83.07c0-2.76-1.219-4.14-3.657-4.14h-1.45V10.6h1.17c2.624 0 3.937-1.41 3.937-4.228z"
							/>
							<path
								id="path6_fill"
								d="M64.888 0h3.999c1.822 0 3.144.26 3.964.782.826.516 1.239 1.34 1.239 2.47 0 .768-.182 1.397-.545 1.89a2.143 2.143 0 01-1.433.887v.088c.815.182 1.4.522 1.758 1.02.364.498.545 1.16.545 1.986 0 1.172-.425 2.086-1.274 2.742-.844.656-1.992.985-3.446.985h-4.807V0zm2.724 5.089h1.583c.738 0 1.271-.114 1.6-.343.333-.228.5-.606.5-1.134 0-.492-.181-.843-.545-1.054-.357-.217-.926-.326-1.705-.326h-1.433V5.09zm0 2.162V10.6h1.776c.75 0 1.304-.144 1.661-.431.357-.287.536-.727.536-1.318 0-1.067-.762-1.6-2.285-1.6h-1.688z"
							/>
						</defs>
					</svg>
				</Link>
			</header>
			<Switch>
				<Route exact path="/" component={MoviesList} />
				<Route path="/:id" component={MovieDetail} />
			</Switch>
		</div>
	</Router>
);

export default App;
