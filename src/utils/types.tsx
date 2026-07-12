export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export type player = {
    id: number;
    name: string;
    position: string;
    goals: number;
    passes: number;
    assists: number;
    shots: number;
    age: number;
    leagues: string[];
    matches_own: number;  
    score: number;  
}

