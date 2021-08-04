import React from 'react';
import {GetServerSideProps} from 'next';

export const HomePage = () => {
  return (<div>Test..</div>);
};

export const getServerSideProps: GetServerSideProps = getServerSidePropsForHome('');

export default HomePage;


function getServerSidePropsForHome(key: string) : GetServerSideProps {
	return async ({ query, req, locale, defaultLocale }: any) => {
  		// fetch dynamic page stuff

			console.log('fetch page');

			return {
				props: { } 
			};
	 }
}
