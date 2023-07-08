const Picture = ({ img, photoname }) => {
  return (
    <div>
      <img src={img} alt={img} />
      <span> {photoname} </span>
    </div>
  );
};

export default Picture;
