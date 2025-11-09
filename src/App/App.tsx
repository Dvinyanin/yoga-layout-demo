import { withYogaLayout } from '../layout-engine';
import examples from '../examples';

import './App.css';

const example = examples[Number(location.search.slice(1))] ?? examples[0];
export const App = withYogaLayout(example, { containerWidth: 600, containerHeight: 600 });
