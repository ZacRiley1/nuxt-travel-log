export const sidebarLinks = [
  { type: "link", icon: "tabler:home", text: "Home", to: "/dashboard" },
  {
    type: "group",
    icon: "tabler:map",
    text: "Locations",
    data: [
      {
        type: "link",
        icon: "tabler:map-pin-2",
        text: "All Locations",
        to: "/dashboard/locations",
      },
      {
        type: "link",
        icon: "tabler:map-pin-filled",
        text: "My Locations",
        to: "/dashboard/locations/my-locations",
      },
      {
        type: "link",
        icon: "tabler:map-pin-plus",
        text: "Add Location",
        to: "/dashboard/locations?add=true",
      },
    ],
  },
  {
    type: "link",
    icon: "solar:gallery-minimalistic-bold",
    text: "Gallery",
    to: "/dashboard/gallery",
  },
];

export default sidebarLinks;
