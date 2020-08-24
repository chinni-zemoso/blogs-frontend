import React from 'react';

import { render } from '@testing-library/react';


import { create } from "react-test-renderer";

import CustomAvatar from './index';


test("Matches the snapshot",() => {
  const input = create(<CustomAvatar/>);
  expect(input.toJSON()).toMatchSnapshot();

});