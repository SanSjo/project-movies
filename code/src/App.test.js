import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import App from './App'
import PopularList from './pages/PopularList'

it('renders without crashing', () => {
const div = document.createElement('BrowserRouter');
ReactDom.render(<App />, div);
ReactDom.unmountComponentAtNode(div);
})