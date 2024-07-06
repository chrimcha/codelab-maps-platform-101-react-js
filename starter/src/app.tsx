/**
 * Copyright 2024 Google LLC
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
import { APIProvider } from '@vis.gl/react-google-maps';
import React from 'react';
import { createRoot } from "react-dom/client";

const App = () => (
<APIProvider apiKey={'Your API key here'} onLoad={() => console.log('Maps API has loaded.')}></APIProvider>
<h1>Hello, world!</h1>
);

const root = createRoot(document.getElementById('app'));
root.render(<App />);

export default App;