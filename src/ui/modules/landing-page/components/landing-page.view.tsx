import Herotopview from "./hero-top/hero-top.view"
import Featuredview from "./featured/featured.view"
import Slack from "./slack/slack.view"
import Cta from "./cta/cta.view"
import Highlightlist from "./highlight-list/highlight-list.view"
import Calltoactionview from "@/ui/design-system/call-to-action/call-to-action.view"

export default function landingpageview() {
  return (
    <>
      <Herotopview />
      <Featuredview />
      <Slack />
      <Cta />
      <Highlightlist />
      <Calltoactionview />
    </>
  )
}
