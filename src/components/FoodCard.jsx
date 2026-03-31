import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()
  const { product_name, brands, nutriments, image_small_url, code } = product

  const handleClick = () => {
  navigate(`/product/${code}`)
}

  return (
    <div className="food-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {/* your existing JSX from Part 1 — no other changes needed */}
    </div>
  )
}