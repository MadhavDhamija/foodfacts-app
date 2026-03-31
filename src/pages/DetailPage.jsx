import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function DetailPage() {
  const { barcode } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
        )

        if (response.data.status === 1) {
          setProduct(response.data.product)
        } else {
          setProduct(null)
          setError('Product not found.')
        }
      } catch (err) {
        setError('Failed to fetch product details.')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [barcode])

  if (loading) return <p>Loading product details...</p>
  if (error) return <p>{error}</p>
  if (!product) return <p>Product not found.</p>

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)}>← Back</button>

      <div className="detail-header">
        <img src={product.image_url} alt={product.product_name} />
        <h2>{product.product_name}</h2>
        <p>{product.brands}</p>
      </div>

      <div className="nutrition-table">
        <h3>Nutrition per 100g</h3>
        <ul>
          <li>Energy: {product.nutriments['energy-kcal_100g']} kcal</li>
          <li>Fat: {product.nutriments.fat_100g} g</li>
          <li>Saturated Fat: {product.nutriments['saturated-fat_100g']} g</li>
          <li>Carbohydrates: {product.nutriments.carbohydrates_100g} g</li>
          <li>Sugars: {product.nutriments.sugars_100g} g</li>
          <li>Protein: {product.nutriments.proteins_100g} g</li>
          <li>Salt: {product.nutriments.salt_100g} g</li>
        </ul>
      </div>

      <button onClick={() => {/* save this product */}}>
        Save to My List
      </button>
    </div>
  )
}

export default DetailPage