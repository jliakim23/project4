"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {  useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {
 const {addItem, incrementItem, cartDetails} = useShoppingCart()
 const isInCart = !!cartDetails?.[product._id]
 const {toast} = useToast()

  function addToCart() {
    const item = {
      ...product,
      product_data: {
        name: product.name,
        description: product.description,

        }
      
  }
  isInCart ? incrementItem(item._id) : addItem(item)
toast({
  title: "Added to cart",
  description: `${product.name} was added to your cart.`,
  action: (
    <Link href = '/cart'>
      <Button variant="link" className="gap-x-2 white-nowrap">
        <span>View Cart</span>
        <ArrowRight className="ml-2 h-5 w-5" />
        </Button></Link>
  )
})
  }
  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">{product.currency} {product.price}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>


      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            type="button"
            onClick={addToCart}
            className="w-full grey py-6 text-base font-medium text-white hover:white-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Add to cart
          </Button>
        </div>
      </form>
    </div>
  )
}
