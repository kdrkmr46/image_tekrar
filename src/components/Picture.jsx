const Picture = ({ img, photoname }) => {
  return (
    <div>
      <img className="imageContainer" src={img} alt={img} />
      <span className="css"> {photoname} </span>
    </div>
  );
};

export default Picture;
