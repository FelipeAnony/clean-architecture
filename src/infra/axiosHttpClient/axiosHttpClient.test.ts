import { AxiosHttpClient } from './axiosHttpClient';

import axios from 'axios';
import { faker } from '@faker-js/faker';
import { HttpPostParams } from '@/data/protocols/http';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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
});
