import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
} from 'react-router-dom';

import { Home, Orders, Kitchen, Payment, Customers, Configs } from '../pages'

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/kitchen' element={<Kitchen />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/configs' element={<Configs />} />
                {/* <Route component={NotFound} /> */}
            </Routes>
        </BrowserRouter>
    )
}