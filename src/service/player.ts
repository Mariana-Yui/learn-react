import http from '@/utils/axios';

export function getSongDetail(ids: number): Promise<any> {
  return http.request({
    url: '/song/detail',
    params: {
      ids,
    },
  });
}

export function getLyric(id: number): Promise<any> {
  return http.request({
    url: '/lyric',
    params: {
      id,
    },
  });
}

export function getSimiPlaylist(id: number): Promise<any> {
  return http.request({
    url: '/simi/playlist',
    params: {
      id,
    },
  });
}

export function getSimiSong(id: number): Promise<any> {
  return http.request({
    url: '/simi/song',
    params: {
      id,
    },
  });
}
