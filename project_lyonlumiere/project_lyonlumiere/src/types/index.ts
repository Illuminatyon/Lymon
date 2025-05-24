export interface LightPoint {
  id: string;
  x: number; // position in percentage (0-100)
  y: number; // position in percentage (0-100)
  title: string;
  description: string;
  image?: string;
}

export interface Scene {
  id: string;
  title: string;
  backgroundImage: string;
  description: string;
  lightPoints: LightPoint[];
}