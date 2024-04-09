export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
}

export interface ServicesData {
  services: Service[];
}

export interface ServicesByCategories {
    [category: string]: Service[];
}

export interface TimeslotResponse {
  date: string;
  serviceId: number;
  availableTimeslots: string[];
}
