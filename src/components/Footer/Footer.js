import React from "react";
import {
	Box, Column, Container, FooterItem, FooterLink, FooterTitle, Row
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<FooterTitle>
		Tech Daily: A Computer Science Portal for Tech Enthusiasts
	</FooterTitle>
	<Container>
		<Row>
		<Column>
        <FooterLink href="http://facebook.com">
			<i className="fab fa-facebook-f">
				<FooterItem>
				Facebook
				</FooterItem>
			</i>
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="http://instagram.com">
			<i className="fab fa-instagram">
				<FooterItem>
				Instagram
				</FooterItem>
			</i>
			</FooterLink>
		</Column>
		<Column>
        <FooterLink href="http://twitter.com">
			<i className="fab fa-twitter">
				<FooterItem>
				Twitter
				</FooterItem>
			</i>
			</FooterLink>
		</Column>
		<Column>
			<FooterLink href="http://youtube.com">
			<i className="fab fa-youtube">
				<FooterItem>
				Youtube
				</FooterItem>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
