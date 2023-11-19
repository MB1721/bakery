import React from 'react';
import SampleComponent, { HelloWorld } from '@components/Sample/Sample';

export default function HomePage() {
  return (
    <div id="HomePage">
      <HelloWorld/>
      <SampleComponent/>
    </div>
  );
}