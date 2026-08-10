/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import './index.css'
import Index from './pages/Index.tsx'
import NotFound from './pages/NotFound.tsx'

import About from './pages/About.tsx'
import Apply from './pages/Apply.tsx'
import Schedule from './pages/Schedule.tsx'
import Team from './pages/Team.tsx'

const root = document.getElementById('root')

render(() => (
  <Router>
    <Route path="/" component={Index} />
    <Route path="/about" component={About} />
    <Route path="/apply" component={Apply} />
    <Route path="/schedule" component={Schedule} />
    <Route path="/team" component={Team} />
    <Route path="*paramName" component={NotFound} />
  </Router>
), root!)
