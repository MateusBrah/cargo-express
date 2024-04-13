interface GpsPointProps {
  longitude: number;
  latitude: number;
  acquisition_time_unix: number;
  speed: number;
  direction: number;
  acquisition_time: string;
  address?: string;
}

interface Course {
  gps: GpsPointProps[];
}

interface JsonData {
  courses: Course[];
}