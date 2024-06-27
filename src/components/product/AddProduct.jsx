import React, {useState} from "react"
import {useProducts} from "../context/ProductContextProvider"
import { Box } from "@mui/system"
import { Button, TextField, Typography } from "@mui/material"

const AddProduct = () => {
  const {addProduct} = useProducts()
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
  })

  const handleInput = (e) => {
    const {name, value} = e.target
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === "price" ? Number(value) : value,
    }))
  }

  const handleClick = () => {
    console.log("Product to add:", product)
    addProduct(product)
  }

  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInput}
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
      />
      <TextField
        name="description"
        onChange={handleInput}
        fullWidth
        label="Description"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        name="image"
        fullWidth
        label="Image URL"
        variant="outlined"
      />

      <Button fullWidth variant="outlined" onClick={handleClick}>
        ADD PRODUCT
      </Button>
    </Box>
  )
}

export default AddProduct
