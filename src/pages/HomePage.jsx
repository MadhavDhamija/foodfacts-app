import useFoodSearch from '../hooks/useFoodSearch'

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch()

  return (
    <div className="page">
      <h2>Search Nutrition Info</h2>
      <SearchBar onSearch={searchFood} />
      {/* render loading, error, and results */}
    </div>
  )
}