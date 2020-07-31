import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
	return (
		<div
			className='random'
			style={{
				position: 'relative',
				background: 'linear-gradient(to left, #f5f5f5 30%, #ffccbc 0%)',
				// backgroundColor: '#ffccbc',
				height: '100vh',
			}}>
			<Navbar expand='lg'>
				<div className='container'>
					<Navbar.Brand
						href='#home'
						style={{
							fontFamily: 'Oswald',
							fontSize: 35,
							color: '#424242',
							fontWeight: '500',
						}}>
						KARTIK BHALLA
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link
								style={{ fontSize: '22px', fontFamily: 'Oswald' }}
								href='#home'>
								Home
							</Nav.Link>
							<Nav.Link
								style={{ fontSize: '22px', fontFamily: 'Oswald' }}
								href='#link'>
								About
							</Nav.Link>
							<Nav.Link
								style={{ fontSize: '22px', fontFamily: 'Oswald' }}
								href='#link'>
								Projects
							</Nav.Link>
							<Nav.Link
								style={{ fontSize: '22px', fontFamily: 'Oswald' }}
								href='#link'>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
			<section
				className='container'
				style={{ display: 'flex', margin: 'auto ' }}
				// style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
			>
				<div style={{ minWidth: '40vw' }}>hello</div>
				<div>
					<img src='/me.png' />
				</div>
			</section>
		</div>
	);
}

export default App;
