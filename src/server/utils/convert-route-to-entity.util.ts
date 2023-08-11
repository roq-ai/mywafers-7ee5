const mapping: Record<string, string> = {
  announcements: 'announcement',
  birthdays: 'birthday',
  blogs: 'blog',
  'hall-of-fames': 'hall_of_fame',
  organizations: 'organization',
  rewards: 'reward',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
