"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Autoplay from "embla-carousel-autoplay"

import Image from "next/image"
import { findProductById } from "@/app/(dashboard)/dashboard/components/products-array"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { ImageOff } from "lucide-react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


function ProductForm({
    productId
}: {
    productId: string
}) {
    const product = findProductById(productId)
    const productImages = product?.images

    const formSchema = z.object({
        name: z.string(),
        price: z.string(),
        category: z.string(),
        size: z.string(),
        color: z.string(),
        createdAt: z.string(),
        isArchived: z.boolean(),
        images: z.array(z.string()),
        description: z.string()
      })

      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: product?.name,
          price: product?.price,
          category: product?.category,
          size: product?.size,
          description: product?.description,
          isArchived: product?.isArchived
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
      

      return (
      <>
        <div className="flex items-center justify-between">
        <Heading title={product?.name} description={"aaa"} />
        </div>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
            <div className=" gap-4 flex-row lg:flex ">
            <div >
            <Carousel
             plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            className="w-full max-w-md items-center">
                <CarouselContent>
                    {productImages?.map((image => (
                        <CarouselItem key={image}>
                            <div className="p-1">
                            <Image alt={""} src={image} width={500} height={500}/>
                            </div>
                        </CarouselItem>
                    )))
                    }
                </CarouselContent>
            
            </Carousel>
           
            </div>
            <div className="md:grid md:grid-cols-2 w-full gap-8 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do produto</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço do produto</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <FormControl>
                    <Input placeholder="Insira" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tamanho</FormLabel>
                  <FormControl>
                    <Input  placeholder="Insira" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />      
                <FormField
              control={form.control}
              name="isArchived"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disponivel na loja</FormLabel>
                  <FormControl>
                    <Input type="checkbox" checked={!field.value} onChange={(e) => field.onChange(!e.target.checked)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />      
            </div>
            
            </div >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input className="h-20" placeholder="Insira" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="ml-auto flex items-center space-x-4" type="submit">Atualizar</Button>
          </form>
        </Form>
    </>
      )
}

export default ProductForm;