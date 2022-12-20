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
