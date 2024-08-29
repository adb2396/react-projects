import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Accordion from './modules/Accordion';
import ImageSlider from './modules/ImageSlider/ImageSlider';
import LightDarkTheme from './modules/LightDarkTheme/LightDarkTheme';
import NestedMenu from './modules/NestedMenu/NestedMenu';
import ProductsLoader from './modules/ProductsLoader/ProductsLoader';
import QRGenerator from './modules/QRGenerator/QRGenerator';
import RandomColor from './modules/RandomColor/RadomColor';
import ScrollIndicator from './modules/ScrollIndicator/ScrollIndicator';
import StarRating from './modules/StarRating/StarRating';
import Tabs from './modules/Tabs/Tabs';
import reportWebVitals from './reportWebVitals';
import MODULE_ROUTES from './routes';

const router = createBrowserRouter([
	{
		path: MODULE_ROUTES.root,
		element: <App />,
	},
	{
		path: MODULE_ROUTES.accordion,
		element: <Accordion />,
	},
	{
		path: MODULE_ROUTES.randomColor,
		element: <RandomColor />,
	},
	{
		path: MODULE_ROUTES.starRating,
		element: <StarRating />,
	},
	{
		path: MODULE_ROUTES.imageSlider,
		element: <ImageSlider />,
	},
	{
		path: MODULE_ROUTES.productsLoader,
		element: <ProductsLoader />,
	},
	{
		path: MODULE_ROUTES.nestedMenu,
		element: <NestedMenu />,
	},
	{
		path: MODULE_ROUTES.qrCode,
		element: <QRGenerator />,
	},
	{
		path: MODULE_ROUTES.lightDarkTheme,
		element: <LightDarkTheme />,
	},
	{
		path: MODULE_ROUTES.scrollIndicator,
		element: <ScrollIndicator />,
	},
	{
		path: MODULE_ROUTES.tabs,
		element: <Tabs />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
