import { PostBodyType, UserType } from '@homework-task/types/interfaces';
import axios, { AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

type GetUserListResponse = AxiosResponse<UserType[]>;
type AddNewPostResponse = AxiosResponse<PostBodyType>;

export const getUserList = async (): Promise<GetUserListResponse> => {
    return await axiosInstance({
        url: '/users',
        method: 'GET',
    });
};

export const addNewPost = async (
    data: PostBodyType
): Promise<AddNewPostResponse> => {
    return await axiosInstance({
        url: '/posts',
        method: 'POST',
        data: data,
    });
};
