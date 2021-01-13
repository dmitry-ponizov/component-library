export const projectPath = `/mam/mam/project`
const { REACT_APP_BASE_URL: baseURL } = process.env
const { REACT_APP_MAM_WS: mamWS } = process.env

export default {
  locizeProjectId: 'ae7ef3b6-10dd-4668-a415-1456b04d39da',
  locizeApiKey: '22445f1f-f5c8-4d4a-92c3-f205afb14370',
  services: {
    // Spaces
    user: '/user',
    space: '/space/space',
    memberInfo: '/space/space/member',
    getUserAvatar: (file: string) => `/space/space/member/logo/${file}`,
    getFilePreview: (thumbnail_url: string) => `${baseURL}/storage${thumbnail_url}`,
  },
}
