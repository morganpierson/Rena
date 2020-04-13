import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import FeaturedCard from '../components/FeaturedCard/FeaturedCard'

const cards = [
  {
    title: "User_1",
    content: "User 1 information. They are a mixed media artist with a focus in painting and photography"
  },
  {
    title: "User_2",
    content: "User 2 information. They are a musical artist who uses found sounds to create unique sonic experiences"
  },
  {
    title: "User_3",
    content: "User 3 information. They are a spoken word artist who has traveled the world performing at TED talks and concert halls."
  },
  {
    title: "User_4",
    content: "User 4 information. They are a traveling adventure photographer."
  },
]

const Index = () => (
  <>
  <div className="index-container">
  <Header />
  <SearchBar />
  </div>
  <div className="featured-cards-container">
  {cards.map((card) => (
    <FeaturedCard card={card} />
  ))}
  </div>
    <style jsx global>{
      `
      * {
        font-family: Roboto;
        box-sizing: border-box;
        
      }
      body {
        margin: 0;
        background-color: #071a24;

      }
    .index-container {
      display: flex;
      align-items: center
    }

    .featured-cards-container {
      display: flex;
      flex-wrap: wrap;
      width: 60%;
      text-align: center;
      margin: 0 auto;
      justify-content: space-between;
     
    }
     h1, p {
       color: #f5f1d0
     }
     h1 {
       font-size: 3rem;
       margin: 0rem
     }
     p {
       margin-top: 0
     }
     
      `
    }
    </style>
  </>
)

export default Index