import { Endpoints } from '../../types';

export const getSomething: Endpoints['getSomething'] = async (
  context,
  params
) => {
  console.log('getSomething has been called');

  return { data: 'Hello from getSomething endpoint!' };
};
