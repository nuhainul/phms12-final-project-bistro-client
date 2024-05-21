## Project Repo:

- https://github.com/nuhainul/phms12-final-project-bistro

# Steps:

### Part-1

1. created a single `repo` for both folders of client & server with a `README.md` & `steps.md`.

2. connected the parent folder with the repo.

3. opened `parent folder > steps.md` in a vs code window using `cmd` > `code .`

4. went to https://reactrouter.com/en/main/start/tutorial for setting client side

5. copied `npm create vite@latest name-of-your-project -- --template react` to create the `client-side` on terminal (via cmd)

6. run `cd bistro-boss-client-phm-final-project` on the terminal (important)

7. copied `npm install react-router-dom localforage match-sorter sort-by` & pasted in the terminal again

8. [repeat] from step-5 (after deleting things) if errors happen (important)

9. went to https://tailwindcss.com/docs/guides/vite

10. copied & ran `npm install -D tailwindcss postcss autoprefixer` first, then `npx tailwindcss init -p`

11. opened the project using `code .`

12. go to `tailwind.config.js` file to paste/replace `content: [],` with the following

    ```
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    ```

13. went to `./src/index.css` file to replace everything with the following:

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

14. deleted everything in `./src/App.css`

15. went to `https://daisyui.com/docs/install/` to install daisyUI

16. ran `npm i -D daisyui@latest` to install daisyUI

17. added daisyUI to `tailwind.config.js` replacing `plugins: [],` with the following:

    ```
      plugins: [
        require('daisyui'),
      ],
    ```

18. went to `.eslintrc.cjs` to replace `env: { browser: true, es2020: true },` with `env: { browser: true, es2020: true, node: true },` so that require-daisy does not show warning in tailwindcss-config

19. ran `npm run dev -- --host`

20. went to `main.jsx` to paste the following below line-4:

```
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
```

21. replaced `<App />` with `<RouterProvider router={router} />`

22. created `Routes/Routes.jsx` under `/src` & pasted the following codes into the file:

```
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
```

23. added `export` before `const router = createBrowserRouter([`

24. added `import { router } from './Routes/Routes';` in `main.jsx`

25. For nested routes, created `Layout/Main.jsx` under `/src` [*capitalization important*] & added/imported `<Outlet>` from react-router-dom.

26. created `Pages/Home.jsx` under `./src` & used `rsc` emmit.

27. went to `Routes.jsx`, added the `<Home>` to the routes (see code below), and imported `Home` & `Main`.

```
import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);
```

28. created `Shared/Footer.jsx` under `/src` & used `rsc` emmit.

29. added `<Footer>` under `<Outlet>` on `Layout/Main.jsx`.

30. copied a daisyUI footer component & modified.

31. on `src/main.jsx` (_capitalization important_), replaced `<RouterProvider router={router} />` with:

```
<div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
```

32. created `/src/Shared/NavBar.jsx`, and added/imported it to `/src/Layout/Main.jsx`.

33. broghut a **responsive** navbar from daisyUI & modified (especially applied fixed position). `py-16` padding given to `<Outlet>`.

34. went to https://github.com/leandrowd/react-responsive-carousel, copied `react-responsive-carousel` & ran `npm i react-responsive-carousel` to install it.

35. created `/src/Components/Banner.jsx`, ran `rsc` emmit, and pasted the following:

```import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
```

36. copied & pasted the following from the mentioned webpage:

```
<Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
</Carousel>
```

37. copied the `assets` from the resource (repo) provided to `/src/asstets/assets`, and updated the image `src`s after importing them. (_important to check out the filename extensions & if the filenames have 0 at the beginning_)

38. added the `<Banner>` on `Home.jsx`.

39. went to https://swiperjs.com/get-started and https://swiperjs.com/demos

40. installed SwiperJS using `npm install swiper` command.

41. created `/src/Components/Category.jsx` to use Swiper & modified codes copied from Swiperjs.com.

42. created `/src/Shared/SectionTitle.jsx` & wrote the function.

43. added `<SectionTitle>` to `Category.jsx`.

44. add `<Category>` to `Home.jsx`.

45. as Swiper's `Pagination` is causing errors, commented a couple of lines (marked `//TODO`) for later. (N.B. Phm52.5-reward may help.)

46. created `src/Components/PopularMenu.jsx`, and started writing code.

47. placed `menu.json` & `reviews.json` (collected from provided resource repo) in `public` folder.

48. created `src/Shared/MenuItem.jsx` & wrote code.

49. went to `PopularMenu.jsx` & imported `<MenuItem>` & continued code.

50. added `<PopularMenu>` to `Home.jsx`.

51. created `src/Components/Featured.jsx ` & added it to `Home.jsx`.

52. added `./Featured.css` & imported it to `Featured.jsx`, and implemented **parallax**.

53. **Testimonials**: created `src/Components/Testimonials.jsx ` & added it to `Home.jsx`.

54. installed _react rating_ using `npm i @smastrom/react-rating`.

55. swiper navigation is yet to fixed #TODO. _Fix: I mistakenly installed things related to this in one directory up using vs code bash. So, it's better install things using `cmd` & double check which folder is opened in `cmd`_.

###Part-2

56. created `src/Pages/Menu.jsx`, and went to `src/Routes/Routes.jsx` to update the route.

57. installed `react-helmet-async` using `npm i react-helmet-async`.

58. started coding in `Menu.jsx`.

59. copied `logo.png` from `src/assets/assets` to `public` & updated `<title>` & `<link rel="icon" type="image/svg+xml" href="logo.png" />` in `index.html`.

60. went to `NavBar.jsx`, updated `<a>`s to `Link`s, added `Menu` to the list.

61. went to `src/main.jsx` & pasted `import { HelmetProvider } from 'react-helmet-async';` and replaced

```
<div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router} />
</div>
```

with

```
<HelmetProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
```

and added `<title>` importing `<Helmet>` in `Menu.jsx` & `Home.jsx`.

62. created `src/Shared/Cover.jsx`.

63. imported `menuImg` to `Menu.jsx`.

64. installed `react-parallax-component` from `https://github.com/keske/react-parallax-component` using `npm install react-parallax` & imported `Parallax` using `import { Parallax } from 'react-parallax';` to `Cover.jsx` & used as follows:

```
<Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
>
<div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    </div>
                </div>
            </div>
</Parallax>
```

65. created `src/Hooks/useMenu.jsx` & coded. 

66. worked on `PopularMenu.jsx` importing `useMenu` (commented codes are replaced by the new ones). 

67. imported `useMenu` and `Cover.jsx` in `Menu.jsx`, and applied **filter**.
 
68. created `src/Pages/MenuCategory.jsx` & imported it to `Menu.jsx`. 

69. imported/updated `<Menu>` to `Routes.jsx`. 

70. created `src/Pages/Order.jsx`, went to `Routes.jsx` to add it's path/route, and went to `NavBar.jsx` & updated `Link` to the route. 

71. installed `react-tabs` using `npm install --save react-tabs` and imported the following to `Order.jsx`: 
```
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
```  

72. brought *lifted* tab from `daisyUI` & re-coded. 

73. brought *menu*-list from `Menu.jsx` to `Order.jsx`. 

74. copied `const { name, image, price, recipe } = item;` from `MenuItem.jsx` to `FoodCard.jsx`. 

75. copied a *card* from daisyUI & created `src/Components/FoodCard.jsx`. 

76. coded in `Order.jsx` and `FoodCard.jsx`. 

77. created `src/Components/OrderTab.jsx` to replace `FoodCard.jsx` so that we can avoid repeating a bunch of codes. 

78. Swiper `pagination` is creating problems again saying `SyntaxError: The requested module '/node_modules/.vite/deps/swiper.js?v=aa9baf0d' does not provide an export named 'Pagination'`. **Search for `TODO` to fix it later.** 

79. updated `Routes.jsx` replacing `path: 'order',` with `path: 'order/:category',`; and replaced ``<Link to={`/order`}>`` on `MenuCategory.jsx` with ``<Link to={`/order/${title}`}>``. 

80. worked on `Order.jsx` and `OrderTab.jsx`. 

81. **error:** `useMenu.jsx` is not providing data  to `/Order/salad` as another level down is routed. So, we created a server. 

82. **Server-side:** opned the directory parent to the *client-side* using `cmd` and ran `mkdir final-bistro-server`.

83. then `cd final-bistro-server`. 

84. then `npm init -y`. 

85. then `npm i express cors dotenv mongodb`. [better if *server-side* is opened in a new VS Code window]

86. created `index.js` on *server-side*. 

87. wrote: 
```
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('bistro server is running')
})

app.listen(port, () => {
  console.log(`Bistro server is running on port ${port}`);
})
```

88. ran the server on `cmd` using `nodemon index.js`. 

89. error: `'nodemon' is not recognized as an internal or external command,
operable program or batch file.` **Solution**: As per Gemini suggested to install *nodemon* globally using `npm install -g nodemon`. 

90. went to `mongodb atlas` > `Database` > `Browse Collections` > `+ Create Database`.  

91. named the DB `bistroDb` & the collection `menu`. 

92. under `menu` collection, > `Insert Document` > `{}`. 


93. Deleted the sample data and pasted data from `menu.json` file already placed in the client-side public directory (after clearing all `_id` data). 

94. created `reviews` collection (by clicking on the `⊕` icon right to the Database Name) and pasted data the same way from `reviews.json`. 

95. time to set up `.env`. 

96. added `require('dotenv').config()` to line-4 of server-side `index.js`. 

97. created `.gitignore` in the root (where `package.json` is) of the server-side and wrote: 
```
node_modules
.env
.local
.env.local
*.local
``` 

98. [65-7:12] created Database User (`bistro*****`) going through `Database Access` > `+Add New Database User`. 

99. went to *server-side* to create `/.env` to update the DB_USER & DB_PASS: 
```
DB_USER=bistro****
DB_PASS=***********
```

100. went to *mongodb atlas* > `Database` > `Connect` > `Drivers` and copied: 
```

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.mcet7hn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
```

101. pasted the code after line-10 of *server-side* `index.js` right below the following: 
```
// middleware
app.use(cors());
app.use(express.json());
```

102. on server-side `index.js`, replaced `const uri = "mongodb+srv://<username>:<password>@cluster0.mcet7hn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";` with the following: 
```
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mcet7hn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
```

104. ran `nodemon index.js` and checked if mongodb connection is successful. 

105. went to MongoDB documentation > `Resources` > `Crud Operations` > `Usage Examples` > `Find Multiple Documents`. 

106. commented the followings: 
first, 
```
// Connect the client to the server	(optional starting in v4.7)
   await client.connect();
   // Send a ping to confirm a successful connection
   await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
```
and then, 
```
// Ensures that the client will close when you finish/error
    await client.close();
```


107. before ``} finally {``, added the following: 
```
const menuCollection = client.db("bistroDb").collection("menu");

    app.get('/menu', async(req, res) =>{
        const result = await menuCollection.find().toArray();
        res.send(result);
    })
```

108. went to `http://localhost:5000/menu` to check if the data is loaded from MongoDB. 

109. went to *client-side* `useMenu.jsx` and replaced `fetch('menu.json')` with `fetch('http://localhost:5000/menu')` in line-7-8. 

110. went to *server-side* `index.js` and added `` const reviewCollection = client.db("bistroDb").collection("reviews");`` (below ``const menuCollection = client.db("bistroDb").collection("menu");``) and added 
```
app.get('/reviews', async(req, res) =>{
        const result = await reviewCollection.find().toArray();
        res.send(result);
    })
```
below: 
```
app.get('/menu', async(req, res) =>{
        const result = await menuCollection.find().toArray();
        res.send(result);
    })
```

111. went to `Testimonilas.jsx` (on *client-side*) and replaced ``fetch('reviews.json')`` with ``fetch('http://localhost:5000/reviews')``. 

112. **swiper problem:** replace ``import { Pagination } from "swiper";`` with the following: 
```
import { Pagination } from 'swiper/modules';
```

113. went to `OrderTab.jsx` and added `swiper`. 

<!-- start of 66 -->

114. 