import Herotopview from "./hero-top/hero-top.view"
import Featuredview from "./featured/featured.view"
import Slack from "./slack/slack"
import Cta from "./cta/cta"

export default function landingpageview() {
  return (
    <>
      <Herotopview />
      <Featuredview />
      <Slack />
      <Cta />
    </>
  )
}
