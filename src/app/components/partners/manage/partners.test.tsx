import * as enzyme from 'enzyme';
import * as React from 'react';
import { Partner } from '../../../types/partner';
import Partners from './partners';

it('renders the Add partner button', () => {
  const props = {
    partners: new Array<Partner>(),
    // tslint:disable-next-line:object-literal-sort-keys
    history: null
  }
  const partners = enzyme.shallow(<Partners {...props} />);
  expect(partners.find("h1").text()).toEqual('Partners')
});
