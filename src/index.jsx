import React from "react"
import { render } from "react-dom"
import TwitterSearch from "./component/twitter-search"

const here = document.querySelector("#here")

const twitterSearch = <TwitterSearch />

render(twitterSearch, here)
