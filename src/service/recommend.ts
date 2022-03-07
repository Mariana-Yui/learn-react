import http from '@/utils/axios';

export async function getTopBanners(): Promise<any> {
  return await http.request({
    url: '/banner',
  });
}

export async function getHotRecommend(): Promise<any> {
  return await http.request({
    url: '/personalized',
  });
}

export async function getNewAlbum(): Promise<any> {
  return await http.request({
    url: '/top/album',
  });
}

export async function getTopList(idx: number): Promise<any> {
  let id: string;
  switch (idx) {
    case 0:
      id = '19723756';
      break;
    case 2:
      id = '3779629';
      break;
    case 3:
      id = '2884035';
      break;
    default:
      id = '19723756';
  }
  return await http.request({
    url: '/playlist/detail',
    params: {
      id,
    },
  });
}

export async function getArtistList(limit?: number, type?: number, area?: number): Promise<any> {
  return await http.request({
    url: '/artist/list',
    params: {
      limit,
      type,
      area,
    },
  });
}

export async function getHotRadio(cateId: number, limit?: number) {
  return await http.request({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
    },
  });
}
