export interface mapState {
  maps: MapList[];
}
export interface MapList {
  firstCourseName: string;
  firstCourseLat: any;
  firstCourseLng: any;
  otherCourseNames: any[""] | null;
  otherCourseLats: any[""] | null;
  otherCourseLngs: any[""] | null;
}

export interface Course {
  userId: number;
  courseName: string;
}

export interface TourList {
  id?: number;
  city: string;
  content?: string;
  lat: string | number;
  lng: string | number;
  img?: string;
  hasMore?: boolean | null | undefined;
  check?: boolean | null;
}

export interface TestT {
  position: {
    lat?: string | number | null;
    lng?: string | number | null;
  };
}

export interface AlgoType {
  userId?: number | null;
  courseId?: number | null;
  firstCourseName: string;
  firstCourseLat: any;
  firstCourseLng: any;
  otherCourseNames: any[""] | null;
  otherCourseLats: any[""] | null;
  otherCourseLngs: any[""] | null;
}
