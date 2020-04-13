
const SearchBar = props => (
  <>
    <input type="text" placeholder='"Photos", "Paintings", "Music", etc...'/>
    <style jsx>{
      `
      input {
        width: 20rem;
        height: 3rem;
        border-radius: 5px;
        border: none;
        background-color: rgba(245,241,208,0.8);
        font-size: 1rem;
        text-align: center;
        
      }
      ::-webkit-input-placeholder {
        
        color: rgb(7,26,36)
      }
      input:focus {
        outline: none
      }
      `
    }
    </style>
  </>
)

export default SearchBar