interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read user information',
    'View employee details',
    'View vacation details',
  ],
  ownerAbilities: ['Manage user information', 'Manage company information', 'Manage employee data', 'Manage payroll'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/77167862-ee24-4dc8-b10c-cb31b0e2b0c4',
};
