import axios from "axios"
import {createContext, useContext, useReducer} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import {API} from "../../helpers/const"

const productContext = createContext()
export const useProducts = () => useContext(productContext)

const ProductContextProvider = ({children}) => {
  const INIT_STATE = {
    products: [],
    oneProduct: null,
  }

  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {...state, products: action.payload}
      case "GET_ONE_PRODUCT":
        return {...state, oneProduct: action.payload}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, INIT_STATE)
  const location = useLocation()
  const navigate = useNavigate()

  // ! create
  const addProduct = async (newProd) => {
    console.log("Adding product:", newProd)
    await axios.post(API, newProd)
    getProducts()
  }

  // ! get
  const getProducts = async () => {
    const {data} = await axios(`${API}/${window.location.search}`)
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    })
  }

  //! GETONEPRODUCT
  const getOneProduct = async (id) => {
    const {data} = await axios(`${API}/${id}`)
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    })
  }

  // ! edit
  const editProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct)
    getProducts()
  }

  // ! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`)
    getProducts()
  }

  function fetchByParams(query, value) {
    const paramsFromUrl = new URLSearchParams(location.search)
    if (value === "all") {
      paramsFromUrl.delete(query)
    } else {
      paramsFromUrl.set(query, value)
    }
    const url = `${location.pathname}?${paramsFromUrl.toString()}`
    navigate(url)
  }

  const values = {
    fetchByParams,
    addProduct,
    getProducts,
    products: state.products,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    deleteProduct,
  }

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  )
}

export default ProductContextProvider
