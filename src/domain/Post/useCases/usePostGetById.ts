import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {postService} from '../postService';

export function usePostGetById(id: number, enabled: boolean) {
  const {data, isError, isLoading, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.PostById, id],
    queryFn: () => postService.getById(id),
    staleTime: 1000 * 10, // 10 seconds
    enabled,
  });

  return {
    post: data,
    isError,
    isLoading,
    refetch,
    isFetching,
  };
}
