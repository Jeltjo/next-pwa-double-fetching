import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';


export default class MyDocument extends Document {

	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>
					<noscript>Please enable JavaScript to use this website.</noscript>

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
