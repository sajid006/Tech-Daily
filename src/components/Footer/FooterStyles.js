import styled from 'styled-components';

export const Box = styled.div`
padding-top: 60px;
padding-bottom: 50px;
background: black;
position: fixed;
bottom: 0;
width: 100%;
height: 5rem;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterTitle = styled.h3`
color: white;
text-align: center;
margin-top:-50px`

export const FooterItem = styled.span`
margin-left: 10px`

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: cyan;
	transition: 200ms ease-in;
}
`;

