import axios from "axios";
import { UserType } from "@/Types/UserType";
import { Profile } from "@/Types/ProfileType";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const POST_URL = process.env.NEXT_PUBLIC_POST_URL;

type LoginRequest = {
  username: string;
  password: string;
};

type RegisterRequest = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  registrationDate: Date;
  phoneNumber: string;
  role: string[];
};

export const login = async (request: LoginRequest) => {
  try {
    return await axios.post(`${API_URL}/userApi/login`, request);
  } catch (error) {
    throw error;
  }
};

export const register = async (request: RegisterRequest) => {
  try {
    return await axios.post(`${API_URL}/userApi/signup`, request);
  } catch (error) {
    throw error;
  }
};

export const createPost = async (
  profileId: string,
  title: string,
  content: string
) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, {
      profileId,
      title,
      content,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/home`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (postId: string) => {
  try {
    const response = await axios.get(`${API_URL}/PostPage/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (
  postId: string,
  title: string,
  content: string
) => {
  try {
    const response = await axios.put(`${API_URL}/posts/${postId}`, {
      title,
      content,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComments = async (postId: string) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addComment = async (
  postId: string,
  profileId: string,
  content: string
) => {
  try {
    const response = await axios.post(`${API_URL}/posts/${postId}/comments`, {
      profileId,
      content,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComment = async (commentId: string) => {
  try {
    const response = await axios.get(`${API_URL}/comments/${commentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (commentId: string, content: string) => {
  try {
    const response = await axios.put(`${API_URL}/comments/${commentId}`, {
      content,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (commentId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/comments/${commentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/ProfileApi/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (userId: string, profileData: Profile) => {
  try {
    const response = await axios.put(
      `${API_URL}/profiles/${userId}`,
      profileData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (
  username: string,
  firstName: string,
  lastName: string,
  password: string,
  email: string,
  birthDate: string
) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      username,
      firstName,
      lastName,
      password,
      email,
      birthDate,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userId: string) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId: string, userData: UserType) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchUsers = async (username: string) => {
  try {
    const response = await axios.get(`${API_URL}/search-users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
