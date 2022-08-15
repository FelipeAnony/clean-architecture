import { faker } from '@faker-js/faker';
import axios from 'axios';

const mockedAxiosPostResponse = {
  data: {},
  status: faker.internet.httpStatusCode(),
};

export const mockAxios = () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  mockedAxios.post.mockResolvedValue(mockedAxiosPostResponse);

  return { mockedAxios, mockedAxiosPostResponse };
};
