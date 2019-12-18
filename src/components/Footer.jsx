//jshint esversion:6
import React from "react";

function Footer() {
	const currentYear = new Date().getFullYear();
	const cpSymbol = "&copy";

	return (
		<footer>
			<p>Copyright &copy; {currentYear}</p>
		</footer>
	);
}

export default Footer;
