import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Books } from "../pages/Books/Books";
import { Movies } from "../pages/Movies/Movies";
import { Spells } from "../pages/Spells/Spells";
import { Characters } from "../pages/Characters/Characters";
import { Book } from "../pages/Books/Book/Book";
import { Movie } from "../pages/Movies/Movie/Movie";
import { Character } from "../pages/Characters/Character/Character";
import { Shop } from "../pages/Shop/Shop";
import { Cart } from "../pages/Shop/Cart/Cart";
import { Product } from "../pages/Shop/Product/Product";
import { Wischlist } from "../pages/Shop/Wischlist/Wischlist";
import { LayoutShop } from "../components/LayoutShop/LayoutShop";
export const router = createBrowserRouter([
  {
    element: <Layout></Layout>,
    path: "/",
    errorElement: <Navigate to="/characters"></Navigate>,
    children: [
      {
        index: true,
        element: <Navigate to="/characters" />,
      },
      {
        element: <Character></Character>,
        path: "/characters/:character",
      },
      {
        element: <Characters></Characters>,
        path: "/characters",
      },
      {
        element: <Books></Books>,
        path: "/books"},
        { element: <Book></Book>,
         path: "/books/:book" },
      
      {
        element: <Movies></Movies>,
        path: "/movies",
      },
      { element: <Movie></Movie>, 
      path: "/movies/:movie" },

      {
        element: <Spells></Spells>,
        path: "/spells",
      },
      {
        element: <LayoutShop></LayoutShop>,
        path: "/shop",
        children:[{
          index: true,
          element:<Shop></Shop>,
          },
          {element:<Wischlist></Wischlist>,
          path:'/shop/wischlist'
          },
          {element:<Cart></Cart>,
          path:'/shop/cart'
          },
          {element:<Product></Product>,
          path:'/shop/:id'
          }


         
        ]
       
      },
    ],
  },
]);
