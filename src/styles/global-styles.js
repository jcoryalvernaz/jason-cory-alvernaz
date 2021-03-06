import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css?family=Neuton&display=swap");

html {
  box-sizing: border-box;
  font-size: 10px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-family: "Lato", sans-serif;
}
html,
body {
  width: 100%;
  height: 100%;
}
a {
  color: ${props => props.theme.textColor};
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  font-family: "Neuton", sans-serif;
  letter-spacing: .3rem;
}
`

export default GlobalStyles
