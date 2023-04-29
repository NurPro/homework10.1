import React from 'react';
import styled from 'styled-components';

export const TableProducts = ({
	store,
	incrementProductHandler,
	decrementProductHandler,
	remove,
}) => {
	const totalPrice = store.map((item) => {
		if (item.quantity === 0) {
			const result = { ...item, price: (item.price = 0) };
			return result.price;
		} else {
			return item.price;
		}
	});
  const resultTotal = totalPrice.reduce((a, b) => a + b, 0);
  
	return (
		<Container>
			<div>
				<Table>
					<Thead>
						<p>Product</p>
						<p>Product name </p>
						<p>Price</p>
						<p>Quantity</p>
						<p>Remove</p>
					</Thead>
					<ol>
						{store.map((item) => {
							return (
								item.quantity !== 0 && (
									<li key={item.id}>
										<Tbody>
											<TImg>
												<img src={item.url} alt='not found' />
											</TImg>
											<div>{item.productName}</div>
											<div>${item.price}</div>
											<ContainerCount>
												<ButtonCount
													onClick={() => decrementProductHandler(item.id)}>
													-
												</ButtonCount>
												<span>{item.quantity}</span>
												<ButtonCount
													onClick={() => incrementProductHandler(item.id)}>
													+
												</ButtonCount>
											</ContainerCount>
											<div>
												<ButtonRemove onClick={() => remove(item.id)}>
													Remove
												</ButtonRemove>
											</div>
										</Tbody>
									</li>
								)
							);
						})}
					</ol>
					;
				</Table>
				<div style={{ marginBottom: '40px' }}>
					<p style={{ fontSize: '3rem' }}>Total: {resultTotal}</p>
				</div>
			</div>
		</Container>
	);
};
const Container = styled.div`
	margin: 20px 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
const Table = styled.div`
	display: flex;
	flex-direction: column;
`;
const Thead = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70px;
	gap: 30px;
	font-size: 1.6rem;
	font-weight: 600;
	border-top: 3px solid #dcdcdc;
	.id {
		width: 100px;
		display: flex;
		justify-content: center;
		margin-top: -10;
	}
	p {
		width: 200px;
		height: 20px;
		display: flex;
		justify-content: center;
	}
`;
const TImg = styled.div`
	width: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 95px;
		height: 76px;
		object-fit: contain;
	}
`;
const Tbody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80px;
	font-size: 1.6rem;
	font-weight: 600;

	border-top: 3px solid #dcdcdc;
	.id {
		width: 100px;
		font-weight: 600;
	}
	div {
		width: 240px;
	}
`;

const ContainerCount = styled.div`
	display: flex;
	gap: 10px;

	justify-content: center;
`;
const ButtonCount = styled.button`
	padding: 10px;
	background-color: #19a1b7;
	color: #fff;
	border-radius: 4px;
	border: none;
`;
const ButtonRemove = styled.button`
	padding: 10px;
	background-color: #de3445;
	color: #fff;
	border-radius: 4px;
	border: none;
	font-size: 1.4rem;
`;
