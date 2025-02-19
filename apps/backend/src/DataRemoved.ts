import { ponder } from "@/generated";

ponder.on("Router:DataRemoved", async ({ event, context }) => {
  const { Listing } = context.entities;
  const { press, ids } = event.params;

  // Remove the listings associated with the ids
  for (const id of ids) {
    await Listing.delete({
      id: `${press}-${id}`,
    });
  }
});
