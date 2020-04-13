
const FeaturedCard = ({card}) => {
  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.content}</p>
      <style jsx> {
        `
        div {
          width: 20rem;
          border-radius: 5px;
          background-color: rgba(235,236,240, 0.3);
          margin: 2rem 0
        }
        `
      }

      </style>
    </div>
  )
}

export default FeaturedCard