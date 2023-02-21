import { test } from "vitest"
import { render } from "@testing-library/vue"
import ArtworksList from "@/components/ArtworksList.vue"

test("ArtworksList", async () => {
  const { findByText } = render(ArtworksList)

  await findByText("Mausch: Ein Strichmännchen")
})
