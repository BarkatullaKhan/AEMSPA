import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Timer from './components/Timer/Timer';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
