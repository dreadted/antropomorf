<style>
  #contact {
	height: 30dvh;
}

#contact a {
	display: flex;
	justify-content: center;
	align-items: center;

	color: var(--primary);
	font-family: 'Source Code Pro';
	font-size: var(--font-size);
	text-decoration: none;
	transition: all 0.5s;
	animation: textAnimation 6s ease-in-out 1 forwards;
}

#contact a:hover {
	color: var(--secondary);
	opacity: 1;
	transform: scale(1.01);
}
</style>