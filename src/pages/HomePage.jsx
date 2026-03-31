import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import FoodList from '../components/FoodList'

function HomePage() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    // your existing fetch logic from Part 1 goes here
    // you will refactor this into a custom hook shortly
  }

  return (
    <div className="page">
      <h2>Search Nutrition Info</h2>
      <SearchBar onSearch={handleSearch} />
      {/* your loading, empty, and results rendering */}
    </div>
  )
}

export default HomePage