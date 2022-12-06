interface props {
  idx: number;
  name: string;
}
const Points = ({ idx, name }: props) => {
  return (
    <div>
      {idx + 1}번째 여행지 {name}
    </div>
  );
};
export default Points;
