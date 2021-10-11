import React from "react";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import PDFgen from './pages'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/pdfgen' component={PDFgen}/>
            </Switch>
        </BrowserRouter>
    )
}
