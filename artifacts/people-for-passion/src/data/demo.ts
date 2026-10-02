export type Beneficiary = {
  id: string;
  name: string;
  dob: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  category: string;
  program: string;
  supportType: string;
  status: string;
  priority: string;
  notes: string;
  createdAt: string;
  followUp: string;
  assignedTo?: string;
};
export const supportCategories = ['Women', 'Children', 'Specially-abled', 'LGBTQIA+', 'Elderly', 'Underprivileged', 'Other'];
export const supportTypes = ['Food', 'Education', 'Healthcare', 'Clothing', 'Hygiene', 'Financial Assistance', 'Community Support', 'Other'];
export const beneficiaryStatuses = ['Active', 'Completed', 'Pending', 'Follow-up Required'];

export const initiativeGroups = [
  { name: 'Women & Girls', items: ['Sole To Souls', 'Menstrual Hygiene Day', "Mother's Day"] },
  { name: 'Children', items: ['Toy Drive Bengaluru', 'Toy Drive at Hubli', 'Makara Sankranti Toy Drive', 'Pulse Polio Immunisation Drive'] },
  { name: 'Inclusion', items: ['World Down Syndrome Day', 'Wishbone Day'] },
  { name: 'Community Welfare', items: ['Fan Donation at Mandya', 'Virtual Volunteering for Food Drive', 'Addressing Civic Issues', 'Republic Day Celebration', 'Holi Celebration'] },
  { name: 'Environment & Animals', items: ['Feed a Dog'] },
];

export const demoBeneficiaries: Beneficiary[] = [
  { id: 'PFP-0248', name: 'Aarohi M.', dob: '2012-03-14', age: 13, gender: 'Female', phone: '9000000101', email: '', address: 'Demo record — fictional', city: 'Bengaluru', state: 'Karnataka', pin: '560001', category: 'Children', program: 'Toy Drive Bengaluru', supportType: 'Education', status: 'Active', priority: 'High', notes: 'Fictional training record. Do not use as a real case.', createdAt: '2025-02-16', followUp: '2025-06-18', assignedTo: 'Volunteer-Staff' },
  { id: 'PFP-0247', name: 'Ishaan R.', dob: '2015-11-02', age: 9, gender: 'Male', phone: '9000000102', email: '', address: 'Demo record — fictional', city: 'Hubli', state: 'Karnataka', pin: '580020', category: 'Children', program: 'Toy Drive at Hubli', supportType: 'Other', status: 'Follow-up Required', priority: 'Normal', notes: 'Fictional training record. Do not use as a real case.', createdAt: '2025-01-30', followUp: '2025-06-22', assignedTo: 'Volunteer-Staff' },
  { id: 'PFP-0246', name: 'Meera S.', dob: '1989-08-20', age: 35, gender: 'Female', phone: '9000000103', email: '', address: 'Demo record — fictional', city: 'Mandya', state: 'Karnataka', pin: '571401', category: 'Women', program: 'Sole To Souls', supportType: 'Clothing', status: 'Active', priority: 'Urgent', notes: 'Fictional training record. Do not use as a real case.', createdAt: '2025-01-11', followUp: '2025-06-15', assignedTo: 'Volunteer-Staff' },
  { id: 'PFP-0245', name: 'Kabir N.', dob: '2001-07-09', age: 23, gender: 'Prefer not to say', phone: '9000000104', email: '', address: 'Demo record — fictional', city: 'Bengaluru', state: 'Karnataka', pin: '560043', category: 'Specially-abled', program: 'World Down Syndrome Day', supportType: 'Community Support', status: 'Completed', priority: 'Normal', notes: 'Fictional training record. Do not use as a real case.', createdAt: '2024-12-18', followUp: '' },
  { id: 'PFP-0244', name: 'Diya K.', dob: '2010-05-24', age: 15, gender: 'Female', phone: '9000000105', email: '', address: 'Demo record — fictional', city: 'Bengaluru', state: 'Karnataka', pin: '560034', category: 'Children', program: 'Pulse Polio Immunisation Drive', supportType: 'Healthcare', status: 'Active', priority: 'Normal', notes: 'Fictional training record. Do not use as a real case.', createdAt: '2024-11-06', followUp: '2025-06-29' },
  { id: 'PFP-0243', name: 'Nila P.', dob: '1996-02-10', age: 29, gender: 'Female', phone: '9000000106', email: '', address: 'Demo record — fictional', city: 'Hubli', state: 'Karnataka', pin: '580030', category: 'Women', program: 'Menstrual Hygiene Day', supportType: 'Hygiene', status: 'Follow-up Required', priority: 'High', notes: 'Fictional training record. Do not use as a real case.', createdAt: '2024-10-20', followUp: '2025-06-20' },
  { id: 'PFP-0242', name: 'Arjun V.', dob: '2013-09-01', age: 11, gender: 'Male', phone: '9000000107', email: '', address: 'Demo record — fictional', city: 'Mandya', state: 'Karnataka', pin: '571402', category: 'Other', program: 'Virtual Volunteering for Food Drive', supportType: 'Food', status: 'Pending', priority: 'Urgent', notes: 'Fictional training record. Do not use as a real case.', createdAt: '2024-09-13', followUp: '2025-06-17' },
];

const STORAGE_KEY = 'pfp-demo-beneficiaries-v1';
export function readBeneficiaries(): Beneficiary[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return demoBeneficiaries;
    const oldItems = JSON.parse(stored) as Beneficiary[];
    return oldItems.map(item => ({
      ...item,
      category: supportCategories.includes(item.category) ? item.category : item.category === 'Women & Girls' ? 'Women' : item.category === 'Inclusion' ? 'Specially-abled' : item.category === 'Community Welfare' ? 'Other' : 'Other',
      supportType: supportTypes.includes(item.supportType) ? item.supportType : 'Other',
      status: item.status === 'Follow-up' ? 'Follow-up Required' : beneficiaryStatuses.includes(item.status) ? item.status : 'Active',
      assignedTo: item.assignedTo || (['PFP-0248', 'PFP-0247', 'PFP-0246'].includes(item.id) ? 'Volunteer-Staff' : undefined),
    }));
  } catch {
    return demoBeneficiaries;
  }
}
export function writeBeneficiaries(items: Beneficiary[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function readDemoCollection(key: string, fallback: string[]): string[] {
  try {
    const stored = localStorage.getItem(`pfp-demo-${key}-v1`);
    return stored ? JSON.parse(stored) as string[] : fallback;
  } catch {
    return fallback;
  }
}
export function writeDemoCollection(key: string, items: string[]) {
  localStorage.setItem(`pfp-demo-${key}-v1`, JSON.stringify(items));
}