import Dashboard from "../pages/admin/Dashboard/Dashboard"
import Products from "../pages/admin/Products/Products"
import Home from "../pages/site/Home/Home"
import AdminRoot from "../pages/admin/AdminRoot"
import SiteRoot from "../pages/site/SiteRoot"
import Error from "../pages/site/Error/Error"
import Add from "../pages/admin/Add/Add"
import Detail from "../pages/site/Details/Detail"


const ROUTES=[
    {
path: "/",
element:<SiteRoot/>,


children:[{
    path:"",
    element: <Home />
},{
    path:"/details/:id",
    element:<Detail/>
}
,{
    path:"*",
    element:<Error/>
}],
},{
    path:"/admin",
    element:<AdminRoot/>,
    children:[{
        path:"dashboard",
        element:<Dashboard/>
    },{
        path:"",
        element:<Products/>
    },{
        path:"add",
        element:<Add/>
    }]
}
]

export default ROUTES