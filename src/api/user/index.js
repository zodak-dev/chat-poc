import Api from '../index';

const root = '/auth';

const Service = {
  signIn: async ({ email, password }) => {
    return await Api.post(
      `${root}/sign-in`,
      { email, password }
    );
  }
};

export default Service;