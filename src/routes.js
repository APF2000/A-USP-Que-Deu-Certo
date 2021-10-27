import React from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import PDFgen from './pages/PDFgen'
import Landing from './pages/Landing'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/pdfgen' component={PDFgen}/>
                <Route path='/' component={Landing}/>
            </Switch>
        </BrowserRouter>
    )
}
