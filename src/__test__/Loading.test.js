import '@testing-library/jest-dom/extend-expect';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

import Loading from '../components/Loading';

const Component = props => {
  const {loading} = props;
  return <Loading loading={loading} />;
}

describe('should work as expected', () => {

  test('should render loading mode', () => {
    const {getByTestId} = render(
      <Component loading />
    );

    expect(getByTestId('loadingHeader'));
    expect(getByTestId('loadingBody'));
  });

  test('should do not have be return', () => {
    render (
      <Component />
    );

    expect(null);
  });
});

afterEach(cleanup);
