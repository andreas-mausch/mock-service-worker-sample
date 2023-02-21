import { test } from "vitest"
import { render } from "@testing-library/vue"
import Artworks from "@/components/Artworks.vue"

test("Artworks", async () => {
  const { findByText } = render(Artworks)

  await findByText("Mausch: Ein Strichmännchen")
})
