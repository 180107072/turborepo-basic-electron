import React from 'react';
import ReactDOM from 'react-dom/client';

import {isEven} from '@turborepo-basic/is-even';

console.log(isEven(4));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>Hello world</React.StrictMode>,
);
