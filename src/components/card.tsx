type CardProps = {
  imageURL: string;
  title: string;
  total: number | string | undefined;
};

export const Card = ({ imageURL, title, total }: CardProps) => {
  return (
    <div className='card box-shadow'>
      <img src={imageURL} alt='' />
      <h4>{title}</h4>
      <p>{total}</p>
    </div>
  );
};
