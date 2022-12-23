export interface mapState {
  maps: MapList[];
}
export interface MapList {
  firstCourseName: string;
  firstCourseLat: any;
  firstCourseLng: any;
  otherCourseNames: string[];
  otherCourseLats: any[];
  otherCourseLngs: any[];
}

export interface TourList {
  id?: string | undefined;
  city: string;
  content?: string;
  lat: string | number;
  lng: string | number;
  img?: string;
  hasMore?: boolean | null | undefined;
}
