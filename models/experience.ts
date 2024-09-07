export interface Experience {
  employer: string;
  positions: Position[];
}

export interface Position {
  jobTitle: string;
  startDate: string;
  endDate?: string;
  content: string;
}
