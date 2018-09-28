import * as React from 'react';
import * as enzyme from 'enzyme';
import * as ReactDOM from 'react-dom';
import App from './App';
// import { AdalService } from './common/authn/adalSvc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the correct text when no enthusiasm level is given', () => {
  const app = enzyme.shallow(<App />);
  // const mockUser = {
  //   profile: {
  //     name: "Test"
  //   },
  //   username: "Test@jest.com"
  // }
  // const Mock = jest.fn<AdalService>(() => ({
  //   userInfo: jest.fn().mockReturnValue(mockUser)
  // }));

  // const mock = new Mock();

  expect(app.find(".LoggedInUser").text()).toEqual('Test User')
});
