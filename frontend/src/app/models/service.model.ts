export interface Service {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  service_interest?: string;
}

export interface AboutInfo {
  company_name: string;
  mission: string;
  founded: string;
  locations: string[];
  certifications: string[];
}
