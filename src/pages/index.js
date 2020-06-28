import React from "react"
import FirstPart from "../components/FirstPart";
import SecondPart from "../components/SecondPart";
import ThirdPart from "../components/ThirdPart";
import "../General.css";
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Bills.com Clone" />
    <FirstPart />
    <SecondPart />
    <ThirdPart />
  </div>
)

//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

export default IndexPage
