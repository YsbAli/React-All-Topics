import './category.css'


export const Category = ({ image, label }) => {
  return (
    <div className="category">          
      <img src={image} alt="" />
      <b>{label}</b>
    </div>
  );
};
