import { AxiosHttpClient } from './axiosHttpClient';

import axios from 'axios';
import { faker } from '@faker-js/faker';
import { HttpPostParams } from '@/data/protocols/http';

jest.mock('axios');
const mockedAxiosResponse = {
  data: {},
  status: faker.internet.httpStatusCode(),
};
const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.post.mockResolvedValue(mockedAxiosResponse);

const makeSut = () => {
  return { sut: new AxiosHttpClient() };
};

const makePostParams = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: { data: faker.datatype.array() },
  };
};

describe('AxiosHttpClient', () => {
  test('Should call axios POST method with correct params', async () => {
    const { sut } = makeSut();
    const postParams = makePostParams();
    await sut.post(postParams);
    expect(mockedAxios.post).toHaveBeenCalledWith(
      postParams.url,
      postParams.body
    );
  });

  test('Should return the correct status code and body', async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.post(makePostParams());
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResponse.status,
      body: mockedAxiosResponse.data,
    });
  });
});
