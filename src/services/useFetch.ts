import useSWR from 'swr'
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://5ee6cbe252bb0500161fcfeb.mockapi.io/'
});

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  })

  return { data, error }
}