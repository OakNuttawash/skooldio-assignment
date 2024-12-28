export interface Score {
  id: string;
  year: number;
  scoreType: string;
  min: number;
  max: number;
  avg: number;
}

export interface University {
  id: string;
  name: string;
}

export interface Faculty {
  id: string;
  name: string;
  tagId: string;
  university: University;
}

export interface ApiResponse {
  id: string;
  name: string;
  logo: string;
  roundSeats: number[];
  score: Score;
  faculty: Faculty;
  updatedAt: string;
  likes: number;
}
