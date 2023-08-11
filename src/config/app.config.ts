interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Employee', 'Manager', 'HR Representative'],
  tenantName: 'Organization',
  applicationName: 'Mywafers',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
