import React from 'react';

import styled from 'styled-components';

export const Product = ({ store, addProductHandler }) => {
	return (
		<Container>
			<Ul>
				{store.map((el) => {
					return (
						<Li key={el.id}>
							<ImgContainer>
								<img src={el.url} alt='product photos' />
								<DataProductContainer>
									<ProductText>{el.productName}</ProductText>
									<Button
										onClick={() => addProductHandler(el.id)}
										disabled={el.quantity > 0}>
										add
									</Button>
								</DataProductContainer>
							</ImgContainer>
						</Li>
					);
				})}
			</Ul>
		</Container>
	);
};
const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`;
const Ul = styled.ul`
	display: flex;
	justify-content: center;
	gap: 20px;
`;
const Li = styled.li`
	list-style: none;
	width: 200px;
	height: 310px;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	box-shadow: 0 1px 8px rgba(0, 0, 0, 0.259);
`;
const ImgContainer = styled.div`
	width: 199px;
	height: 170px;
	border-bottom: 1px solid #dcdcdc;
	img {
		width: 100%;
		height: 100%;
	}
`;
const DataProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;
const ProductText = styled.p`
	font-size: 1.3rem;
	font-weight: 600;
	margin-top: 20px;
`;
const Button = styled.button`
	border-radius: 4px;
	border: none;
	font-size: 1.5rem;
	padding: 5px 30px;
	background-color: #47f06c;
	color: #fff;
	:disabled {
		background-color: #0b180a;
	}
`;

